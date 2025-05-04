import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import ContactForm from "@/components/sections/ContactForm"
import OfferMarquee from "@/components/sections/OfferMarquee"
import { WhatsAppButtonOffcanvas } from "@/components/elements/WhatsAppButton"

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Contact Us',
  pageName: 'Contact',
  shortInfo: 'Get in touch',
  description: 'Connect with Atmosyn for your next project. Our team is ready to discuss your ideas, answer questions, and provide expert consultation. Reach out today!',
  specificTopic: 'contacting our team',
  keywords: ['contact digital agency', 'web development inquiry', 'digital project consultation', 'hire design team'],
});

export default function Contact() {
    // Phone number (without '+' sign) and message for WhatsApp
    const phoneNumber = '919539694902';
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>

            <Layout headerStyle={8} footerStyle={3} breadcrumbTitle="CONTACT US">
                <OfferMarquee></OfferMarquee>
                <div>
                    <section className="contact-area-1 pt-60 pb-20 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-60">
                                <h2 className="title">LET'S GET IN TOUCH</h2>
                            </div>
                            <div className="row gy-60">
                                <div className="col-lg-6">
                                    <div className="contact__info-wrap">
                                        <ul className="list-wrap">
                                            <li>
                                                <h6 className="title">Phone</h6>
                                                <Link href="tel:+919539694902">+91 9539694902</Link>
                                            </li>
                                            <li>
                                                <h6 className="title">Email</h6>
                                                <Link href="mailto:info@atmosyn.com">info@atmosyn.com</Link><br></br><Link href="mailto:workwithatmosyn@gmail.com">workwithatmosyn@gmail.com</Link>
                                            </li>
                                            <li>
                                                <h6 className="title">Headquarters</h6>
                                                Phagwara, Punjab, India
                                            </li>
                                            <li>
                                                <Link href="https://www.google.com/maps" className="link-btn">
                                                    See on Google Map
                                                    <i className="icon-arrow-top-left" />
                                                </Link>
                                            </li>
                                        </ul>
                                        <div id="contact-image" style={{ marginTop: '3rem', position: 'relative', width: '100%' }}>
                                            <img 
                                                src="/assets/img/others/contact1-1.svg" 
                                                alt="Contact illustration" 
                                                className="wow img-custom-anim-left"
                                                style={{ width: '100%', maxHeight: '420px', objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div id="contact-form" className="contact-form-wrap">
                                        <div className="section__title mb-20">
                                            <h4 className="subtitle">Got a project you want to collaborate on?
                                                Or just fancy a chat?</h4>
                                        </div>
                                        
                                        {/* WhatsApp section */}
                                        <div className="whatsapp-section mb-40">
                                            <h5 className="subtitle">Just WhatsApp us?</h5>
                                            <div className="whatsapp-button-container d-flex align-items-center">
                                                <a 
                                                    href={whatsappUrl}
                                                    className="btn btn-three"
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        fontSize: '16px',
                                                        padding: '12px 24px'
                                                    }}
                                                >
                                                    <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
                                                    WhatsApp Us
                                                </a>
                                            </div>
                                        </div>
                                        
                                        {/* Replace the static form with the ContactForm component */}
                                        {/* Pass empty title and subtitle props since we're keeping the existing heading */}
                                        <ContactForm title="" subtitle="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Contact Section ========*/}
                    {/* contact-map */}
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54316.61290526615!2d75.73677023976642!3d31.224208368886186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a8011b%3A0xea39d809cec3716!2sPhagwara%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1712226532035!5m2!1sen!2sus" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}