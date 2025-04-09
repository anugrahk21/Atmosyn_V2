'use client'
import Layout from '@/components/layout/Layout'
import data from "@/util/blog.json"
import Link from 'next/link'

export default function Blog() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog">
                <section className="blog-area-4 pt-110 pb-120">
                    <div className="container">
                        <div className="row gy-80 justify-content-center">
                            {data.map((post, index) => (
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