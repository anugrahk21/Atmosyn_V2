'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import MagnetsComponent from '../elements/MagnetsComponent'
import WhatsAppButton from '../elements/WhatsAppButton'
import ContactToastButton from '../elements/ContactToastButton'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Header1 from "./header/Header1"

interface LayoutProps {
    headerStyle?: Number
    footerStyle?: Number
    children?: React.ReactNode
    breadcrumbTitle?: string
}


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    const [isOffcanvasMenu, setOffcanvasMenu] = useState<boolean>(false)
    const handleOffcanvasMenu = (): void => {
        setOffcanvasMenu(!isOffcanvasMenu)
    }

    useEffect(() => {
        const WOW: any = require('wowjs');
        (window as any).wow = new WOW.WOW({
            live: false
        });

        // Initialize WOW.js
        (window as any).wow.init()

        AOS.init()

        const onScroll = () => {
            setScroll(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <>
            <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />
            
            <DataBg />
            <MagnetsComponent />
            <AddClassBody />

            <main className="fix" id='top'>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            <Footer1 />

            <WhatsAppButton />
            <ContactToastButton />
            <BackToTop target="#top" />
        </>
    )
}