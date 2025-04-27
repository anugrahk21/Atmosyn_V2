import Layout from "@/components/layout/Layout";
import Link from "next/link";
import data from "@/util/blog.json";
import { generateDynamicMetadata, generateJsonLd } from "@/util/metadata";
import type { Metadata } from 'next';
import Script from 'next/script';
import BlogFAQAccordion from "@/components/elements/BlogFAQAccordion";

// This tells Next.js to pre-render all possible blog pages at build time
export async function generateStaticParams() {
  return data.map((post) => ({
    id: String(post.id),
  }))
}

// This makes the page static instead of dynamic
export const dynamicParams = false;

interface BlogPost {
    id: number;
    title: string;
    img: string[]; // Changed from string to string array to support multiple images
    category: string;
    author: string;
    date: string;
    excerpt?: string;
    content?: string;
    subsections?: {
        title: string;
        content: string;
        points?: string[]; // Added points array for bullet points
    }[];
    keyTakeaways?: string[];
    seoKeywords?: string[];
    tags?: string[]; // Added tags property
    faqs?: {
        question: string;
        answer: string;
    }[];
    references?: {
        id: number;
        text: string;
        url: string;
    }[];
}

// Generate dynamic metadata for this blog post
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const post = data.find((post) => String(post.id) === params.id)
    
    // Use our utility to generate metadata for this specific blog post
    return generateDynamicMetadata(post, 'blog')
}

// Format date to more readable format
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

// Helper function to create URL-safe ID from subsection title
const createSectionId = (title: string): string => {
    return title
        .trim() // Add trim() here
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')     // Replace spaces with hyphens
        .replace(/-+/g, '-');     // Replace multiple hyphens with single hyphen
};

// Helper function to get blog image URL safely with new folder structure
const getBlogImageUrl = (imgData: string | string[], index: number = 0, fallbackImage: string = 'default-thumbnail.jpg', blogId?: number): string => {
    // If blogId is provided, use the new folder structure based on blog ID
    if (blogId) {
        // Special case for subsection images (index > 1)
        if (index > 1) {
            // Calculate subsection number (subtract 2 to get 0-based subsection index, then add 1 for 1-based numbering)
            const subsectionNumber = index - 1;
            return `/assets/img/blog/bg_${blogId}/sb-${subsectionNumber}.jpg`;
        }
        // Main images still use the original format
        return `/assets/img/blog/bg_${blogId}/${blogId}-${index + 1}.jpg`;
    }
    
    // Otherwise use the original logic
    if (Array.isArray(imgData) && imgData.length > index) {
        return `/assets/img/blog/${imgData[index]}`;
    } else if (typeof imgData === 'string') {
        return `/assets/img/blog/${imgData}`;
    } else {
        return `/assets/img/blog/${fallbackImage}`;
    }
};


// --- Refactored Content Rendering Function ---
const renderBlogContent = (post: BlogPost) => {
    let htmlString = '';
    const content = post.content || '';
    const blogImages = Array.isArray(post.img) ? post.img : (post.img ? [post.img] : []);
    const categoryQuote = getCategoryQuote(post.category);
    let quoteInserted = false;

    // 1. Format Main Content Paragraphs and Insert Images
    const paragraphs = content.split('. ');
    let currentParagraph = '';
    let paragraphCount = 0;
    let image2Inserted = false;

    paragraphs.forEach((sentence, index) => {
        // Corrected logic: Add period+space only if needed and not already present
        const needsPeriod = index < paragraphs.length - 1 && !sentence.endsWith('.');
        const formattedSentence = needsPeriod ? sentence + '. ' : (sentence.endsWith('.') ? sentence + ' ' : sentence); // Add space if period exists

        currentParagraph += formattedSentence;

        // Create a new paragraph every 3 sentences
        if ((index + 1) % 3 === 0 || index === paragraphs.length - 1) {
            if (currentParagraph.trim()) {
                htmlString += `<p class="mb-25">${currentParagraph.trim()}</p>`;
                paragraphCount++;
                currentParagraph = '';
            }

            // Insert the second image after the first paragraph
            if (paragraphCount === 1 && !image2Inserted) {
                htmlString += `
                    <div class="blog-mid-image mb-40 mt-30 text-center">
                        <img src="${getBlogImageUrl(post.img, 1, 'default-thumbnail.jpg', post.id)}" alt="Blog Image" class="img-fluid rounded" />
                    </div>
                `;
                image2Inserted = true; // Ensure it's inserted only once
            }
        }
    });

    // Add any remaining part of the last paragraph if not added
    if (currentParagraph.trim() && paragraphCount === 0) {
         htmlString += `<p class="mb-25">${currentParagraph.trim()}</p>`;
    }

    // 2. Insert Subsections
    if (post.subsections && post.subsections.length > 0) {
        post.subsections.forEach((section, index) => {
            const sectionId = createSectionId(section.title);
            let formattedSectionContent = '';
            
            // Add the regular content paragraph first
            if (section.content) {
                formattedSectionContent += `<p class="mb-25">${section.content}</p>`;
            }
            
            // Add subsection image - NEW CODE
            const bgNumber = index + 1; // Calculate the background folder number (bg_1, bg_2, etc.)
            formattedSectionContent += `
                <div class="blog-subsection-image mb-30 mt-25 text-center">
                    <img src="${getBlogImageUrl(post.img, bgNumber + 2, 'default-thumbnail.jpg', post.id)}" alt="${section.title}" class="img-fluid rounded" />
                </div>
            `;
            
            // Add bullet points if they exist
            if (section.points && section.points.length > 0) {
                formattedSectionContent += `
                    <div class="blog-section-points">
                        <ul class="list-wrap">
                            ${section.points.map(point => 
                                `<li class="mb-10"><i class="fas fa-check-circle me-2"></i>${point}</li>`
                            ).join('\n')}
                        </ul>
                    </div>
                `;
            }

            // Determine if this is the last subsection to apply appropriate margin
            const isLastSection = post.subsections ? index === post.subsections.length - 1 : false;
            const sectionMarginClass = isLastSection ? "blog-section mb-40" : "blog-section mb-60";
            
            // Number the subsection title (e.g., "1. Title", "2. Title", etc.)
            const numberedTitle = `${index + 1}. ${section.title}`;

            htmlString += `
                <div id="${sectionId}" class="${sectionMarginClass}">
                    <h3 class="blog-section-title">${numberedTitle}</h3>
                    ${formattedSectionContent}
                </div>
            `;
            
            // Insert the quote after the 3rd subsection if it exists
            if (index === 2 && categoryQuote && !quoteInserted) {
                htmlString += `
                    <blockquote class="mb-40 mt-30">
                        <p>${categoryQuote}</p>
                    </blockquote>
                `;
                quoteInserted = true;
            }
        });
    }

    // 3. Insert Third Image (if exists) before Key Takeaways
    htmlString += `
        <div class="blog-pre-takeaway-image mb-40 mt-30 text-center">
            <img src="${getBlogImageUrl(post.img, 2, 'default-thumbnail.jpg', post.id)}" alt="Blog Image" class="img-fluid rounded" />
        </div>
    `;

    // 4. Add Key Takeaways Section (if they exist)
    if (post.keyTakeaways && post.keyTakeaways.length > 0) {
        const takeawaysHtml = post.keyTakeaways.map(
            takeaway => `<li class="mb-10"><i class="fas fa-check-circle me-2"></i>${takeaway}</li>`
        ).join('\n');

        htmlString += `
            <div id="key-takeaways" class="key-takeaways-section">
                <h3>Key Takeaways</h3>
                <ul class="list-wrap mb-0">
                    ${takeawaysHtml}
                </ul>
            </div>
        `;
    }

    // If the quote wasn't inserted (because there weren't enough subsections), add it before the key takeaways
    if (categoryQuote && !quoteInserted) {
        htmlString += `
            <blockquote class="mb-40 mt-30">
                <p>${categoryQuote}</p>
            </blockquote>
        `;
    }

    return { __html: htmlString };
};
// --- End of Refactored Function ---

// Calculate approximate read time based on content length
const calculateReadTime = (post: BlogPost): number => {
    // Average reading speed: 200-250 words per minute
    const WORDS_PER_MINUTE = 225;
    
    // Count words in main content
    const contentWords = (post.content || '').split(/\s+/).length;
    
    // Count words in subsections
    const subsectionsWords = post.subsections?.reduce((sum, section) => {
        // Add words from content and points
        const sectionContentWords = section.content ? section.content.split(/\s+/).length : 0;
        const pointsWords = section.points?.reduce((total, point) => 
            total + point.split(/\s+/).length, 0) || 0;
        
        return sum + sectionContentWords + pointsWords;
    }, 0) || 0;
    
    // Count words in key takeaways
    const takeawaysWords = post.keyTakeaways?.reduce((sum, takeaway) => 
        sum + takeaway.split(/\s+/).length, 0) || 0;
    
    // Count words in FAQs
    const faqsWords = post.faqs?.reduce((sum, faq) => 
        sum + faq.question.split(/\s+/).length + faq.answer.split(/\s+/).length, 0) || 0;
    
    // Calculate total words
    const totalWords = contentWords + subsectionsWords + takeawaysWords + faqsWords;
    
    // Calculate read time in minutes and round up
    const readTimeMinutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
    
    // Return at least 1 minute
    return Math.max(1, readTimeMinutes);
};


// Get category-specific quote
const getCategoryQuote = (category: string): string => {
    const quotes = {
        "Design": [
            "Great design is not just about aesthetics—it's about creating experiences that solve real problems for users while delighting them along the way.",
            "Design is intelligence made visible. Every pixel should have a purpose and every interaction should feel effortless."
        ],
        "Development": [
            "Behind every seamless user experience is thoughtful code that balances performance, scalability, and maintainability.",
            "Good code is like a good joke: it needs no explanation. Build for clarity, not just cleverness."
        ],
        "Marketing": [
            "The best marketing doesn't feel like marketing—it delivers genuine value while subtly guiding users toward meaningful actions.",
            "Marketing is no longer about the stuff you make, but about the stories you tell and the connections you create."
        ],
        "Branding": [
            "Your brand is the single most important investment you can make in your business. It's the promise you make to customers about who you are and how you deliver value.",
            "A brand is not just a logo or a name—it's the sum of every experience people have with your business."
        ],
        "AI": [
            "AI is not just a tool; it's a partner that can amplify human creativity and decision-making, transforming industries and lives.",
            "Artificial intelligence is about augmenting human potential, not replacing it. The future is collaborative."
        ],
        // Add more categories as needed
    };
    const catQuotes = quotes[category as keyof typeof quotes];
    if (!catQuotes) return "";
    // Return a random quote from the array
    return catQuotes[Math.floor(Math.random() * catQuotes.length)];
};


export default function BlogDetails({ params }: { params: { id: string } }) {
    const id = params.id;
    const currentIndex = data.findIndex((post: BlogPost) => String(post.id) === String(id));

    // Handle case if blog post is not found
    if (currentIndex === -1) {
        return (
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog Details">
                <section className="blog__details-area pt-120 pb-120">
                    <div className="container">
                        <p>Blog post not found</p>
                    </div>
                </section>
            </Layout>
        )
    }
    
    const blogPost = data[currentIndex] as BlogPost;
    const prevPost = currentIndex > 0 ? data[currentIndex - 1] : null;
    const nextPost = currentIndex < data.length - 1 ? data[currentIndex + 1] : null;
    
    // Generate JSON-LD structured data for this blog post
    const blogJsonLd = generateJsonLd('blog', blogPost);
    
    // Set latest posts (excluding current post)
    // First sort by date (newest first)
    const sortedPosts = [...data].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // Filter out the current post and get the latest 3 posts
    const latestPosts = sortedPosts
        .filter(post => post.id !== data[currentIndex].id)
        .slice(0, 3);


    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog Details">
                {/* Add JSON-LD structured data */}
                <Script
                    id="blog-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
                />

                <section className="blog__details-area pt-80 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog__details-wrap mb-50">
                                    <div className="blog__details-content">
                                        <h2 className="page-title">{blogPost.title}</h2>

                                        <div className="blog__post-meta mb-30">
                                            <ul className="list-wrap">
                                                <li><i className="far fa-user" /><Link href="/blog">{blogPost.author}</Link></li>
                                                <li><i className="far fa-clock" />{formatDate(blogPost.date)}</li>
                                                <li><i className="far fa-file-alt" />{calculateReadTime(blogPost)} min read</li>
                                            </ul>
                                        </div>

                                        <div className="blog__details-thumb mb-30">
                                            {/* Display the first image */}
                                            <img src={getBlogImageUrl(blogPost.img, 0, 'default-thumbnail.jpg', blogPost.id)} alt={blogPost.title} />
                                        </div>

                                        {blogPost.excerpt && (
                                            <p className="mb-30 lead"><strong>{blogPost.excerpt}</strong></p>
                                        )}

                                        {/* Table of Contents */}
                                        {(blogPost.subsections && blogPost.subsections.length > 0 || blogPost.keyTakeaways && blogPost.keyTakeaways.length > 0 || blogPost.faqs && blogPost.faqs.length > 0) && ( // Show TOC if any section exists
                                            <div className="blog-table-of-contents mb-40">
                                                <div className="toc-container">
                                                    <h3 className="mb-20">Table of Contents</h3>
                                                    <ul className="toc-list">
                                                        {blogPost.subsections?.map((section, index) => (
                                                            <li key={`toc-sub-${index}`}>
                                                                <a
                                                                    href={`#${createSectionId(section.title)}`}
                                                                    className="toc-link"
                                                                >
                                                                    {section.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                        {blogPost.keyTakeaways && blogPost.keyTakeaways.length > 0 && (
                                                            <li>
                                                                <a href="#key-takeaways" className="toc-link">
                                                                    Key Takeaways
                                                                </a>
                                                            </li>
                                                        )}
                                                        {blogPost.faqs && blogPost.faqs.length > 0 && (
                                                            <li>
                                                                <a href="#faq-section" className="toc-link">
                                                                    FAQ
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        {/* Use dangerouslySetInnerHTML with the NEW render function */}
                                        <div dangerouslySetInnerHTML={renderBlogContent(blogPost)} />

                                        {/* FAQ Section - Rendered as a component */}
                                        {blogPost.faqs && blogPost.faqs.length > 0 && (
                                            // Add the ID here for TOC navigation
                                            <div id="faq-section" className="blog-faq-section mt-60">
                                                <h3 className="mb-20">Frequently Asked Questions</h3> {/* Changed title slightly */}
                                                <BlogFAQAccordion faqs={blogPost.faqs} />
                                            </div>
                                        )}

                                        <div className="blog__details-content-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6">
                                                    <div className="post-tags">
                                                        <h5 className="title">TAGS:</h5>
                                                        <ul className="list-wrap">
                                                            {/* Main Category */}
                                                            <li><Link href={`/blog?category=${blogPost.category}`}>{blogPost.category}</Link></li>
                                                            {/* Dynamic Tags from JSON */}
                                                            {blogPost.tags?.map((tag, index) => (
                                                                <li key={`tag-${index}`}><Link href={`/blog?tag=${encodeURIComponent(tag)}`}>{tag}</Link></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="blog-post-share">
                                                        <h5 className="title">SHARE:</h5>
                                                        <div className="footer__social2">
                                                            <ul className="list-wrap">
                                                                <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
                                                                <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                                                <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
                                                                <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner__page-nav pt-30">
                                            {prevPost && (
                                                <Link href={`/blog/${prevPost.id}`} className="nav-btn text-md-end">
                                                    <div className="text-wrap mb-0">
                                                        <i className="fa fa-arrow-left me-2" />
                                                        <span>
                                                            VIEW PREVIOUS
                                                        </span>
                                                    </div>
                                                </Link>
                                            )}
                                            {nextPost && (
                                                <Link href={`/blog/${nextPost.id}`} className="nav-btn">
                                                    <div className="text-wrap mb-0">
                                                        <span>
                                                            VIEW NEXT
                                                        </span>
                                                        <i className="fa fa-arrow-right ms-2" />
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="blog-sidebar">
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <div className="sidebar-cat-list">
                                            <ul className="list-wrap">
                                                {Array.from(new Set(data.map(post => post.category))).map((category, index) => (
                                                    <li key={index}>
                                                        <Link href={`/blog?category=${category}`}>
                                                            {category} <span>({data.filter(post => post.category === category).length})</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="blog-widget widget-rc-post">
                                        <h4 className="widget-title">Latest Posts</h4>
                                        <div className="rc-post-wrap">
                                            {latestPosts.map((post, index) => (
                                                <div className="rc-post-item" key={`latest-${index}`}>
                                                    <div className="thumb">
                                                        <Link href={`/blog/${post.id}`}>
                                                            <img 
                                                                src={`/assets/img/blog/bg_${post.id}/${post.id}-1.jpg`} 
                                                                alt={post.title} 
                                                                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">
                                                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                                        </h4>
                                                        <span className="date">{formatDate(post.date)}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    <div className="blog-widget">
                                        <h4 className="widget-title">Tags</h4>
                                        <div className="sidebar-tag-list">
                                            <ul className="list-wrap">
                                                {/* Dynamic Tags from all posts */}
                                                {(() => {
                                                    const allTags = new Set<string>();
                                                    data.forEach(post => {
                                                        // Add category as a tag
                                                        allTags.add(post.category);
                                                        // Add actual tags if they exist
                                                        post.tags?.forEach(tag => allTags.add(tag));
                                                    });

                                                    return Array.from(allTags).map((tag, index) => (
                                                        <li key={`sidebar-tag-${index}`}><Link href={`/blog?tag=${encodeURIComponent(tag)}`}>{tag}</Link></li>
                                                    ));
                                                })()}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* References Section */}
                                    {blogPost.references && blogPost.references.length > 0 && (
                                        <div className="blog-widget">
                                            <h4 className="widget-title">References</h4>
                                            <div className="sidebar-references-list">
                                                <ol className="list-wrap references-list">
                                                    {blogPost.references.map((reference) => (
                                                        <li key={`ref-${reference.id}`} className="mb-2">
                                                            <a href={reference.url} 
                                                               target="_blank" 
                                                               rel="noopener noreferrer"
                                                               className="reference-link">
                                                                [{reference.id}] {reference.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        </div>
                                    )}
                                </aside>
                            </div>
                        </div>

                        {/* Related Articles Section - Moved outside the column layout to span full width */}
                        <div className="related-articles-section mt-0 mb-20">
                            <h3 className="widget-title mb-40">Related Articles</h3>
                            <div className="row gy-40">
                                {(() => { // Use IIFE to calculate related posts once
                                    const relatedPosts = data.filter(post => {
                                        if (post.id === blogPost.id) return false;
                                        const sameCategory = post.category === blogPost.category;
                                        const sharedTags = blogPost.tags && post.tags &&
                                            blogPost.tags.some((tag: string) => post.tags?.includes(tag));
                                        return sameCategory || sharedTags;
                                    });

                                    if (relatedPosts.length === 0) {
                                        return (
                                            <div className="col-12 text-center py-4">
                                                <p>No related articles found.</p>
                                            </div>
                                        );
                                    }

                                    // Show all related posts instead of limiting to 3
                                    return relatedPosts.map((relatedPost, index) => (
                                        <div className="col-md-4 col-sm-6" key={`related-${index}`}>
                                            <div className="blog__post-item-three">
                                                <div className="blog__post-thumb">
                                                    <Link href={`/blog/${relatedPost.id}`}>
                                                        <img 
                                                            src={getBlogImageUrl(relatedPost.img, 0, 'default-thumbnail.jpg', relatedPost.id)} 
                                                            alt={relatedPost.title} 
                                                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="blog__post-content">
                                                    <span className="blog__post-date">{formatDate(relatedPost.date)}</span>
                                                    <h4 className="title">
                                                        <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                                                    </h4>
                                                    <div className="related-post-meta">
                                                        <span className="category">{relatedPost.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
