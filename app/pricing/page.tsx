import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import OfferMarquee from '@/components/sections/OfferMarquee'
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
  keywords: ['digital agency pricing', 'web development cost', 'marketing service packages', 'affordable digital services', 'design service pricing', 'AI solutions cost', 'automation service pricing'],
});

export default function Pricing() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Pricing">
            <OfferMarquee></OfferMarquee>
                <div>
                    <section className="pricing-area-1 pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-50 wow img-custom-anim-top text-center">
                                <h2 className="title">Pick a plan</h2>
                            </div>
                            <div className="row gy-30 justify-content-center">
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-left">
                                    <div className="pricing-card style2">
                                        <h4 className="pricing-card_title">Launch</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">₹</span>8,999*
                                            </h4>
                                        </div>
                                        <p>A lean kick-off for your online presence (4 core essentials)</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Custom Responsive Website (up to 5 pages)</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Basic Hosting & Free Domain*</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> On-page SEO Setup</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Email Support & Minor Updates</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center pt-50">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="pricing-card active style2">
                                        <h4 className="pricing-card_title">Scale (Best Value)</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">₹</span>14,999*
                                            </h4>
                                        </div>
                                        <p>Everything in Launch, plus growth-driving extras (7 essentials)</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Everything in Launch</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Up to 8 Pages & Blog Integration</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Priority Hosting & Enhanced Security</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Advanced SEO & Keyword Strategy</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Basic Brand Identity Kit (logo + palette)</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> AI-Powered Chat Assistant Setup</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Monthly Content Updates</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center pt-50">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-right">
                                    <div className="pricing-card style2">
                                        <h4 className="pricing-card_title">Thrive</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">₹</span>22,999*
                                            </h4>
                                        </div>
                                        <p>Full-suite package for digital dominance (10 total features)</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Everything in Scale</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Unlimited Pages & E-commerce Capabilities</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Premium Hosting & SSL Management*</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> UX/UI Audit & Mockups</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Comprehensive Brand Identity (guidelines + assets)</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Full SEO + Paid Ads Setup</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> AI-Agents and Automation</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Quarterly Strategy Workshops</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> 24/7 Support & Maintenance*</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Social Media Integration</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center pt-50">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5 text-center">
                        <p className="note">* Free domain and hosting for the first year. Renewal charges apply after the first year.</p>
                        <p className="note">* 24/7 support and maintenance is available for the first month. Renewal charges apply after the first month.</p>
                        <p className="note">* Pricing may vary according to the specific needs of each customer.</p>
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