'use client'
import Layout from "@/components/layout/Layout"
import ContactForm from "@/components/sections/ContactForm"
import PartnerMarquee from "@/components/sections/PartnerMarquee"
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1"
import Testimonial1 from "@/components/sections/Testimonial1"

export default function TestimonialsPage() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Testimonials">
                <div>
                    {/*==============================
    Testimonial Area
    ==============================*/}                    <section className="testimonial-area-2 pt-110 pb-120 theme-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section__title pb-55">
                                        <h2 className="title wow img-custom-anim-left">FEEDBACK FROM OUR CLIENTS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__item-wrap4">
                                <TestimonialSlider1 
                                    filter={[]} 
                                    limit={0}
                                />
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
