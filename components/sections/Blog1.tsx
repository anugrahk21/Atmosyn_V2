import Link from "next/link"
import blogData from "@/util/blog.json"

// Helper function to get blog image URL with consistent structure
const getBlogImageUrl = (blogId: number, imageType: 'main' | 'subsection', index: number = 0): string => {
    // Handle main article images
    if (imageType === 'main') {
        // Main images follow the pattern bg_[id]/[id]-[1,2,3].png
        return `/assets/img/blog/bg_${blogId}/${blogId}-${index + 1}.png`;
    } 
    // Handle subsection images
    else if (imageType === 'subsection') {
        // Subsection images follow the pattern bg_[id]/sb-[number].png
        return `/assets/img/blog/bg_${blogId}/sb-${index}.png`;
    }
    
    // Fallback image if something goes wrong
    return `/assets/img/blog/default-thumbnail.jpg`;
};
export default function Blog1() {
    // Get the 3 most recent blog posts
    const latestPosts = [...blogData].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }).slice(0, 3)

    return (
        <>
            <section className="blog-area-1 pt-110 pb-120">
                <div className="container">
                    <div className="section__title mb-50">
                        <h2 className="title wow img-custom-anim-left">INSIGHTS</h2>
                    </div>
                    <div className="row gy-30 align-items-end">
                        {latestPosts.map((post, index) => (
                            <div className="col-12" key={index}>
                                <div className="blog__post-item">
                                    <div className="blog__post-thumb wow img-custom-anim-right" style={{ overflow: 'hidden', height: '300px' }}>
                                        <Link href={`/blog/${post.id}`} style={{ display: 'block', height: '100%' }}>
                                            <img 
                                                src={getBlogImageUrl(post.id, 'main', 0)}
                                                alt={post.title}
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover',
                                                    objectPosition: 'center top'
                                                }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog__post-content wow img-custom-anim-left">
                                        <span className="blog__post-date">{post.date}</span>
                                        <h3 className="title"><Link href={`/blog/${post.id}`}>{post.title.toUpperCase()}</Link></h3>
                                        <div className="blog__post-bottom">
                                            <div className="blog__post-meta">
                                                <ul className="list-wrap">
                                                    <li><Link href={`/blog?category=${post.category.toLowerCase()}`}>{post.category.toUpperCase()}</Link></li>
                                                    {post.category === "Design" && <li><Link href="/blog?category=ux-ui">UX/UI</Link></li>}
                                                    {post.category === "Marketing" && <li><Link href="/blog?category=strategy">STRATEGY</Link></li>}
                                                    {post.category === "Branding" && <li><Link href="/blog?category=identity">IDENTITY</Link></li>}
                                                    {post.category === "Development" && <li><Link href="/blog?category=tech">TECH</Link></li>}
                                                    {post.category === "Technology" && <li><Link href="/blog?category=ai">AI</Link></li>}
                                                    {post.category === "Analytics" && <li><Link href="/blog?category=data">DATA</Link></li>}
                                                </ul>
                                            </div>
                                            <Link href={`/blog/${post.id}`} className="link-btn">
                                                Read More
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="tg-button-wrap justify-content-center mt-70">
                        <Link href="/blog" className="btn border-dark wow img-custom-anim-top">
                            More Insights
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
