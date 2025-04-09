import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Hero1 from "@/components/sections/Hero1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Work from "@/components/sections/Work"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ATMOSYN | Creative Digital Agency',
  description: 'ATMOSYN is a full-service digital agency specializing in web development, AI solutions, UX/UI design, branding, and marketing services.',
  keywords: 'digital agency, web development, AI agents, UX/UI design, brand identity, marketing, SEO',
  openGraph: {
    title: 'ATMOSYN | Creative Digital Agency',
    description: 'ATMOSYN is a full-service digital agency specializing in web development, AI solutions, UX/UI design, branding, and marketing services.',
    url: 'https://atmosyn.com',
    siteName: 'ATMOSYN',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'ATMOSYN Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATMOSYN | Creative Digital Agency',
    description: 'ATMOSYN is a full-service digital agency specializing in web development, AI solutions, UX/UI design, branding, and marketing services.',
    images: ['/assets/img/logo/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                <Service1 />
                <Work />
                <Team1 />
                <Testimonial1 />
                <Blog1 />
            </Layout>
        </>
    )
}