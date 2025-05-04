import Link from "next/link"

export default function Pricing() {
    return (
        <>
            <section className="pricing-area-1 pt-60 pb-60 gray-bg overflow-hidden">
                <div className="container">
                    <div className="section__title mb-10 wow img-custom-anim-top text-center">
                        <h2 className="title">Plans</h2>
                    </div>
                    <div className="row gy-30 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow img-custom-anim-left">
                            <Link href="/pricing" className="pricing-card-link">
                                <div className="pricing-card style2" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                    <h4 className="pricing-card_title" style={{ textAlign: 'center' }}>Launch</h4>
                                    <div className="checklist">
                                        <ul>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Custom Responsive Website (up to 5 pages)</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Basic Hosting & Free Domain*</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> On-page SEO Setup</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Email Support & Minor Updates</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 wow img-custom-anim-top">
                            <Link href="/pricing" className="pricing-card-link">
                                <div className="pricing-card active style2" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                    <h4 className="pricing-card_title" style={{ textAlign: 'center' }}>Scale (Best Value)</h4>
                                    <div className="checklist">
                                        <ul>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Everything in Launch</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Up to 8 Pages &<br></br>Blog Integration</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Advanced SEO & Keyword Strategy</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> AI-Powered Chat Assistant Setup</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 wow img-custom-anim-right">
                            <Link href="/pricing" className="pricing-card-link">
                                <div className="pricing-card style2" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                    <h4 className="pricing-card_title" style={{ textAlign: 'center' }}>Thrive</h4>
                                    <div className="checklist">
                                        <ul>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Everything in Scale</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Unlimited Pages &<br></br>E-commerce</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Comprehensive Brand Identity</li>
                                            <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> AI-Agents and<br></br>Automation</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
