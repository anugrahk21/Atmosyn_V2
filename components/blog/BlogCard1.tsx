import Link from "next/link"

interface BlogCardProps {
    item: {
        id: number;
        title: string;
        img: string;
        category?: string;
        author?: string;
        date?: string;
        excerpt?: string;
    }
}

export default function BlogCard1({ item }: BlogCardProps) {
    return (
        <div className="blog__post-item-five shine-animate-item">
            <div className="blog__post-thumb">
                <Link className="shine-animate" href={`/blog-details?id=${item.id}`}>
                    <img src={`/assets/img/blog/${item.img}`} alt={item.title} className="img-fluid" />
                </Link>
                {item.category && (
                    <span className="post-category">{item.category}</span>
                )}
            </div>
            <div className="blog__post-content">
                <h3 className="title"><Link href={`/blog-details?id=${item.id}`}>{item.title}</Link></h3>
                <Link href={`/blog-details?id=${item.id}`} className="link-btn">
                    Read More
                    <i className="icon-arrow-top-left" />
                </Link>
            </div>
        </div>
    )
}
