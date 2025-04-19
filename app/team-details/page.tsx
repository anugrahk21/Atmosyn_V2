import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from 'react-fast-marquee'
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import ContactForm from "@/components/sections/ContactForm"
import PartnerMarquee from "@/components/sections/PartnerMarquee"

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Team Member',
  pageName: 'Team Details',
  shortInfo: 'Professional Profile',
  description: 'Learn more about Atmosyn\'s talented team members, their expertise, experience, and the skills they bring to deliver exceptional digital solutions for our clients.',
  specificTopic: 'our professional team member profiles',
  keywords: ['digital expert profile', 'team member bio', 'professional experience', 'digital talent', 'Atmosyn professional', 'team expertise'],
});

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
                                            <h6 className="team-contact-title mb-20"><span className="me-2">EMAIL:</span> <Link href="mailto:info@atmosyn.com">info@atmosyn.com</Link><br></br><Link href="mailto:workwithatmosyn@gmail.com">workwithatmosyn@gmail.com</Link></h6>
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
                                    <ContactForm 
                                        title="Contact with Me"
                                        subtitle="Your email address will not be published. Required fields are marked *"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Contact Section ========*/}
                    {/*==============================
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