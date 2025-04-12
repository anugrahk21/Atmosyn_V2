import Layout from "@/components/layout/Layout"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'
import Accordion from '@/components/elements/Accordion'

// Generate metadata using our utility for the FAQ page
export const metadata: Metadata = generateStaticMetadata({
  title: 'FAQ',
  pageName: 'Frequently Asked Questions',
  shortInfo: 'Common Questions & Answers',
  description: 'Find answers to frequently asked questions about Atmosyn\'s digital services, processes, and solutions. Get the information you need about our web development, design, and marketing services.',
  specificTopic: 'common questions about our services',
  keywords: ['digital agency FAQ', 'web development questions', 'design service FAQ', 'marketing service questions', 'Atmosyn support', 'common digital service questions'],
});

export default function FaqPage() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Frequently Asked Questions">
                <section className="faq-area-2 pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section__title text-center mb-50">
                                    <h2 className="title">Common Questions</h2>
                                    <p className="sec-text mt-25">Find answers to the most frequently asked questions about our services and solutions.</p>
                                </div>
                                <Accordion />
                                <div className="text-center mt-60">
                                    <p>Still have questions? We're here to help.</p>
                                    <div className="tg-button-wrap justify-content-center mt-30">
                                        <a href="/contact" className="btn btn-three square-btn">
                                            CONTACT US
                                        </a>
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
