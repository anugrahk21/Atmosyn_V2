import Link from "next/link"

interface BlogCardProps {
    item: {
        id: number;
        title: string;
        img: string | string[];
        category?: string;
        author?: string;
        date?: string;
        excerpt?: string;
    }
}

export default function BlogCard1({ item }: BlogCardProps) {
    return (
        <div className="blog__post-item-five shine-animate-item">
            <div className="blog__post-thumb" style={{ height: "240px", overflow: "hidden" }}>
                <Link className="shine-animate" href={`/blog/${item.id}`}>
                    <img 
                        src={`/assets/img/blog/bg_${item.id}/${item.id}-1.jpg`}
                        alt={item.title} 
                        className="img-fluid" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Link>
                {item.category && (
                    <span className="post-category">{item.category}</span>
                )}
            </div>
            <div className="blog__post-content">
                <h3 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                <Link href={`/blog/${item.id}`} className="link-btn">
                    Read More
                    <i className="icon-arrow-top-left" />
                </Link>
            </div>
        </div>
    )
}
