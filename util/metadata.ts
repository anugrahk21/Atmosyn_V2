import { Metadata } from 'next';

/**
 * Generates default fallback metadata for Atmosyn pages
 * @returns Metadata object with default values
 */
export const getDefaultMetadata = (): Metadata => {
  return {
    title: 'ATMOSYN | Innovative Digital Agency',
    description: 'ATMOSYN specializes in web development, UX/UI design, brand identity, and marketing. Elevate your brand with Atmosyn.',
    keywords: ['digital agency', 'web development', 'UI/UX design', 'brand identity', 'marketing', 'SEO', 'Atmosyn'],
    openGraph: {
      title: 'ATMOSYN | Innovative Digital Agency',
      description: 'ATMOSYN specializes in web development, UX/UI design, brand identity, and marketing. Elevate your brand with Atmosyn.',
      url: 'https://atmosyn.com',
      siteName: 'ATMOSYN',      images: [
        {
          url: 'https://atmosyn.com/assets/img/logo/logomain.svg',
          width: 1200,
          height: 630,
          alt: 'ATMOSYN Digital Agency',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },    twitter: {
      card: 'summary_large_image',
      title: 'ATMOSYN | Innovative Digital Agency',
      description: 'ATMOSYN specializes in web development, UX/UI design, brand identity, and marketing. Elevate your brand with Atmosyn.',
      images: ['https://atmosyn.com/assets/img/logo/logomain.svg'],
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
  } = pageInfo;  // Create a simpler, more compact meta title format
  // If the page name is already ATMOSYN (for homepage), just use a single title
  const metaTitle = pageName === 'ATMOSYN' 
    ? 'ATMOSYN - Next-Gen Digital Agency'
    : `${pageName} | ATMOSYN`;
  
  // Create meta description following the specified format
  const metaDescription = 
    description || 
    `${shortInfo || title}. Atmosyn merges innovative design with strategic insights to create engaging digital experiences. Learn more about ${specificTopic}.`;

  // Create merged keywords with default SEO terms
  const metaKeywords = [
    ...keywords, 
    'digital agency', 
    'web development', 
    'UI/UX design', 
    'Atmosyn', 
    specificTopic.toLowerCase()
  ];
  // Create the image URL
  const imageUrl = image || 'https://atmosyn.com/assets/img/logo/logomain.svg';

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    openGraph: {
      title: metaTitle,
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
      title: metaTitle,
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
  if (type === 'blog') {
    pageTitle = content.title;
    shortInfo = 'ATMOSYN Blog';
    description = content.excerpt || 'Insights from Atmosyn digital experts';
    // Select the main image for social sharing if img is an array
    if (Array.isArray(content.img)) {
      // Try to find the main image first, fall back to first image if not found
      const mainImage = content.img.find((img: string) => img.includes('main')) || content.img[0];
      imagePath = `/assets/img/blog/${mainImage}`;
    } else {
      imagePath = `/assets/img/blog/${content.img}`;
    }
    specificTopic = content.category || 'digital marketing trends';
    keywords = [
      content.category?.toLowerCase() || 'blog',
      'digital insights',
      content.title.toLowerCase().split(' ').slice(0, 3).join(' '),
      'industry trends'
    ];
  } else if (type === 'service') {
    pageTitle = content.title;
    shortInfo = 'Innovative Digital Solutions';
    description = content.excerpt || `Professional ${content.title} services from Atmosyn`;
    imagePath = `/assets/img/service/${content.img}`;
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
    imagePath = `/assets/img/project/${content.img}`;
    specificTopic = content.category || 'project showcase';
    keywords = [
      content.category?.toLowerCase() || 'case study',
      'project portfolio',
      content.title.toLowerCase().split(' ').slice(0, 3).join(' '),
      'client success'
    ];
  }

  return generateStaticMetadata({
    title: pageTitle,
    pageName: pageTitle,
    shortInfo: shortInfo,
    description: `${description}. Atmosyn merges innovative design with strategic insights to create engaging digital experiences. Learn more about ${specificTopic}.`,
    specificTopic: specificTopic,
    image: imagePath,
    keywords: keywords,
  });
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
    "description": "Atmosyn is a cutting-edge digital agency specializing in web development, UX/UI and graphic design, brand identity, and marketing & SEO.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-123-456-7890",
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
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title,
      "description": data.excerpt || "Insights from Atmosyn digital experts",
      "image": `https://atmosyn.com/assets/img/blog/${data.img}`,
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
      "keywords": [
        data.category || "Digital Marketing",
        "Atmosyn Blog", 
        "Digital Agency"
      ]
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
      "image": `https://atmosyn.com/assets/img/service/${data.img}`,
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
      "image": `https://atmosyn.com/assets/img/project/${data.img}`,
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
