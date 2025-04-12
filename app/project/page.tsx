import Layout from "@/components/layout/Layout"
import ProjectFilterOne from "@/components/project/ProjectFilterOne"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import Link from "next/link"
import Marquee from "react-fast-marquee"

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

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Portfolio">
                <div>
                    <ProjectFilterOne />
                    {/*======== / Project Section ========*/}
                    {/*==============================
    Marquee Area
    ==============================*/}
                    <div className="container-fluid px-0 overflow-hidden pb-30 pt-30 theme-bg">
                        <div className="slider__marquee clearfix marquee-wrap style3">
                            <Marquee className="marquee_mode marquee__group">
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-1.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-2.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-3.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-4.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-5.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-6.svg" alt="img" /></Link></div>
                            </Marquee>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}