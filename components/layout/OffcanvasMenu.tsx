import Link from 'next/link'
import { WhatsAppButtonOffcanvas } from "../elements/WhatsAppButton"
import XLogo from '../elements/XLogo'
import { CONTACT, SOCIAL_LINKS, SITE_CONFIG } from '@/util/constants'

interface OffcanvasMenuProps {
    isOffcanvasMenu: boolean;
    handleOffcanvasMenu: () => void;
}

export default function OffcanvasMenu({ isOffcanvasMenu, handleOffcanvasMenu }: OffcanvasMenuProps) {
    return (
        <>
            <div className={`offCanvas__info ${isOffcanvasMenu ? "active" : ""}`}>
                <div className="offCanvas__close-icon menu-close" onClick={handleOffcanvasMenu}>
                    <button><i className="fas fa-times" /></button>
                </div>
                <div className="offCanvas__logo mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo-white.svg" alt="Logo" /></Link>
                </div>
                <div className="offCanvas__side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Office Address</h4>
                        <p>{SITE_CONFIG.location}</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Phone Number</h4>
                        <p><Link href={CONTACT.phone.tel}>{CONTACT.phone.display}</Link></p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p><Link href={`mailto:${CONTACT.email.primary}`}>{CONTACT.email.primary}</Link></p>
                        <p><Link href={`mailto:${CONTACT.email.secondary}`}>{CONTACT.email.secondary}</Link></p>
                    </div>
                </div>
                <div className="offCanvas__social-icon mt-30">
                    <ul className="list-wrap">
                        <li><Link href={SOCIAL_LINKS.instagram} target="_blank"><i className="fab fa-instagram" /></Link></li>
                        <li><WhatsAppButtonOffcanvas /></li>
                        <li><Link href={SOCIAL_LINKS.twitter} target="_blank"><XLogo /></Link></li>
                        <li><Link href={SOCIAL_LINKS.facebook} target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                    </ul>
                </div>
            </div >
            <div className={`offCanvas__overly  ${isOffcanvasMenu ? "active" : ""}`} onClick={handleOffcanvasMenu} />
        </>
    )
}
