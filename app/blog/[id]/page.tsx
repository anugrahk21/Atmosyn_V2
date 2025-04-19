import Layout from "@/components/layout/Layout"
import Link from "next/link"
import data from "@/util/blog.json"
import { generateDynamicMetadata, generateJsonLd } from "@/util/metadata"
import type { Metadata } from 'next'
import Script from 'next/script'
import BlogFAQAccordion from "@/components/elements/BlogFAQAccordion"

// This tells Next.js to pre-render all possible blog pages at build time
export async function generateStaticParams() {
  return data.map((post) => ({
    id: String(post.id),
  }))
}

// This makes the page static instead of dynamic
export const dynamicParams = false

interface BlogPost {
    id: number
    title: string
    img: string[] // Changed from string to string array to support multiple images
    category: string
    author: string
    date: string
    excerpt?: string
    content?: string
    keyTakeaways?: string[]
    seoKeywords?: string[]
    faqs?: {
        question: string
        answer: string
    }[]
}

// Generate dynamic metadata for this blog post
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const post = data.find((post) => String(post.id) === params.id)
    
    // Use our utility to generate metadata for this specific blog post
    return generateDynamicMetadata(post, 'blog')
}

// Format content into HTML with proper structure
const formatContent = (content: string, blogImages?: string[]) => {
    if (!content) return { __html: '' };
    
    // Split content into paragraphs
    const paragraphs = content.split('. ');
    
    // Create structured HTML
    let formattedHtml = '';
    let currentParagraph = '';
    const midPoint = Math.floor(paragraphs.length / 2); // Find the middle of content for image placement
      // Track paragraph count
    let paragraphCount = 0;
    
    paragraphs.forEach((sentence, index) => {
        // Add period back except for the last sentence if it doesn't end with period
        const formattedSentence = index < paragraphs.length - 1 || sentence.endsWith('.') 
            ? sentence + '. ' 
            : sentence;
            
        currentParagraph += formattedSentence;
        
        // Create a new paragraph every 2-3 sentences
        if ((index + 1) % 3 === 0 && index < paragraphs.length - 1) {
            formattedHtml += `<p class="mb-25">${currentParagraph.trim()}</p>`;
            paragraphCount++;
            
            // Insert the second image after exactly the 1st paragraph
            if (blogImages && blogImages.length >= 2 && paragraphCount === 1 && !formattedHtml.includes('blog-mid-image')) {
                formattedHtml += `
                    <div class="blog-mid-image mb-40 mt-30 text-center">
                        <img src="/assets/img/blog/${blogImages[1]}" alt="Blog Image" class="img-fluid rounded" />
                    </div>
                `;
            }
            
            currentParagraph = '';
        }
    });
    
    // Add the last paragraph if it's not empty
    if (currentParagraph.trim()) {
        formattedHtml += `<p class="mb-25">${currentParagraph.trim()}</p>`;
    }
    
    // Add third image before key takeaways
    if (blogImages && blogImages.length >= 3) {
        formattedHtml += `
            <div class="blog-pre-takeaway-image mb-40 mt-30 text-center">
                <img src="/assets/img/blog/${blogImages[2]}" alt="Blog Image" class="img-fluid rounded" />
            </div>
        `;
    }
      // Add Key Takeaways section with dynamically added content from blog post
    formattedHtml += `
        <h3 class="mb-20 mt-40">Key Takeaways</h3>
        <ul class="list-wrap mb-35">
            ${blogImages && Array.isArray(blogImages) && blogImages.length > 0 ? 
                `<li class="mb-10"><i class="fas fa-check-circle me-2"></i>Stay ahead of competitors with cutting-edge strategies</li>
                <li class="mb-10"><i class="fas fa-check-circle me-2"></i>Improve user engagement through better digital experiences</li>
                <li class="mb-10"><i class="fas fa-check-circle me-2"></i>Increase conversion rates with optimized user journeys</li>
                <li class="mb-10"><i class="fas fa-check-circle me-2"></i>Build brand loyalty through consistent, quality interactions</li>` 
                : ''}
        </ul>`;
    
    return { __html: formattedHtml };
};

// Format date to more readable format
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
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

    // Create a modified version of formatContent that uses the actual key takeaways
    const formatContentWithTakeaways = (content: string, post: BlogPost) => {
        // Start with the base formatted content
        const baseFormatted = formatContent(content, Array.isArray(post.img) ? post.img : [post.img as string]);
        
        // Get the HTML string from the base format
        let htmlString = baseFormatted.__html;
        
        // Replace the placeholder key takeaways with the actual ones if available
        if (post.keyTakeaways && post.keyTakeaways.length > 0) {
            const takeawaysHtml = post.keyTakeaways.map(
                takeaway => `<li class="mb-10"><i class="fas fa-check-circle me-2"></i>${takeaway}</li>`
            ).join('\n');
            
            // Use a regex to find and replace the key takeaways section
            const keyTakeawaysRegex = /<h3 class="mb-20 mt-40">Key Takeaways<\/h3>\s*<ul class="list-wrap mb-35">[\s\S]*?<\/ul>/;
            htmlString = htmlString.replace(keyTakeawaysRegex, 
                `<h3 class="mb-20 mt-40">Key Takeaways</h3>
                <ul class="list-wrap mb-35">
                    ${takeawaysHtml}
                </ul>`
            );
        }
        
        return { __html: htmlString };
    };

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog Details">
                {/* Add JSON-LD structured data */}
                <Script
                    id="blog-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
                />
                
                <section className="blog__details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog__details-wrap mb-100">                                    <div className="blog__details-thumb">
                                        {/* Display the first image at the top */}
                                        <img src={`/assets/img/blog/${Array.isArray(blogPost.img) ? blogPost.img[0] : blogPost.img}`} alt={blogPost.title} />
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="far fa-user" /><Link href="/blog">{blogPost.author}</Link></li>
                                                <li><i className="far fa-comments" /><Link href="#">COMMENTS (0)</Link></li>
                                                <li><i className="far fa-clock" />{blogPost.date}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog__details-content">
                                        <h2 className="page-title mb-30">{blogPost.title}</h2>
                                        
                                        {blogPost.excerpt && (
                                            <p className="mb-30 lead"><strong>{blogPost.excerpt}</strong></p>
                                        )}
                                          {/* Use dangerouslySetInnerHTML to render the formatted content with images */}
                                        <div dangerouslySetInnerHTML={formatContentWithTakeaways(blogPost.content || '', blogPost)} />                                        {/* FAQ Section */}
                                        {blogPost.faqs && blogPost.faqs.length > 0 && (
                                            <div className="blog-faq-section mt-60">
                                                <h3 className="mb-20">FAQ About</h3>
                                                <BlogFAQAccordion faqs={blogPost.faqs} />
                                            </div>
                                        )}
                                        {/* Category-specific quotes */}
                                        {blogPost.category === "Design" && (
                                            <blockquote className="mb-30 mt-30">
                                                <p>"Great design is not just about aesthetics—it's about creating experiences that solve real problems for users while delighting them along the way."</p>
                                            </blockquote>
                                        )}
                                        
                                        {blogPost.category === "Development" && (
                                            <blockquote className="mb-30 mt-30">
                                                <p>"Behind every seamless user experience is thoughtful code that balances performance, scalability, and maintainability."</p>
                                            </blockquote>
                                        )}
                                        
                                        {blogPost.category === "Marketing" && (
                                            <blockquote className="mb-30 mt-30">
                                                <p>"The best marketing doesn't feel like marketing—it delivers genuine value while subtly guiding users toward meaningful actions."</p>
                                            </blockquote>
                                        )}
                                        
                                        {blogPost.category === "Branding" && (
                                            <blockquote className="mb-30 mt-30">
                                                <p>"Your brand is the single most important investment you can make in your business. It's the promise you make to customers about who you are and how you deliver value."</p>
                                            </blockquote>
                                        )}
                                        <div className="blog__details-content-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6">
                                                    <div className="post-tags">
                                                        <h5 className="title">TAGS:</h5>
                                                        <ul className="list-wrap">
                                                            <li><Link href="#">{blogPost.category}</Link></li>
                                                            <li><Link href="#">Digital</Link></li>
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
                                
                                {/* Comments Section */}
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title mb-20">LEAVE A COMMENT</h3>
                                    <form action="#" className="comment-form">
                                        <p className="comment-notes">Your email address will not be published.Required fields are marked*</p>
                                        <div className="row gy-35">
                                            <div className="col-lg-6 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                                <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                                <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                                <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-three square-btn mt-40">POST COMMENT</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="blog-sidebar">
                                    <div className="blog-widget">
                                        <div className="sidebar-search-form">
                                            <form action="#">
                                                <input type="text" placeholder="Search Here..." />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <div className="sidebar-cat-list">
                                            <ul className="list-wrap">
                                                {Array.from(new Set(data.map(post => post.category))).map((category, index) => (
                                                    <li key={index}>
                                                        <Link href="#">
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
                                                <div className="rc-post-item" key={index}>                                        <div className="thumb">
                                                        <Link href={`/blog/${post.id}`}>
                                                            <img src={`/assets/img/blog/${
                                                                Array.isArray(post.img) 
                                                                    ? post.img.find(img => img.includes('-main')) || post.img[0]
                                                                    : post.img
                                                            }`} alt={post.title} />
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
                                                {Array.from(new Set(data.map(post => post.category))).map((category, index) => (
                                                    <li key={index}><Link href="#">{category}</Link></li>
                                                ))}
                                                <li><Link href="#">Digital</Link></li>
                                                <li><Link href="#">Agency</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
