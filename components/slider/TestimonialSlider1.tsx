'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import testimonialData from "@/util/testimonials.json"

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  photo: string;
  text: string;
  tags: string[];
}

interface TestimonialSlider1Props {
  filter?: string[];
  limit?: number;
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

export default function TestimonialSlider1({ filter = ['homepage'], limit = 8 }: TestimonialSlider1Props) {
    // Process testimonials directly from the JSON data
    const allTestimonials = testimonialData as Testimonial[];
    
    // Filter testimonials by tags if filter is provided
    const filteredTestimonials = filter && filter.length > 0
        ? allTestimonials.filter(testimonial => 
            filter.some(tag => testimonial.tags.includes(tag))
          )
        : allTestimonials;
    
    // Apply limit if specified
    const testimonials = limit ? filteredTestimonials.slice(0, limit) : filteredTestimonials;
    return (
        <>
            <div className="swiper testimonial-active" id="testimonialSlider1">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial__item">
                                <div className="testimonial__icon">
                                    <img src="/assets/img/icon/quote-left.svg" alt="img" className="injectable" />
                                </div>
                                <div className="testimonial__content">
                                    <p className="testimonial__text">{testimonial.text}</p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author-content">
                                            <h4 className="testimonial__title">{testimonial.name}</h4>
                                            <span className="testimonial__desig">{testimonial.designation} AT {testimonial.company}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="slider-area btn-wrap">
                <button className="testimonial-button-prev btn border-btn icon-btn slider-prev default"><i className="fas fa-angle-left" /></button>
                <button className="testimonial-button-next btn border-btn icon-btn slider-next default"><i className="fas fa-angle-right" /></button>
            </div>
        </>
    )
}
