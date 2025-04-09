import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from 'react-fast-marquee'
export default function ProjectDetails() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Portfolio Details">
                <div>
                    <section className="project-details-page-area pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="section__title mb-30">
                                        <h2 className="title">INNOVATIVE PACKAGE DESIGNS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details-info-wrap mb-60">
                                <div className="single-project-info">
                                    <h6 className="title">Description</h6>
                                    <p className="text">Ola is a modern light  dark mode blog template made to delight content creators and readers. It has a diversity of layout options.</p>
                                </div>
                                <div className="single-project-info">
                                    <h6 className="title">Services</h6>
                                    <p className="text">Branding</p>
                                    <p className="text">Development</p>
                                </div>
                                <div className="single-project-info">
                                    <h6 className="title">Client</h6>
                                    <p className="text">Parfume</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid p-0">
                            <div className="project-thumb mb-60">
                                <img className="w-100" src="/assets/img/project/project-details-1-1.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="pb-115">
                            <div className="container">
                                <h3 className="page-title mb-30">Project details</h3>
                                <p className="mb-40">In today's dynamic marketplace, where consumers are inundated with choices, the role of package design cannot be overstated. It serves as the first point of contact between a product and its potential buyers, wielding significant influence over purchasing decisions. Innovative package design goes beyond mere functionality; it encapsulates a brand's identity, values, and aspirations. By strategically leveraging elements such as sustainability, creativity, and user experience, brands can create packaging that not only stands out on the shelf but also resonates with consumers on a deeper level.</p>
                                <div className="row gy-40">
                                    <div className="col-lg-6">
                                        <h3 className="page-title mb-30">Target Audience</h3>
                                        <p className="mb-0">Identify the demographic you're designing for. Consider factors such as age, gender, location, lifestyle, and preferences. Tailoring your design to suit the needs and desires of your target audience will increase its effectiveness.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="page-title mb-30">Creativity and Innovation</h3>
                                        <p className="mb-0">Encourage creativity and innovation in your design process. Think outside the box and consider unconventional materials, shapes, and functionalities that can set your packaging apart from competitors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid p-0">
                            <div className="row gy-30">
                                <div className="col-lg-4">
                                    <div className="project-thumb">
                                        <img className="w-100" src="/assets/img/project/project-details-1-2.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-thumb">
                                        <img className="w-100" src="/assets/img/project/project-details-1-3.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-thumb">
                                        <img className="w-100" src="/assets/img/project/project-details-1-4.jpg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-60">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-lg-7">
                                        <h3 className="page-title mb-30">The Solution</h3>
                                        <p className="mb-0">Innovative package design embodies a holistic approach that transcends mere aesthetics. It seamlessly combines form and function, balancing visual appeal with practicality to deliver a memorable and seamless consumer experience. Moreover, packaging serves as a powerful medium for storytelling, enabling brands to communicate their ethos and connect with consumers on an emotional level.</p>
                                    </div>
                                </div>
                                <div className="inner__page-nav pt-115 mt-n1 mb-n1">
                                    <Link href="/#" className="nav-btn text-md-end">
                                        <div className="text-wrap">
                                            <i className="fa fa-arrow-left me-4" />
                                            <span>
                                                View Pre project
                                            </span>
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/img/project/project-details-1-5.jpg" alt="img" />
                                        </div>
                                    </Link>
                                    <Link href="/#" className="nav-btn">
                                        <div className="text-wrap">
                                            <span>
                                                View next project
                                            </span>
                                            <i className="fa fa-arrow-right ms-4" />
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/img/project/project-details-1-6.jpg" alt="img" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
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