import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Contact Us',
  pageName: 'Contact Us',
  shortInfo: 'Get In Touch',
  description: 'Connect with Atmosyn\'s digital experts for your next project. We\'re here to answer your questions and discuss how we can help transform your digital presence.',
  specificTopic: 'contacting our team',
  keywords: ['contact Atmosyn', 'digital agency contact', 'get a quote', 'project inquiry', 'digital consultation'],
});

export default function Contact() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Contact">
                <div>
                    <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
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
                                                <Link href="#">Coming soon</Link>
                                            </li>
                                            <li>
                                                <h6 className="title">Email</h6>
                                                <Link href="mailto:info@atmosyn.com">info@atmosyn.com</Link>
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
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-form-wrap">
                                        <div className="section__title mb-60">
                                            <h4 className="subtitle">Got a project you want to collaborate on?
                                                Or just fancy a chat?</h4>
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
                    {/* contact-map */}
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54316.61290526615!2d75.73677023976642!3d31.224208368886186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a8011b%3A0xea39d809cec3716!2sPhagwara%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1712226532035!5m2!1sen!2sus" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}