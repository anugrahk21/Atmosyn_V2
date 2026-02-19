import Layout from "@/components/layout/Layout"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import Link from "next/link"

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
    title: 'Privacy Policy',
    pageName: 'Privacy Policy',
    shortInfo: 'Data Practices & Protection',
    description: 'Atmosyn is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our digital services and AI solutions.',
    specificTopic: 'privacy and data protection practices',
    keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'Atmosyn privacy', 'digital agency data policy', 'AI ethics', 'personal data handling'],
});

export default function PrivacyPolicy() {
    const effectiveDate = "February 16, 2026";

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Privacy Policy">
                <section className="privacy-policy-area pt-100 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="privacy-policy-content">
                                    <div className="section__title text-center mb-60">
                                        <h2 className="title wow fadeInUp" data-wow-delay=".2s">Privacy Policy</h2>
                                        <p className="sec-text mt-20 wow fadeInUp" data-wow-delay=".4s">Effective Date: {effectiveDate}</p>
                                    </div>

                                    <div className="privacy-wrapper wow fadeInUp" data-wow-delay=".6s">
                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">1. Introduction</h3>
                                            <p className="mb-20">
                                                Welcome to <strong>Atmosyn</strong> ("we," "our," or "us"). We are a digital agency specializing in AI solutions, web development, and digital transformation. Your privacy is critically important to us. This Privacy Policy explains how we collect, process, use, and share your personal information when you visit our website or engage with our services.
                                            </p>
                                            <p>
                                                By accessing or using our website and services, you agree to the terms of this Privacy Policy.
                                            </p>
                                        </div>

                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">2. Information We Collect</h3>
                                            <p className="mb-20">We collect information to provide better services to our users. The types of information we collect include:</p>

                                            <h5 className="sub-title mb-15">A. Information You Provide to Us</h5>
                                            <ul className="list-wrap mb-30 check-list">
                                                <li className="mb-10"><i className="fas fa-check-circle me-2 text-theme"></i><strong>Contact Information:</strong> Name, email address, phone number, and company name provided via contact forms.</li>
                                                <li className="mb-10"><i className="fas fa-check-circle me-2 text-theme"></i><strong>Project Details:</strong> Information about your business needs, project requirements, and budget when you request a quote or consultation.</li>
                                                <li className="mb-10"><i className="fas fa-check-circle me-2 text-theme"></i><strong>Communications:</strong> Content of messages you send to us via email or other communication channels.</li>
                                            </ul>

                                            <h5 className="sub-title mb-15">B. Information We Collect Automatically</h5>
                                            <ul className="list-wrap mb-30 check-list">
                                                <li className="mb-10"><i className="fas fa-check-circle me-2 text-theme"></i><strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent on pages, and navigation paths.</li>
                                                <li className="mb-10"><i className="fas fa-check-circle me-2 text-theme"></i><strong>Device Information:</strong> Information about your device, browser type, IP address, and operating system for security and optimization purposes.</li>
                                            </ul>
                                        </div>

                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">3. How We Use Your Information</h3>
                                            <p className="mb-20">We use the collected information for the following purposes:</p>
                                            <ul className="list-wrap check-list">
                                                <li className="mb-15"><i className="fas fa-check text-theme me-2"></i><strong>To Provide Services:</strong> To deliver, maintain, and improve our digital solutions and AI services.</li>
                                                <li className="mb-15"><i className="fas fa-check text-theme me-2"></i><strong>Communication:</strong> To respond to your inquiries, send project updates, and provide customer support.</li>
                                                <li className="mb-15"><i className="fas fa-check text-theme me-2"></i><strong>Marketing:</strong> With your consent, to send you newsletters, case studies, and promotional materials (you can opt-out at any time).</li>
                                                <li className="mb-15"><i className="fas fa-check text-theme me-2"></i><strong>Security:</strong> To detect, prevent, and address technical issues and unauthorized access.</li>
                                                <li className="mb-15"><i className="fas fa-check text-theme me-2"></i><strong>AI Optimization:</strong> To refine our internal tools and service offerings based on aggregated, non-personal usage patterns.</li>
                                            </ul>
                                        </div>

                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">4. Sharing Your Information</h3>
                                            <p className="mb-20">We respect your data and do not sell your personal information. We may share your information only in the following limited circumstances:</p>
                                            <ul className="list-wrap check-list">
                                                <li className="mb-15"><i className="fas fa-shield-alt text-theme me-2"></i><strong>Service Providers:</strong> We engage trusted third-party companies (e.g., hosting providers like Hostinger/Vercel, analytics services like Google Analytics) to help us operate our services. These parties are bound by confidentiality agreements.</li>
                                                <li className="mb-15"><i className="fas fa-shield-alt text-theme me-2"></i><strong>Legal Compliance:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                                                <li className="mb-15"><i className="fas fa-shield-alt text-theme me-2"></i><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset.</li>
                                            </ul>
                                        </div>

                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">5. Data Security</h3>
                                            <p>
                                                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                                            </p>
                                        </div>

                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">6. Third-Party Links</h3>
                                            <p>
                                                Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                                            </p>
                                        </div>

                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">7. Your Data Rights</h3>
                                            <p className="mb-20">Depending on your location, you may have certain rights regarding your personal data, including:</p>
                                            <ul className="list-wrap check-list">
                                                <li className="mb-10"><i className="fas fa-angle-right text-theme me-2"></i>The right to access, update, or delete the information we have on you.</li>
                                                <li className="mb-10"><i className="fas fa-angle-right text-theme me-2"></i>The right of rectification (to correct inaccurate data).</li>
                                                <li className="mb-10"><i className="fas fa-angle-right text-theme me-2"></i>The right to object to our processing of your personal data.</li>
                                                <li className="mb-10"><i className="fas fa-angle-right text-theme me-2"></i>The right to request restriction of processing.</li>
                                                <li className="mb-10"><i className="fas fa-angle-right text-theme me-2"></i>The right to data portability.</li>
                                            </ul>
                                            <p className="mt-20">To exercise these rights, please contact us using the information in the "Contact Us" section below.</p>
                                        </div>

                                        <div className="privacy-section mb-50">
                                            <h3 className="title mb-20">8. Changes to This Privacy Policy</h3>
                                            <p>
                                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                                            </p>
                                        </div>

                                        <div className="privacy-section bg-light p-4 rounded-3 border-start border-4 border-theme">
                                            <h3 className="title mb-15">9. Contact Us</h3>
                                            <p className="mb-20">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                                            <ul className="list-wrap contact-list">
                                                <li className="mb-10"><strong>Email:</strong> <a href="mailto:info@atmosyn.com" className="hover-theme">info@atmosyn.com</a></li>
                                                <li className="mb-10"><strong>Support:</strong> <a href="mailto:workwithatmosyn@gmail.com" className="hover-theme">workwithatmosyn@gmail.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
