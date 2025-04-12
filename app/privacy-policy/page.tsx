import Layout from "@/components/layout/Layout"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Privacy Policy',
  pageName: 'Privacy Policy',
  shortInfo: 'Data Practices & Protection',
  description: 'Learn about Atmosyn\'s commitment to protecting your privacy and how we handle your data. Our comprehensive privacy policy outlines our data collection and usage practices.',
  specificTopic: 'privacy and data protection practices',
  keywords: ['privacy policy', 'data protection', 'data collection practices', 'personal information', 'GDPR compliance', 'digital agency privacy'],
});

export default function PrivacyPolicy() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Privacy Policy">
                <section className="privacy-policy-area pt-110 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="privacy-policy-content">
                                    <div className="section__title text-center mb-65">
                                        <h2 className="title">Our Commitment to Your Privacy</h2>
                                        <p className="sec-text mt-25">Last Updated: April 4, 2025</p>
                                    </div>

                                    <div className="privacy-section mb-45">
                                        <h4 className="title mb-25">1. Information We Collect</h4>
                                        <p className="mb-25">We collect information that you provide directly to us, including when you contact us through our website or use our services. This may include:</p>
                                        <ul className="list-wrap mb-35">
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Name and contact information</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Email address and phone number</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Business information</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Information about your website and project requirements</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-section mb-45">
                                        <h4 className="title mb-25">2. How We Use Your Information</h4>
                                        <p className="mb-25">We use the information we collect to:</p>
                                        <ul className="list-wrap mb-35">
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Provide and maintain our services</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Respond to your inquiries and requests</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Send you important information about our services</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Improve our website and services</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-section mb-45">
                                        <h4 className="title mb-25">3. Information Sharing</h4>
                                        <p className="mb-25">We do not sell or rent your personal information to third parties. We may share your information with:</p>
                                        <ul className="list-wrap mb-35">
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Service providers who assist in our operations</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Professional advisors and consultants</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Law enforcement when required by law</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-section mb-45">
                                        <h4 className="title mb-25">4. Data Security</h4>
                                        <p className="mb-35">We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                                    </div>

                                    <div className="privacy-section mb-45">
                                        <h4 className="title mb-25">5. Your Rights</h4>
                                        <p className="mb-25">You have the right to:</p>
                                        <ul className="list-wrap mb-35">
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Access your personal information</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Request correction of inaccurate information</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Request deletion of your information</li>
                                            <li className="mb-15"><i className="fas fa-check-circle me-2"></i>Opt-out of marketing communications</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-section">
                                        <h4 className="title mb-25">6. Contact Us</h4>
                                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@atmosyn.com" className="text-theme">info@atmosyn.com</a></p>
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
