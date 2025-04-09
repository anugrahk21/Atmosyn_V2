import Link from "next/link"

export default function Work() {
    return (
        <>
            <section className="work-area pt-120 pb-120 dark-bg">
                <div className="container">
                    <div className="work-wrap-header">
                        <div className="work-thumb-wrap">
                            <div className="work-group-thumb wow img-custom-anim-top">
                                <div className="thumb">
                                    <img src="/assets/img/others/group-img-1-1.jpg" alt="img" />
                                </div>
                                <div className="thumb">
                                    <img src="/assets/img/others/group-img-1-2.jpg" alt="img" />
                                </div>
                                <div className="thumb">
                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="work-counter-wrap wow img-custom-anim-left">
                                <span className="counter-number">100%</span> Client Satisfaction
                            </div>
                        </div>
                        <h3 className="work-wrap-text wow img-custom-anim-right">
                            Creative solutions for impactful digital experiences.
                        </h3>
                    </div>
                    <div className="pt-100 pb-120">
                        <div className="row gy-40 align-items-center">
                            <div className="col-lg-6 wow img-custom-anim-left">
                                <div className="work-img-wrap1">
                                    <img src="/assets/img/others/work-thumb1-1.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="work-wrap-details wow img-custom-anim-left ">
                                    <div className="section__title mb-40">
                                        <h2 className="title text-white">FINANCIAL APP DASHBOARD</h2>
                                        <p className="sec-text text-white">A custom financial dashboard interface for a fintech startup. We created an intuitive user experience with real-time data visualization that simplifies complex financial information.</p>
                                    </div>
                                    <div className="blog__post-meta">
                                        <ul className="list-wrap">
                                            <li><Link href="/project-details">UI/UX DESIGN</Link></li>
                                            <li><Link href="/project-details">DASHBOARD</Link></li>
                                            <li><Link href="/project-details">FINTECH</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tg-button-wrap mt-70">
                                        <Link href="/project-details" className="link-btn">
                                            View Project
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 align-items-center flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 wow img-custom-anim-right">
                            <div className="work-img-wrap1">
                                <img src="/assets/img/others/work-thumb1-2.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="work-wrap-details wow img-custom-anim-right ">
                                <div className="section__title mb-40">
                                    <h2 className="title text-white">E-COMMERCE WEBSITE REDESIGN</h2>
                                    <p className="sec-text text-white">Complete overhaul of an outdated online store with modern UI/UX principles, resulting in a 42% increase in conversion rate and significantly improved user engagement across all device types.</p>
                                </div>
                                <div className="blog__post-meta">
                                    <ul className="list-wrap">
                                        <li><Link href="/project-details">WEB DEVELOPMENT</Link></li>
                                        <li><Link href="/project-details">E-COMMERCE</Link></li>
                                        <li><Link href="/project-details">RESPONSIVE DESIGN</Link></li>
                                    </ul>
                                </div>
                                <div className="tg-button-wrap mt-70">
                                    <Link href="/project-details" className="link-btn">
                                        View Project
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tg-button-wrap mt-80 justify-content-center">
                        <Link href="/project" className="btn big-circle-btn style2 gsap-magnetic">
                            VIEW ALL
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
