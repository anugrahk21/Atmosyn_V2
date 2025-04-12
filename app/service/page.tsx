import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import servicesData from "@/util/services.json"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Our Services',
  pageName: 'Our Services',
  shortInfo: 'Digital Solutions',
  description: 'Explore Atmosyn\'s comprehensive range of digital services including web development, UX/UI design, brand identity, and marketing strategies. Atmosyn merges innovative design with strategic insights to create engaging digital experiences.',
  specificTopic: 'professional digital services',
  keywords: ['digital services', 'web development services', 'UI/UX design services', 'branding services', 'marketing services', 'SEO services'],
});

export default function Service() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="service-area-2 pt-120 pb-120">
                        <div className="container">
                            <div className="row gx-30 gy-30">
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">01</h5>
                                        <h4 className="service-card-title"><Link href={`/service-details/${servicesData[0].slug}`}>Web Development</Link></h4>
                                        <p className="service-card-text">Crafting responsive, high-performance websites and web applications tailored to your business needs. We deliver seamless user experiences across all devices.</p>
                                        <Link href={`/service-details/${servicesData[0].slug}`} className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">02</h5>
                                        <h4 className="service-card-title"><Link href={`/service-details/${servicesData[1].slug}`}>AI Agents</Link></h4>
                                        <p className="service-card-text">AI solutions will transform how you engage with customers. Leveraging cutting-edge technology to automate interactions while maintaining a human touch.</p>
                                        <Link href={`/service-details/${servicesData[1].slug}`} className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">03</h5>
                                        <h4 className="service-card-title"><Link href={`/service-details/${servicesData[2].slug}`}>UX/UI & Graphic Design</Link></h4>
                                        <p className="service-card-text">Creating intuitive, visually striking interfaces that delight users. We combine aesthetic appeal with functional design to enhance user engagement and satisfaction.</p>
                                        <Link href={`/service-details/${servicesData[2].slug}`} className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">04</h5>
                                        <h4 className="service-card-title"><Link href={`/service-details/${servicesData[3].slug}`}>Brand Identity</Link></h4>
                                        <p className="service-card-text">Establishing memorable, cohesive brand identities that resonate with your target audience. We develop comprehensive branding packages that communicate your unique value proposition.</p>
                                        <Link href={`/service-details/${servicesData[3].slug}`} className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">05</h5>
                                        <h4 className="service-card-title"><Link href={`/service-details/${servicesData[4].slug}`}>Marketing & SEO</Link></h4>
                                        <p className="service-card-text">Driving targeted traffic and improving search visibility to maximize your online presence. Our data-driven digital marketing strategies help you connect with your ideal audience and achieve measurable results.</p>
                                        <Link href={`/service-details/${servicesData[4].slug}`} className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Service Section ========*/}
                    {/*==============================
    Skill Area 01
    ==============================*/}
                    <section className="skill-area-1 pt-120 pb-120 black-bg position-relative">
                        <div className="skill-area-bg-shape1 square-shape-wrap">
                            <div className="square-shape1" />
                            <div className="square-shape3" />
                            <div className="square-shape4" />
                        </div>
                        <div className="container">
                            <div className="row gy-40 align-items-center">
                                <div className="col-xl-5">
                                    <div className="skill-thumb-box1 wow img-custom-anim-left">
                                        <img src="/assets/img/others/skill1-1.jpg" alt="img" />
                                        <div className="square-shape-wrap">
                                            <div className="square-shape1" />
                                            <div className="square-shape2" />
                                            <div className="square-shape3" />
                                            <div className="square-shape4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="skill-wrap1">
                                        <div className="section__title mb-50 wow img-custom-anim-left">
                                            <h2 className="title text-white">DEVOTED TO CREATING QUALITY DESIGN EXPERIENCES</h2>
                                            <p className="sec-text text-white">We aim to empower brands of all sizes and industries with data-driven strategies that yield tangible results. We believe in crafting campaigns that not only drive traffic but also foster engagement and conversions.</p>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">BRANDING</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '90%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">90</span>%</div>
                                            </div>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">DEVELOPMENT</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '70%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">70</span>%</div>
                                            </div>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">MARKETING</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '69%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">69</span>%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Skill Section ========*/}
                    {/*==============================
    FAQ Area 2
    ==============================*/}
                    <section className="faq-area-2 pt-120 pb-120 gray-bg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}