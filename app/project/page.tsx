import Layout from "@/components/layout/Layout"
import ProjectFilterOne from "@/components/project/ProjectFilterOne"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import PartnerMarquee from "@/components/sections/PartnerMarquee"

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Projects',
  pageName: 'Our Projects',
  shortInfo: 'Case Studies & Portfolio',
  description: 'Explore Atmosyn\'s portfolio of successful digital projects across web development, UX/UI design, branding, and marketing. Atmosyn merges innovative design with strategic insights to create engaging digital experiences.',
  specificTopic: 'project case studies and portfolio work',
  keywords: ['digital portfolio', 'project case studies', 'web development projects', 'design portfolio', 'branding projects', 'digital agency work'],
});

export default function Project() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Projects">
                <div>
                    <ProjectFilterOne />
                    {/*======== / Project Section ========*/}
                    {/*==============================
    Marquee Area
    ==============================*/}
                    <PartnerMarquee />
                </div>

            </Layout>
        </>
    )
}