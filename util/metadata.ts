import { Metadata } from 'next';

/**
 * Generates default fallback metadata for Atmosyn pages
 * @returns Metadata object with default values
 */
export const getDefaultMetadata = (): Metadata => {
  // Define the absolute URL for the logo to ensure it works for social sharing
  const logoAbsoluteUrl = 'https://atmosyn.com/assets/img/logo/logo.png';
  
  // Using a consistent pipe format for better recognition by search engines
  return {
    title: 'ATMOSYN | Digital Agency for AI & Web Solutions',
    description: 'ATMOSYN delivers AI solutions, web development, UX/UI design, and brand identity services to elevate your digital presence.',
    keywords: ['digital agency', 'web development', 'UI/UX design', 'AI solutions', 'automation services', 'brand identity', 'marketing', 'SEO', 'Atmosyn'],
    openGraph: {
      title: 'ATMOSYN | Digital Agency for AI & Web Solutions',
      description: 'ATMOSYN delivers AI solutions, web development, UX/UI design, and brand identity services to elevate your digital presence.',
      url: 'https://atmosyn.com',
      siteName: 'ATMOSYN',
      images: [
        {
          url: logoAbsoluteUrl,
          width: 1200,
          height: 630,
          alt: 'ATMOSYN Digital Agency',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ATMOSYN | Digital Agency for AI & Web Solutions',
      description: 'ATMOSYN delivers AI solutions, web development, UX/UI design, and brand identity services to elevate your digital presence.',
      images: [logoAbsoluteUrl],
      creator: '@atmosyn',
    },
  };
};

/**
 * Interface for page metadata
 */
interface PageMetaInfo {
  title: string;
  description?: string;
  pageName?: string;
  pageType?: string;
  shortInfo?: string;
  specificTopic?: string;
  image?: string;
  keywords?: string[];
}

/**
 * Generates metadata for static pages
 * @param pageInfo Page metadata information
 * @returns Metadata object for the page
 */
export const generateStaticMetadata = (pageInfo: PageMetaInfo): Metadata => {
  const {
    title,
    description,
    pageName = title,
    shortInfo = '',
    specificTopic = title,
    image,
    keywords = [],
  } = pageInfo;
  
  // Create a consistent title format that's under 60 chars
  // Always use the pipe format for SEO consistency and readability
  const metaTitle = pageName === 'ATMOSYN' 
    ? 'ATMOSYN | Digital Agency for AI & Web Solutions' 
    : `${pageName} | ATMOSYN`;
  
  // Trim description to optimal SEO length (between 120-155 chars)
  let metaDescription = description || 
    `${shortInfo || title}. Atmosyn creates engaging digital experiences with ${specificTopic}.`;
  
  // Ensure description is within optimal length range
  if (metaDescription.length > 155) {
    metaDescription = metaDescription.substring(0, 152) + '...';
  }

  // Create merged keywords with default SEO terms
  const metaKeywords = [
    ...keywords, 
    'digital agency', 
    'web development', 
    'UI/UX design', 
    'AI solutions',
    'automation services',
    'Atmosyn', 
    specificTopic.toLowerCase()
  ];
  
  // Always use absolute URL for image with https protocol
  let imageUrl = image || 'https://atmosyn.com/assets/img/logo/logo.png';
  
  // Ensure URL starts with https:// for social media crawlers
  if (!imageUrl.startsWith('http')) {
    imageUrl = `https://atmosyn.com${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  }

  // Verify image URL is valid and accessible
  // If image is from our domain but path is incorrect, fallback to logo
  if (imageUrl.includes('atmosyn.com') && 
      !imageUrl.endsWith('.jpg') && 
      !imageUrl.endsWith('.jpeg') && 
      !imageUrl.endsWith('.png') && 
      !imageUrl.endsWith('.svg')) {
    console.warn(`Warning: Image URL format may be invalid: ${imageUrl}`);
    imageUrl = 'https://atmosyn.com/assets/img/logo/logo.png';
  }

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    openGraph: {
      title: metaTitle, // Use exact same title as HTML title
      description: metaDescription,
      url: 'https://atmosyn.com',
      siteName: 'ATMOSYN',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageName,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle, // Use exact same title as HTML title
      description: metaDescription,
      images: [imageUrl],
      creator: '@atmosyn',
    },
  };
};

/**
 * Generates dynamic metadata for blog posts and service pages
 * @param content The blog post or service content
 * @param type The type of content ('blog' or 'service')
 * @returns Metadata object for the page
 */
export const generateDynamicMetadata = (content: any, type: 'blog' | 'service' | 'project'): Metadata => {
  // Default metadata in case of missing content
  if (!content) {
    return getDefaultMetadata();
  }

  let pageTitle = '';
  let shortInfo = '';
  let description = '';
  let imagePath = '';
  let specificTopic = '';
  let keywords: string[] = [];
  
  // Default logo image for non-blog pages
  const defaultLogoImage = 'https://atmosyn.com/assets/img/logo/logo.png';
  
  if (type === 'blog') {
    pageTitle = content.title;
    shortInfo = 'ATMOSYN Blog';
    description = content.excerpt || 'Insights from Atmosyn digital experts';
    
    // First check if a specific socialImage is provided
    if (content.socialImage) {
      // Use the pre-generated social image URL
      imagePath = content.socialImage;
    }
    // If no specific social image, generate from ID or img property
    else if (content.id) {
      // Generate absolute image URL for better social sharing
      imagePath = `https://atmosyn.com/assets/img/blog/bg_${content.id}/${content.id}-1.png`;
    } else if (Array.isArray(content.img)) {
      // Try to find the main image first, fall back to first image if not found
      const mainImage = content.img.find((img: string) => img.includes('main')) || content.img[0];
      imagePath = `https://atmosyn.com/assets/img/blog/${mainImage}`;
    } else {
      // Handle string case
      imagePath = `https://atmosyn.com/assets/img/blog/${content.img}`;
    }
    
    // If there's any issue with the blog image path, use the default logo
    if (!imagePath || imagePath.includes('undefined')) {
      imagePath = defaultLogoImage;
    }
    
    specificTopic = content.category || 'digital marketing trends';
    keywords = [
      content.category?.toLowerCase() || 'blog',
      'digital insights',
      content.title.toLowerCase().split(' ').slice(0, 3).join(' '),
      'industry trends'
    ];
    
    // Add tags as keywords if available
    if (content.tags && Array.isArray(content.tags)) {
      content.tags.slice(0, 5).forEach((tag: string) => keywords.push(tag));
    }
    
  } else if (type === 'service') {
    pageTitle = content.title;
    shortInfo = 'Digital Services';
    description = content.excerpt || `${content.title} services optimized for your business needs`;
    // Use default logo for service pages
    imagePath = defaultLogoImage;
    specificTopic = content.title;
    keywords = [
      content.title.toLowerCase(),
      'digital services',
      'professional solutions',
      ...content.features?.slice(0, 3).map((f: string) => f.toLowerCase().split(' ').slice(0, 2).join(' ')) || []
    ];
  } else if (type === 'project') {
    pageTitle = content.title;
    shortInfo = 'Case Study';
    description = content.excerpt || 'Case study showcasing Atmosyn\'s digital expertise';
    // Use default logo for project pages
    imagePath = defaultLogoImage;
    specificTopic = content.category || 'project showcase';
    keywords = [
      content.category?.toLowerCase() || 'case study',
      'project portfolio',
      content.title.toLowerCase().split(' ').slice(0, 3).join(' '),
      'client success'
    ];
  }

  // Create a consistent title format that's under 60 chars for SEO
  const metaTitle = `${pageTitle} | ATMOSYN`;
  
  // Trim description to optimal SEO length
  let metaDescription = description || 
    `${shortInfo}. Atmosyn delivers ${specificTopic} solutions with proven results.`;
    
  // Ensure description is within optimal length range
  if (metaDescription.length > 155) {
    metaDescription = metaDescription.substring(0, 152) + '...';
  }

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: type === 'blog' 
        ? `https://atmosyn.com/blog/${content.id}` 
        : type === 'service'
        ? `https://atmosyn.com/service-details/${content.slug}`
        : 'https://atmosyn.com',
      siteName: 'ATMOSYN',
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'en_US',
      type: type === 'blog' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [imagePath],
      creator: '@atmosyn',
    },
  };
};

/**
 * Generates JSON-LD structured data for SEO
 * @param type The type of content ('blog', 'service', 'organization', etc.)
 * @param data The content data
 * @returns JSON-LD structured data object
 */
export const generateJsonLd = (type: string, data?: any) => {
  // Organization schema (for homepage and as base for other pages)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://atmosyn.com/#organization",
    "name": "Atmosyn",
    "url": "https://atmosyn.com",
    "logo": "https://atmosyn.com/assets/img/logo/logo.png",
    "sameAs": [
      "https://www.facebook.com/atmosyn",
      "https://twitter.com/atmosyn",
      "https://www.linkedin.com/company/atmosyn",
      "https://www.instagram.com/atmosyn/"
    ],
    "description": "Atmosyn is a cutting-edge digital agency specializing in web development, UX/UI and graphic design, AI solutions, automation services, brand identity, and marketing & SEO.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "919539694902",
      "contactType": "customer service",
      "email": "info@atmosyn.com"
    }
  };
  
  // Default to organization schema
  if (type === 'organization' || !data) {
    return orgSchema;
  }

  // Blog post schema
  if (type === 'blog') {
    // Prepare image URL with the correct format
    let imageUrl = '';
    
    // First check if a specific socialImage is provided
    if (data.socialImage) {
      // Use the pre-generated social image URL
      imageUrl = data.socialImage;
    }
    // If no specific social image, generate from ID or img property
    else if (data.id) {
      // Use the new folder structure for blog images with consistent extension
      imageUrl = `https://atmosyn.com/assets/img/blog/bg_${data.id}/${data.id}-1.png`;
    } else if (Array.isArray(data.img)) {
      // Try to find the main image first, fall back to first image
      const mainImage = data.img.find((img: string) => img.includes('main')) || data.img[0];
      imageUrl = `https://atmosyn.com/assets/img/blog/${mainImage}`;
    } else {
      // Handle string case
      imageUrl = `https://atmosyn.com/assets/img/blog/${data.img}`;
    }

    // Get keywords from tags if available
    const keywords = [
      data.category || "Digital Marketing",
      "Atmosyn Blog", 
      "Digital Agency"
    ];
    
    // Add tags if they exist
    if (data.tags && Array.isArray(data.tags)) {
      data.tags.slice(0, 5).forEach((tag: string) => keywords.push(tag));
    }
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title,
      "description": data.excerpt || "Insights from Atmosyn digital experts",
      "image": imageUrl,
      "datePublished": data.date,
      "dateModified": data.date,
      "author": {
        "@type": "Person",
        "name": data.author || "Atmosyn Team"
      },
      "publisher": orgSchema,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://atmosyn.com/blog/${data.id}`
      },
      "keywords": keywords
    };
  }

  // Service schema
  if (type === 'service') {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": data.title,
      "provider": orgSchema,
      "description": data.excerpt || `Professional ${data.title} services from Atmosyn`,
      "name": data.title,
      "alternateName": `${data.title} | ATMOSYN`,
      "image": "https://atmosyn.com/assets/img/logo/logo.png",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://atmosyn.com/service-details/${data.slug}`
      }
    };
  }
  
  // Project/case study schema
  if (type === 'project') {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": data.title,
      "description": data.excerpt || "Case study showcasing Atmosyn's digital expertise",
      "image": "https://atmosyn.com/assets/img/logo/logo.png",
      "creator": orgSchema,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://atmosyn.com/project-details/${data.id}`
      }
    };
  }

  // Default to organization schema if no matching type
  return orgSchema;
};
