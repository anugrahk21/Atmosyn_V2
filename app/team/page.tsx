import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import teamMembers from "@/util/team.json"

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Our Team',
  pageName: 'Team',
  shortInfo: 'Meet our amazing taem',
  description: 'Meet the talented Atmosyn team of digital experts who bring creativity, innovation and technical excellence to every project. Atmosyn merges innovative design with strategic insights to create engaging digital experiences.',
  specificTopic: 'our expert team members',
  keywords: ['digital agency team', 'creative professionals', 'digital experts', 'web developers', 'designers', 'UX specialists', 'marketing experts'],
});

import Marquee from 'react-fast-marquee'
import ContactForm from "@/components/sections/ContactForm"
import PartnerMarquee from "@/components/sections/PartnerMarquee"

// Client component for the testimonial slider
const TestimonialSlider = dynamic(() => 
  import('@/components/slider/TestimonialSlider1').then((mod) => mod.default), 
  { ssr: false }
)

export default function Team() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Team">
                <div>
                    <section className="pt-120 pb-120">
                        <div className="container">
                            <div className="row gx-30 gy-30 justify-content-center">
                                {teamMembers.map((member) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top" key={member.id}>
                                        <div className="team-card">
                                            <div className="team-card-thumb">
                                                <img src={member.photo} alt="img" />
                                            </div>
                                            <div className="team-card-details">
                                                <div className="media-left">
                                                    <h4 className="team-card-title"><Link href="/team-details">{member.name}</Link></h4>
                                                    <p className="team-card-text">{member.designation}</p>
                                                </div>
                                                <div className="team-social">
                                                    <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                    <div className="social-icon-wrap">
                                                        {/* {member.socialLinks.facebook && (
                                                            <Link href={member.socialLinks.facebook}><i className="fab fa-facebook-f" /></Link>
                                                        )} */}
                                                        {/*{member.socialLinks.twitter && (
                                                            <Link href={member.socialLinks.twitter}><i className="fab fa-twitter" /></Link>
                                                        )} */}
                                                        {member.socialLinks.linkedin && (
                                                            <Link href={member.socialLinks.linkedin}><i className="fab fa-linkedin-in" /></Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                            <TestimonialSlider />
                        </div>
                    </section>
                    {/*======== / Testimonial Section ========*/}
                    {/*==============================
    Contact Area
    ==============================*/}                <section className="contact-area-1 pt-120 pb-120 position-relative overflow-hidden">
                    <div className="contact-thumb1 wow img-custom-anim-left">
                        <img src="/assets/img/others/contact1-1.svg" alt="img" />
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