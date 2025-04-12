'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from 'react'
interface ActiveState {
    status: boolean
    key: number
}

export default function MobileMenu() {
    const pathname = usePathname()
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
    return (
        <>
            <ul className="navigation me-0">
                <li className={pathname === "/" ? "active" : ""}><Link href="/">HOME</Link></li>
                <li className={pathname === "/about" ? "active" : ""}><Link href="/about">ABOUT US</Link></li>
                <li className={pathname === "/service" || pathname.startsWith("/service-details") ? "active" : ""}><Link href="/service">SERVICES</Link></li>
                <li className={pathname === "/pricing" ? "active" : ""}><Link href="/pricing">PRICING</Link></li>
                <li className={pathname === "/blog" || pathname.startsWith("/blog/") ? "active" : ""}><Link href="/blog">BLOG</Link></li>
                <li className={pathname === "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
