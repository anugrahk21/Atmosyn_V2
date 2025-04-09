import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import Marquee from 'react-fast-marquee'

const ProjectFilterOne = dynamic(() => import('@/components/project/ProjectFilterOne'), {
    ssr: false,
})
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