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

import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from 'react-fast-marquee'
export default function Faq() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="FAQs">
                <div>
                    <section className="faq-area-2 pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / FAQ Section ========*/}
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
                                                            <h4 className="testimonial__title">RAHUL SHARMA</h4>
                                                            <span className="testimonial__desig">Founder, TechStart India</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7">
                                                    <div className="testimonial__item style4">
                                                        <div className="testimonial__icon">
                                                            <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                        </div>
                                                        <div className="testimonial__content">
                                                            <p className="testimonial__text">ATMOSYN delivered beyond our expectations for our e-commerce platform redesign. Their team combined technical expertise with creative design thinking, resulting in a 35% increase in our conversion rate within two months of launch. They were responsive, professional, and genuinely invested in our business success. I highly recommend them to any startup looking for a technology partner.</p>
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
                                                            <h4 className="testimonial__title">PRIYA MEHTA</h4>
                                                            <span className="testimonial__desig">Marketing Director, FutureFinance</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7">
                                                    <div className="testimonial__item style4">
                                                        <div className="testimonial__icon">
                                                            <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                        </div>
                                                        <div className="testimonial__content">
                                                            <p className="testimonial__text">ATMOSYN has transformed our digital presence completely. Their AI implementation for our customer service chatbot reduced our support inquiries by 40% while maintaining high customer satisfaction. The branding refresh they delivered perfectly captures our company's vision. Their team is professional, creative, and delivers on their promises. They've been a true strategic partner in our digital transformation journey.</p>
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