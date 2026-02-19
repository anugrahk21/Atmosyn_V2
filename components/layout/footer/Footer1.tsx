'use client'
import Link from 'next/link'
import XLogo from '@/components/elements/XLogo'
import { CONTACT, SOCIAL_LINKS } from '@/util/constants'
export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer__area dark-bg">
                    <div className="container">
                        <div className="footer__cta-wrap pt-115 pb-120">
                            <p className="footer__cta-wrap-text text-white pb-115"><i className="fas fa-circle" /> Just send us your
                                idea and we will turn it into a reality!</p>
                            <h2 className="footer__cta-wrap-title"><Link className="link-btn text-white" href="/contact">Let's start a
                                project <i className="icon-arrow-top-left" /></Link></h2>
                        </div>
                        <div className="footer__top fix">
                            <div className="row justify-content-between">
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__location">
                                        <h4 className="footer__widget-title">Location</h4>
                                        <div className="footer__content">
                                            <p>Phagwara, Punjab, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__conversation">
                                        <h4 className="footer__widget-title">Start a conversation</h4>
                                        <div className="footer__content">
                                            <p><Link href={`mailto:${CONTACT.email.primary}`}>{CONTACT.email.primary}</Link></p>
                                            <p><Link href={`mailto:${CONTACT.email.secondary}`}>{CONTACT.email.secondary}</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__copyright">
                                        <h4 className="footer__widget-title">© {new Date().getFullYear()} Atmosyn, All rights reserved.</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6 col-sm-6">
                                    <div className="footer__widget footer__social">
                                        <ul className="list-wrap">
                                            <li><Link href={SOCIAL_LINKS.instagram} target="_blank"><i className="social-icon fab fa-instagram" />INSTAGRAM <i className="icon-arrow-top-left" /></Link></li>
                                            <li><Link href={SOCIAL_LINKS.linkedin} target="_blank"><i className="social-icon fab fa-linkedin-in" />LINKEDIN <i className="icon-arrow-top-left" /></Link></li>
                                            <li><Link href={SOCIAL_LINKS.twitter} target="_blank"><i className="social-icon" /><XLogo /> TWITTER <i className="icon-arrow-top-left" /></Link></li>
                                            <li><Link href={SOCIAL_LINKS.facebook} target="_blank"><i className="social-icon fab fa-facebook-f" />FACEBOOK <i className="icon-arrow-top-left" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container text-center">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll__footer-top open text-theme" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                Back to top <i className="fas fa-arrow-up" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
