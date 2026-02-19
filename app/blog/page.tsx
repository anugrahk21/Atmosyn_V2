import Layout from "@/components/layout/Layout"
import blogData from "@/util/blog.json"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import BlogFilterOne from "@/components/blog/BlogFilterOne"
import OfferMarquee from "@/components/sections/OfferMarquee"

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
    title: 'Blog',
    pageName: 'Blog',
    shortInfo: 'Industry Insights & News',
    description: 'Explore the latest insights on digital trends,AI and automation, web development, design, and marketing strategies from Atmosyn\'s experts. Atmosyn merges innovative design with strategic insights to create engaging digital experiences.',
    specificTopic: 'digital marketing and design trends',
    keywords: ['digital blog', 'ai', 'web development blog', 'UI/UX design insights', 'marketing strategies', 'Atmosyn blog', 'industry trends'],
});

export default function Blog() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog">
                <OfferMarquee></OfferMarquee>
                <section className="blog-area-4 pt-60 pb-120">
                    <div className="container">
                        <BlogFilterOne initialBlogs={blogData} />
                    </div>
                </section>
            </Layout>
        </>
    )
}