'use client'

export default function WhatsAppButton() {
    // Phone number (without '+' sign) and message
    const phoneNumber = '919876543210'; // Replace with your actual WhatsApp number
    const message = 'Hello! I have a question about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
