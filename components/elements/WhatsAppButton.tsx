'use client'

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
    // Phone number (without '+' sign) and message
    const phoneNumber = '919539694902'; // Replace with your actual WhatsApp number
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
    // Phone number (without '+' sign) and message
    const phoneNumber = '919539694902'; // Replace with your actual WhatsApp number
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
