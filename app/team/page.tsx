'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
}


import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from 'react-fast-marquee'
export default function Team() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Team">
                <div>
                    <section className="pt-120 pb-120">
                        <div className="container">
                            <div className="row gx-30 gy-30 justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-1.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-2.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Souro Terry</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-3.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Stephen</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-4.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-5.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-6.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-7.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="team-card">
                                        <div className="team-card-thumb">
                                            <img src="/assets/img/team/team-1-8.jpg" alt="img" />
                                        </div>
                                        <div className="team-card-details">
                                            <div className="media-left">
                                                <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                                <p className="team-card-text">Creative Director</p>
                                            </div>
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                    <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Team Section ========*/}
                    {/*==============================
    Testimonial Area
    ==============================*/}
                    <section className="testimonial-area-2 pt-110 pb-120 theme-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section__title pb-55">
                                        <h2 className="title wow img-custom-anim-left">FEEDBACK FROM OUR CLIENTS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__item-wrap4">
                                <div className="swiper testimonial-active" id="testimonialSlider1">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="row gy-30 align-items-center">
                                                <div className="col-xl-5">
                                                    <div className="testimonial__author">
                                                        <div className="thumb">
                                                            <img src="/assets/img/others/testimonial5-1.jpg" alt="img" />
                                                        </div>
                                                        <div className="testimonial__author-content">
                                                            <h4 className="testimonial__title">MARK FRIDMAN</h4>
                                                            <span className="testimonial__desig">CEO, GOOGLE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7">
                                                    <div className="testimonial__item style4">
                                                        <div className="testimonial__icon">
                                                            <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                        </div>
                                                        <div className="testimonial__content">
                                                            <p className="testimonial__text">Atmosyn has been an invaluable partner to us. Any talent we've worked with has shown a deep
                                                                understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. We're set up to meet our budgets and timelines while exceeding expectations.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="row gy-30 align-items-center">
                                                <div className="col-xl-5">
                                                    <div className="testimonial__author">
                                                        <div className="thumb">
                                                            <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                                        </div>
                                                        <div className="testimonial__author-content">
                                                            <h4 className="testimonial__title">MARK FRIDMAN</h4>
                                                            <span className="testimonial__desig">CEO, GOOGLE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7">
                                                    <div className="testimonial__item style4">
                                                        <div className="testimonial__icon">
                                                            <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                        </div>
                                                        <div className="testimonial__content">
                                                            <p className="testimonial__text">Atmosyn has been an invaluable partner to us. Any talent we've worked with has shown a deep
                                                                understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. We're set up to meet our budgets and timelines while exceeding expectations.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="col-xl-7">
                                        <div className="btn-wrap">
                                            <button className="testimonial-button-next btn border-dark3 icon-btn slider-prev default"><i className="fas fa-angle-left" /></button>
                                            <button className="testimonial-button-next btn border-dark3 icon-btn slider-next default"><i className="fas fa-angle-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Testimonial Section ========*/}
                    {/*==============================
    Contact Area
    ==============================*/}
                    <section className="contact-area-1 pt-120 pb-120 position-relative overflow-hidden">
                        <div className="contact-thumb1 wow img-custom-anim-left">
                            <img src="/assets/img/others/contact1-1.jpg" alt="img" />
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-end">
                                <div className="col-lg-6">
                                    <div className="contact-form-wrap">
                                        <div className="section__title mb-60 wow img-custom-anim-left">
                                            <h2 className="title">GET IN TOUCH</h2>
                                            <p className="sec-text mt-3">Got a project you want to collaborate on? <br />
                                                Or just fancy a chat?
                                            </p>
                                        </div>
                                        <form action="mail.php" method="POST" className="contact__form ajax-contact">
                                            <div className="row gy-35">
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                                                    <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation*" />
                                                </div>
                                                <div className="col-12 form-group">
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