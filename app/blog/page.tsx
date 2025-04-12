import Layout from "@/components/layout/Layout"
import Link from "next/link"
import BlogPost from "@/components/blog/BlogPost"
import Pagination from "@/components/blog/Pagination"
import blogData from "@/util/blog.json"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Blog',
  pageName: 'Blog',
  shortInfo: 'Industry Insights & News',
  description: 'Explore the latest insights on digital trends, web development, design, and marketing strategies from Atmosyn\'s experts. Atmosyn merges innovative design with strategic insights to create engaging digital experiences.',
  specificTopic: 'digital marketing and design trends',
  keywords: ['digital blog', 'web development blog', 'UI/UX design insights', 'marketing strategies', 'Atmosyn blog', 'industry trends'],
});

export default function Blog() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog">
                <section className="blog-area-4 pt-110 pb-120">
                    <div className="container">
                        <div className="row gy-80 justify-content-center">
                            {blogData.map((post, index) => (
                                <div className="col-xl-4 col-md-6" key={index}>
                                    <div className="blog__post-item-five shine-animate-item">
                                        <div className="blog__post-thumb">
                                            <Link className="shine-animate" href={`/blog/${post.id}`}>
                                                <img src={`/assets/img/blog/${post.img}`} alt={post.title} />
                                            </Link>
                                        </div>
                                        <div className="blog__post-content">
                                            <h3 className="title"><Link href={`/blog/${post.id}`}>{post.title}</Link></h3>
                                            <Link href={`/blog/${post.id}`} className="link-btn">
                                                Read More
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}