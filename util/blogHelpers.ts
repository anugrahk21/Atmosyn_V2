/**
 * Centralized blog image URL helpers.
 * 
 * Previously duplicated across Blog1.tsx, BlogFilterOne.tsx, blog/page.tsx,
 * and blog/[id]/page.tsx. Now defined once and imported everywhere.
 */

import { SITE_CONFIG } from './constants';

/**
 * Returns the URL for a blog image (main article image or subsection image).
 */
export const getBlogImageUrl = (
    blogId: number,
    imageType: 'main' | 'subsection',
    index: number = 0
): string => {
    if (imageType === 'main') {
        return `/assets/img/blog/bg_${blogId}/${blogId}-${index + 1}.webp`;
    }
    if (imageType === 'subsection') {
        return `/assets/img/blog/bg_${blogId}/sb-${index}.webp`;
    }
    return `/assets/img/blog/default-thumbnail.webp`;
};

/**
 * Returns the absolute URL for social sharing (Open Graph / Twitter cards).
 */
export const getBlogSocialImageUrl = (blogId: number): string => {
    return `${SITE_CONFIG.url}/assets/img/blog/bg_${blogId}/${blogId}-1.webp`;
};
