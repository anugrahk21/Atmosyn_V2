'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
const pageLinks = [
	{ id: 1, name: 'About Us', path: '/about' },
	{ id: 2, name: 'Service', path: '/service' },
	{ id: 3, name: 'Service Details', path: '/service-details' },
	{ id: 4, name: 'Our Team', path: '/team' },
	{ id: 5, name: 'Team Details', path: '/team-details' },
	{ id: 6, name: 'Pricing', path: '/pricing' },
	{ id: 7, name: 'FAQ Page', path: '/faq' },
	{ id: 8, name: '404 Error Page', path: '/error' },
]
const porfolioLinks = [
	{ id: 1, name: 'Portfolio', path: '/project' },
	{ id: 2, name: 'Portfolio Details', path: '/project-details' },
]

export default function Menu({ menuLeft }: any) {
    const pathname = usePathname()    
    const isActive = (path: string) => path === pathname
    
    return (
        <>
            <ul className={`navigation ${menuLeft ? "ms-xxl-0" : "me-0"} `}>
                <li className={pathname === "/" ? "active" : ""}><Link href="/">HOME</Link></li>
                <li className={pathname === "/about" ? "active" : ""}><Link href="/about">ABOUT US</Link></li>
                <li className={pathname === "/service" ? "active" : ""}><Link href="/service">SERVICES</Link></li>
                <li className={pathname === "/pricing" ? "active" : ""}><Link href="/pricing">PRICING</Link></li>
                <li className={pathname === "/blog" ? "active" : ""}><Link href="/blog">BLOG</Link></li>
                <li className={pathname === "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
