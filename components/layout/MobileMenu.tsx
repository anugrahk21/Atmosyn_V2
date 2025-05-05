'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from 'react'
import XLogo from "../elements/XLogo"
import { WhatsAppButtonOffcanvas } from "../elements/WhatsAppButton"

interface ActiveState {
    status: boolean
    key: number
}

export default function MobileMenu({ handleMobileMenu }: { handleMobileMenu: () => void }) {
    const pathname = usePathname()
    const router = useRouter()
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 0,
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
    
    // Special handler for contact page navigation with smooth scrolling to element
    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default link behavior
        handleMobileMenu(); // Close the mobile menu
        
        // If already on the contact page, just scroll to the image
        if (pathname === '/contact') {
            document.getElementById('contact-image')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Navigate programmatically and set up a callback for when the page loads
            router.push('/contact');
            
            // Use setTimeout to wait for the navigation to complete before scrolling
            setTimeout(() => {
                document.getElementById('contact-image')?.scrollIntoView({ behavior: 'smooth' });
            }, 500); // Adjust timeout as needed
        }
    }
    return (
        <>
            <ul className="navigation me-0">
                <li className={pathname === "/" ? "active" : ""}><Link href="/" onClick={handleMobileMenu}>HOME</Link></li>
                <li className={pathname === "/about" ? "active" : ""}><Link href="/about" onClick={handleMobileMenu}>ABOUT US</Link></li>
                <li className={pathname === "/service" || pathname?.startsWith("/service-details") ? "active" : ""}><Link href="/service" onClick={handleMobileMenu}>SERVICES</Link></li>
                <li className={pathname === "/pricing" ? "active" : ""}><Link href="/pricing" onClick={handleMobileMenu}>PRICING</Link></li>
                <li className={pathname === "/blog" || pathname?.startsWith("/blog/") ? "active" : ""}><Link href="/blog" onClick={handleMobileMenu}>BLOG</Link></li>
                <li className={pathname === "/contact" ? "active" : ""}><Link href="/contact#contact-image" onClick={(e) => handleContactClick(e)}>CONTACT</Link></li>
            </ul>
            
            {/* Contact info and social links section */}
            <div className="tgmobile__menu-bottom">
            <div className="offCanvas__side-info">
                    <div className="contact-list mb-30">
                        <h4>Phone Number</h4>
                        <p><Link href="tel:+919539694902">+91 9539694902</Link></p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p><Link href="mailto:info@atmosyn.com">info@atmosyn.com</Link></p>
                        <p><Link href="mailto:workwithatmosyn@gmail.com">workwithatmosyn@gmail.com</Link></p>
                    </div>
                </div>
                <div className="offCanvas__social-icon">
                    <ul className="list-wrap">
                        <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                        <li><WhatsAppButtonOffcanvas /></li>
                        <li><Link href="https://twitter.com" target="_blank"><XLogo/></Link></li>
                        <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
