'use client'
import { useState } from 'react'
import Link from "next/link"

interface ActiveState {
    status: boolean
    key: number
}
export default function Accordion() {
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 1,
    })

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style2 active">
                    <div className="accordion-header" id="collapse-item-1" onClick={() => handleClick(1)}>
                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">What services does ATMOSYN offer?</button>
                    </div>
                    <div id="collapse-1" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We provide web development, AI solutions, UX/UI design, brand identity, SEO and digital marketing services. Our focus is creating innovative digital experiences that help businesses thrive. <Link href="/contact" className="text-theme">Contact us</Link> to discuss your specific needs.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-2" onClick={() => handleClick(2)}>
                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">How does your pricing structure work?</button>
                    </div>
                    <div id="collapse-2" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We offer three tiers: Essential (₹24,999/month), Professional (₹44,999/month), and Enterprise (₹79,999/month). Each includes services tailored to different business needs. We also provide custom quotes for unique requirements. <Link href="/pricing" className="text-theme">View our pricing</Link> or <Link href="/contact" className="text-theme">contact us</Link> for a custom quote.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-3" onClick={() => handleClick(3)}>
                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">How do you integrate AI into your solutions?</button>
                    </div>
                    <div id="collapse-3" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We implement practical AI solutions like chatbots, content recommendations, personalized experiences, and data analysis tools that deliver measurable results for your business. <Link href="/contact" className="text-theme">Get in touch</Link> to explore AI possibilities for your project.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-4" onClick={() => handleClick(4)}>
                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">What is your project timeline and process?</button>
                    </div>
                    <div id="collapse-4" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">Our process includes discovery (1-2 weeks), design (2-4 weeks), development (4-8 weeks), testing (1-2 weeks), and launch with support. Timelines vary based on project complexity. <Link href="/contact" className="text-theme">Contact our team</Link> for a specific timeline for your project.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-5" onClick={() => handleClick(5)}>
                        <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">Do you offer ongoing maintenance and support?</button>
                    </div>
                    <div id="collapse-5" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">Yes, all our plans include maintenance and support, but services vary based on your selected plan and project requirements. Higher-tier plans receive faster response times and more dedicated resources. Custom projects may require specialized maintenance agreements tailored to their complexity. <Link href="/contact" className="text-theme">Reach out to us</Link> to discuss your support requirements.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-6" onClick={() => handleClick(6)}>
                        <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">Can I upgrade or modify my service package later?</button>
                    </div>
                    <div id="collapse-6" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">Absolutely! All our service packages are flexible and can be modified as your business needs evolve. Changes can typically be implemented within the next billing cycle. <Link href="/contact" className="text-theme">Contact us</Link> to discuss upgrading your current package.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
