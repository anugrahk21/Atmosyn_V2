import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from 'react-fast-marquee'
export default function TeamDetails() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Team Details">
                <div>
                    <div className="team-details-page-area pt-120 pb-90">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xxl-5 col-lg-6">
                                    <div className="team-inner-thumb mb-lg-0 mb-40">
                                        <img className="w-100" src="/assets/img/team/team-details-1-1.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="team-details-about-info mb-0">
                                        <h2 className="title mb-20">Stephen</h2>
                                        <p className="text">He is an award-winning Executive Creative Director with over a decade of experience.</p>
                                        <div className="team-contact-wrap mt-30">
                                            <h6 className="team-contact-title mb-20"><span className="me-2">EMAIL:</span> <Link href="mailto:info@atmosyn.com">info@atmosyn.com</Link></h6>
                                            <h6 className="team-contact-title"><span className="me-2">PHONE:</span> <Link href="/tel:18408412569">+1 840 841 25 69</Link></h6>
                                            <div className="footer__social2 mt-30 mb-50">
                                                <ul className="list-wrap">
                                                    <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
                                                    <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                            <h6 className="team-contact-title mb-30">EXPERIENCE:</h6>
                                            <div className="skill-feature style4">
                                                <h3 className="skill-feature_title">BRANDING </h3>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{ width: '90%' }}>
                                                    </div>
                                                    <div className="progress-value"><span className="counter-number">90</span>%</div>
                                                </div>
                                            </div>
                                            <div className="skill-feature style4">
                                                <h3 className="skill-feature_title">DEVELOPMENT</h3>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{ width: '70%' }}>
                                                    </div>
                                                    <div className="progress-value"><span className="counter-number">70</span>%</div>
                                                </div>
                                            </div>
                                            <div className="skill-feature style4">
                                                <h3 className="skill-feature_title">MARKETING</h3>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{ width: '90%' }}>
                                                    </div>
                                                    <div className="progress-value"><span className="counter-number">90</span>%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-30 mt-60">He has written and directed spots for some of the world’s leading brands, including Ford, TUI, Gucci, Red Bull, Heineken, Christie’s and Aston Martin. He has also worked with leading talent in the music, film, and fashion spaces, such as Tinie Tempah, Labrinth, Julia Roberts, Jeremy Irons, Victoria Beckham, and Cara Delevingne. He specialises in films that create an emotional connection between brand and audience, often working with major sports teams and organisations to create motivational films in which narrative storytelling is used as a tool to improve performance.</p>
                            <p>Recently, Stephen Creatively Directed video segments on two of the most anticipated automotive launches in history – the Ford Mustang Mach-E and Ford F-150 Lightning, overseeing the creation of a series of accompanying films as well as a large-scale virtual production using Unreal Engine in Los Angeles. The films were presented by Idris Elba and Bill Ford and streamed live around the globe. He is a passionate screenwriter and cinephile with an unhealthy obsession for football.</p>
                        </div>
                    </div>
                    {/*==============================
    Contact Area
    ==============================*/}
                    <section className="contact-area-1 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-10">
                                    <div className="contact-form-wrap">
                                        <div className="section__title mb-60">
                                            <h2 className="title">Contact with Me</h2>
                                            <p className="sec-text mt-3">Your email address will not be published. Required fields are marked *
                                            </p>
                                        </div>
                                        <form action="mail.php" method="POST" className="contact__form ajax-contact">
                                            <div className="row gy-35">
                                                <div className="col-lg-6 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                                </div>
                                                <div className="col-lg-6 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                                    <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-three square-btn mt-60">
                                                SEND MESSAGE
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Contact Section ========*/}
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