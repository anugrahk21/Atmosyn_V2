import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Hero1 from "@/components/sections/Hero1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Work from "@/components/sections/Work"
import Overview from "@/components/sections/Overview"
import { generateStaticMetadata } from "@/util/metadata"
import type { Metadata } from 'next'

// Generate metadata using our utility
export const metadata: Metadata = generateStaticMetadata({
  title: 'Home',
  pageName: 'ATMOSYN',
  shortInfo: 'Creative Digital Agency',
  description: 'ATMOSYN is a full-service digital agency specializing in AI solutions, web development, UX/UI design, automation services, branding, and marketing services. Transform your digital presence with our innovative solutions.',
  specificTopic: 'comprehensive digital and AI solutions',
  keywords: ['digital agency', 'web development', 'UI/UX design', 'AI solutions', 'automation services', 'brand identity', 'marketing', 'SEO', 'digital transformation'],
  image: '/assets/img/logo/logo.png',
});

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                <Service1 />
                <Overview />
                <Work />
                <Team1 />
                <Testimonial1 />
                <Blog1 />
            </Layout>
        </>
    )
}