import Link from 'next/link'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import OffcanvasMenu from '../OffcanvasMenu'
import OfferMarquee from '@/components/sections/OfferMarquee'
import { usePathname } from 'next/navigation'

interface Header1Props {
    scroll: boolean;
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    isOffcanvasMenu: boolean;
    handleOffcanvasMenu: () => void;
}

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isOffcanvasMenu, handleOffcanvasMenu }: Header1Props) {
    // Get current pathname to determine if we're on the home page
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    return (
        <>
            <header>
                <div id="sticky-header" className={`tg-header__area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo-white.svg" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                            <Menu />
                                        </div>
                                        <div className="tgmenu__action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="offCanvas-menu" onClick={handleOffcanvasMenu}>
                                                    <a className="menu-tigger sidebar-btn">
                                                        <span className="line" />
                                                        <span className="line" />
                                                        <span className="line" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                            <a className="sidebar-btn">
                                                <span className="line" />
                                                <span className="line" />
                                                <span className="line" />
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div >
                    </div >
                    {/* Only show OfferMarquee when not scrolling AND on the home page */}
                    {!scroll && isHomePage && (
                        <div style={{ paddingTop: '5px' }}> {/* Added padding top here */}
                            <OfferMarquee />
                        </div>
                    )}
                </div >
                {/* Mobile Menu  */}
                < div className="tgmobile__menu" >
                    <nav className="tgmobile__menu-box">
                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                        <div className="nav-logo">
                            <Link href="/"><img src="/assets/img/logo/logo-white.svg" alt="Logo" /></Link>
                        </div>
                        <div className="tgmobile__menu-outer">
                            <MobileMenu handleMobileMenu={handleMobileMenu} />
                        </div>
                    </nav >
                </div >
                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                {/* End Mobile Menu */}
                {/* offCanvas-menu */}
                <OffcanvasMenu isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />
                {/* offCanvas-menu-end */}
            </header >

        </>
    )
}
