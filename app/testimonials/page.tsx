'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from 'react-fast-marquee'
import testimonialData from "@/util/testimonials.json"
import ContactForm from "@/components/sections/ContactForm"
import PartnerMarquee from "@/components/sections/PartnerMarquee"

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  photo: string;
  text: string;
  tags: string[];
}

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

export default function TestimonialsPage() {
    // Get all testimonials directly from the JSON data
    const testimonials = testimonialData as Testimonial[];
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Testimonials">
                <div>
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
                                        {testimonials.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className="row gy-30 align-items-center">
                                                    <div className="col-xl-5">
                                                        <div className="testimonial__author">
                                                            <div className="thumb">
                                                                <img src={testimonial.photo} alt={testimonial.name} />
                                                            </div>
                                                            <div className="testimonial__author-content">
                                                                <h4 className="testimonial__title">{testimonial.name}</h4>
                                                                <span className="testimonial__desig">{testimonial.designation}, {testimonial.company}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7">
                                                        <div className="testimonial__item style4">
                                                            <div className="testimonial__icon">
                                                                <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                            </div>
                                                            <div className="testimonial__content">
                                                                <p className="testimonial__text">{testimonial.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="col-xl-7">
                                        <div className="btn-wrap">
                                            <button className="testimonial-button-prev btn border-dark3 icon-btn slider-prev default"><i className="fas fa-angle-left" /></button>
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
    ==============================*/}                    <section className="contact-area-1 pt-120 pb-120 position-relative overflow-hidden">
                        <div className="contact-thumb1 wow img-custom-anim-left">
                            <img src="/assets/img/others/contact1-1.jpg" alt="img" />
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
                    {/*======== / Contact Section ========*/}                    {/*==============================
    Marquee Area
    ==============================*/}
                    <PartnerMarquee 
                        backgroundColor="theme-bg"
                        paddingTop={30}
                        paddingBottom={30}
                    />
                </div>
            </Layout>
        </>
    )
}
