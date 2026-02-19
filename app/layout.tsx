import type { Metadata } from "next"
import { Aclonica, Poppins, Unbounded } from "next/font/google"
import { getDefaultMetadata, generateJsonLd } from "@/util/metadata"
import Script from "next/script"
import 'aos/dist/aos.css';
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "/public/assets/css/animate.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/default.css"
import "/public/assets/css/fontawesome-all.min.css"
import "/public/assets/css/icon-font.css"
import "/public/assets/css/style.css"
import "/public/assets/css/swiper-bundle.min.css"
import "/public/assets/css/testimonial-marquee.css"

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--tg-body-font-family",
    display: 'swap',
})
const aclonica = Aclonica({
    weight: ['400'],
    subsets: ["latin"],
    variable: "--tg-heading-font-family",
    display: 'swap',
})
const unbounded = Unbounded({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--tg-heading2-font-family",
    display: 'swap',
})

// Use our default metadata from the utility and add favicon configuration
export const metadata: Metadata = {
    ...getDefaultMetadata(),
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/assets/img/favicon.jpg' }
        ],
        apple: { url: '/assets/img/favicon.jpg' }
    }
};

// Add stronger title signals to ensure search engines use our exact title
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // Generate organization JSON-LD for SEO
    const organizationJsonLd = generateJsonLd('organization');

    return (
        <html lang="en">
            <head>
                {/* Add JSON-LD structured data for the organization (global) */}
                <Script
                    id="organization-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                {/* Force search engines to respect our exact title format */}
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            </head>
            <body className={`${poppins.variable} ${aclonica.variable} ${unbounded.variable} theme-green`}>{children}</body>
        </html>
    )
}
