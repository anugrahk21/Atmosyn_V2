'use client'

import { getWhatsAppUrl } from '@/util/constants';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';

export default function WhatsAppButton() {
    const whatsappUrl = getWhatsAppUrl('Hello! I would like to know more about your services.');

    const hasScrolled = useScrollThreshold(200);

    if (!hasScrolled) return null;

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
}

// Variant for offcanvas and mobile menu without scroll detection
export function WhatsAppButtonOffcanvas() {
    const whatsappUrl = getWhatsAppUrl('Hello! I would like to know more about your services.');

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
}
