import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Pricing',
  pageName: 'Pricing',
  shortInfo: 'Service Plans & Packages',
  description: 'Explore Atmosyn\'s transparent pricing plans for our digital services. Find the perfect package to fit your business needs and budget.',
  specificTopic: 'service pricing and packages',
  keywords: ['digital agency pricing', 'web development cost', 'marketing service packages', 'affordable digital services', 'design service pricing'],
});

export default function Pricing() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Pricing">
                <div>
                    <section className="pricing-area-1 pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-50 wow img-custom-anim-top text-center">
                                <h2 className="title">Pick a plan</h2>
                            </div>
                            <div className="row gy-30 justify-content-center">
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-left">
                                    <div className="pricing-card style2">
                                        <h4 className="pricing-card_title">Basic</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">₹</span>14,999
                                            </h4>
                                        </div>
                                        <p>What's included:</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Responsive Website Design</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> 5 Pages Website</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Free Domain & Hosting</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Basic SEO Setup</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Email Support</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="pricing-card active style2">
                                        <h4 className="pricing-card_title">Business</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">₹</span>29,999
                                            </h4>
                                        </div>
                                        <p>What's included:</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Custom Website Design</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Up to 10 Pages</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Premium Hosting & Domain</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Advanced SEO Setup</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Logo & Brand Design</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Social Media Integration</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Priority Support</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-right">
                                    <div className="pricing-card style2">
                                        <h4 className="pricing-card_title">Enterprise</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">₹</span>59,999
                                            </h4>
                                        </div>
                                        <p>What's included:</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Premium Website & App</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Unlimited Pages</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Enterprise Hosting</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Complete Brand Identity</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Comprehensive SEO & Marketing</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> E-commerce Integration</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> AI Agents (Coming Soon)</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> 24/7 Dedicated Support</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5 text-center">
                            <p className="pricing-note">* Pricing may vary according to the specific needs of each customer.</p>
                        </div>
                        <div className="text-center mt-60 wow img-custom-anim-top">
                            <p className="mb-20">Need a custom solution? For a personalized plan tailored to your specific requirements, please <Link href="/contact" className="text-theme fw-bold">contact us</Link> for a custom quote.</p>
                            <div className="tg-button-wrap justify-content-center">
                                <Link href="/contact" className="btn border-dark">
                                    GET CUSTOM QUOTE
                                </Link>
                            </div>
                        </div>
                    </section>
                    {/*======== / Pricing Section ========*/}
                    {/*==============================
    FAQ Area 2
    ==============================*/}
                    <section className="faq-area-2 pb-120">
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