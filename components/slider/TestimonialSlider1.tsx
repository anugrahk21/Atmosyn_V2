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
export default function TestimonialSlider1() {
    return (
        <>
            <div className="swiper testimonial-active" id="testimonialSlider1">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="testimonial__item">
                            <div className="testimonial__icon">
                                <img src="/assets/img/icon/quote-left.svg" alt="img" />
                            </div>
                            <div className="testimonial__content">
                                <p className="testimonial__text">Great experience working with the team at
                                    Atmosyn Digital. They are always very responsive, easy to work with and
                                    ready to support the clients' needs.</p>
                                <div className="testimonial__author">
                                    <div className="testimonial__author-content">
                                        <h4 className="testimonial__title">NADRA</h4>
                                        <span className="testimonial__desig">MARKETING DIRECTOR AT
                                            BOKITTA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__item">
                            <div className="testimonial__icon">
                                <img src="/assets/img/icon/quote-left.svg" alt="img" className="injectable" />
                            </div>
                            <div className="testimonial__content">
                                <p className="testimonial__text">The AI integration capabilities at Atmosyn Digital 
                                    transformed our business operations. Their innovative solutions helped us stay 
                                    ahead of the curve in our industry.</p>
                                <div className="testimonial__author">
                                    <div className="testimonial__author-content">
                                        <h4 className="testimonial__title">MICHAEL CHEN</h4>
                                        <span className="testimonial__desig">CTO AT TECHFORGE 
                                            SOLUTIONS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__item">
                            <div className="testimonial__icon">
                                <img src="/assets/img/icon/quote-left.svg" alt="img" className="injectable" />
                            </div>
                            <div className="testimonial__content">
                                <p className="testimonial__text">The web development team at Atmosyn exceeded 
                                    our expectations. They delivered a beautiful, high-performance website that 
                                    perfectly captures our brand identity.</p>
                                <div className="testimonial__author">
                                    <div className="testimonial__author-content">
                                        <h4 className="testimonial__title">SARAH WILLIAMS</h4>
                                        <span className="testimonial__desig">FOUNDER AT MODERN 
                                            DESIGNS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="slider-area btn-wrap">
                <button className="testimonial-button-next btn border-btn icon-btn slider-prev default"><i className="fas fa-angle-left" /></button>
                <button className="testimonial-button-prev btn border-btn icon-btn slider-next default"><i className="fas fa-angle-right" /></button>
            </div>
        </>
    )
}
