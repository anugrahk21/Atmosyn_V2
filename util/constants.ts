/**
 * Site-wide configuration constants.
 * 
 * Centralizes all hardcoded contact info, social links, and company details
 * so they can be updated in a single place.
 */

export const SITE_CONFIG = {
    companyName: 'Atmosyn',
    url: 'https://atmosyn.com',
    logoUrl: 'https://atmosyn.com/assets/img/logo/logo.png',
    location: 'Phagwara, Punjab, India',
} as const;

export const CONTACT = {
    phone: {
        raw: '919539694902',       // For WhatsApp API & tel: links
        display: '+91 9539694902', // For visible text
        tel: 'tel:+919539694902',  // For <a href>
    },
    email: {
        primary: 'info@atmosyn.com',
        secondary: 'workwithatmosyn@gmail.com',
    },
} as const;

export const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/atmosyn.tech/',
    linkedin: 'https://www.linkedin.com/company/atmosyn/',
    twitter: 'https://x.com/Atmosyn_',
    facebook: 'https://www.facebook.com/profile.php?id=61575047498498',
} as const;

/**
 * Constructs a WhatsApp API URL with an optional pre-filled message.
 */
export const getWhatsAppUrl = (message?: string): string => {
    const encodedMessage = encodeURIComponent(
        message ?? 'Hi, I would like to know more about your services.'
    );
    return `https://wa.me/${CONTACT.phone.raw}?text=${encodedMessage}`;
};
