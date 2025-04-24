import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from "react-fast-marquee"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import Team1 from "@/components/sections/Team1"
import ContactForm from "@/components/sections/ContactForm"
import PartnerMarquee from "@/components/sections/PartnerMarquee"

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'About Us',
  pageName: 'About Us',
  shortInfo: 'Our Story & Mission',
  description: 'Learn about Atmosyn\'s journey, our passionate team, and our mission to deliver exceptional digital solutions. Atmosyn merges innovative design with strategic insights to create engaging digital experiences.',
  specificTopic: 'our company values and expertise',
  keywords: ['about Atmosyn', 'digital agency team', 'company values', 'agency mission', 'digital experts'],
});

export default function About() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="ABOUT US">
                <section className="pb-120 pt-60">
                    <div className="overflow-hidden">
                        <div className="container">
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                            <i className="icon-service-icon1" />
                                        </div>
                                        <h3 className="counter-box_title"><span className="counter-number">5</span>+ Core Services</h3>
                                        <p className="counter-box_text">From web development to branding, we offer comprehensive digital solutions tailored to elevate your business in the digital landscape.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                            <i className="icon-service-icon2" />
                                        </div>
                                        <h3 className="counter-box_title">AI-Powered Innovation</h3>
                                        <p className="counter-box_text">Leveraging cutting-edge AI technologies to deliver smarter, more efficient solutions that keep you ahead of the competition.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                            <i className="icon-service-icon3" />
                                        </div>
                                        <h3 className="counter-box_title">Client-First Approach</h3>
                                        <p className="counter-box_text">Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*======== / Counter Section ========*/}
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
Team Area
==============================*/}
                <section className="position-relative">
                    <div className="contact-area-bg-shape1 square-shape-wrap d-lg-inline-flex d-none">
                        <div className="square-shape1" />
                        <div className="square-shape2" />
                        <div className="square-shape3" />
                        <div className="square-shape4" />
                    </div>
                    <Team1 
                        title="Meet The Makers" 
                        backgroundColor="" 
                        paddingTop={110} 
                        paddingBottom={120}
                    />
                </section>
                {/*======== / Team Section ========*/}
                {/*==============================
Commitments Area
==============================*/}
                <section className="award-area-1 pt-110 pb-120 theme-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                    <h2 className="title">OUR COMMITMENTS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <ul className="award-wrap-area">
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Client Satisfaction</Link></h4>
                                            <p>Our Priority</p>
                                        </div>
                                        <span className="award-year">100%</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Project Delivery</Link></h4>
                                            <p>On-Time Guarantee</p>
                                        </div>
                                        <span className="award-year">Always</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Quality Assurance</Link></h4>
                                            <p>Rigorous Testing</p>
                                        </div>
                                        <span className="award-year">Thorough</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Continuous Support</Link></h4>
                                            <p>Post-Launch Care</p>
                                        </div>
                                        <span className="award-year">Ongoing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*======== / Commitments Section ========*/}
                {/*==============================
Contact Area
==============================*/}
                <section className="contact-area-1 pt-120 pb-120 position-relative overflow-hidden">
                    <div className="contact-thumb1 wow img-custom-anim-left">
                        <img src="/assets/img/others/contact1-1.svg" alt="img" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-end">
                            <div className="col-lg-6">
                                <ContactForm 
                                    title="GET IN TOUCH"
                                    subtitle="Got a project you want to collaborate on?\nOr just fancy a chat?"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/*======== / Contact Section ========*/}
                {/*==============================
Marquee Area
==============================*/}
                <PartnerMarquee 
                    backgroundColor="theme-bg"
                    paddingTop={30}
                    paddingBottom={30}
                />
                {/*======== / Marquee Section ========*/}


            </Layout>
        </>
    )
}