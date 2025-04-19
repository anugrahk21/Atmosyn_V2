import Layout from "@/components/layout/Layout"
import Link from "next/link"
import servicesData from "@/util/services.json"
import { generateDynamicMetadata, generateJsonLd } from "@/util/metadata"
import type { Metadata } from 'next'
import Script from 'next/script'
import FeatureImage from "@/components/elements/FeatureImage"

// This tells Next.js to pre-render all the service detail pages at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

// This makes the page static instead of dynamic
export const dynamicParams = false

// Generate dynamic metadata for this service
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = servicesData.find((service) => service.slug === params.slug)
    
    // Use our utility to generate metadata for this specific service
    return generateDynamicMetadata(service, 'service')
}

interface ServiceItem {
    id: number
    title: string
    slug: string
    number: string
    img: string
    excerpt: string
    content: string
    features: string[]
}

// Format the content with proper paragraph breaks
const formatContent = (content: string) => {
    if (!content) return [];
    return content.split('\n\n').filter(paragraph => paragraph.trim() !== '');
};

export default function ServiceDetails({ params }: { params: { slug: string } }) {    const slug = params.slug;
    
    // Find the service with the matching slug
    const service = servicesData.find((item: ServiceItem) => item.slug === slug);
      // Get related services based on the current service and display a more varied selection
    // First, get all services except the current one
    const allOtherServices = service 
        ? servicesData.filter(item => item.slug !== slug)
        : servicesData;
    
    // Shuffle the array to get a random selection each time
    const shuffledServices = [...allOtherServices].sort(() => 0.5 - Math.random());
    
    // Take the first 2 services from the shuffled array
    const otherServices = shuffledServices.slice(0, 2);
    
    // Generate JSON-LD structured data for this service
    const serviceJsonLd = generateJsonLd('service', service);
    
    // If no service is found, show an error state
    if (!service) {
        return (
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Services Details">
                <section className="service-details-page-area pt-110">
                    <div className="container">
                        <p>Service not found</p>
                    </div>
                </section>
            </Layout>
        )
    }

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Services Details">
                {/* Add JSON-LD structured data */}
                <Script
                    id="service-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
                />
                  <div>
                    <div className="service-details-page-area pt-110 pb-50">
                        <div className="container">
                            {/* Section 1: Service Title and Highlight Features */}
                            <div className="row align-items-center justify-content-between mb-60">
                                <div className="col-xl-6">
                                    <div className="section__title mb-30">
                                        <h2 className="title">{service.title.toUpperCase()}</h2>
                                        <p className="sec-text mt-3">{service.excerpt}</p>
                                    </div>
                                </div>                                <div className="col-xl-5">
                                    <div className="service-highlight-card">
                                        <h4 className="service-card-title">Key Features</h4>
                                        <ul className="service-feature-list">
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="d-flex align-items-center mb-2">
                                                    <img src="/assets/img/icon/check-circle2.svg" alt="check" className="me-2" width="20" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                              {/* Section 2: Overview with Image and Content Card */}
                            <div className="service-overview-section mb-80">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-6">
                                        <img 
                                            className="img-fluid w-100 rounded-4" 
                                            src={`/assets/img/service/${service.img}`}
                                            alt={service.title}
                                        />
                                    </div>                                    <div className="col-lg-6">
                                        <div className="service-content-card">
                                            <h3 className="card-title">
                                                {service.title} Overview
                                            </h3>
                                            <div className="content-wrapper">
                                                {formatContent(service.content).map((paragraph, index) => (
                                                    <p key={index} className={index === formatContent(service.content).length-1 ? "mb-0" : "mb-4"}>{paragraph}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            {/* Section 3: Approach with Feature Cards */}
                            <div className="service-approach-section mb-60">
                                <div className="row justify-content-center mb-4">
                                    <div className="col-12">
                                        <div className="section__title text-center mb-30">
                                            <h2 className="title">Our {service.title} Approach</h2>
                                            <p className="sec-text mt-3">We provide comprehensive {service.title.toLowerCase()} services tailored to your specific needs and goals.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row g-4">                                    {service.features.map((feature, index) => (
  <div key={index} className="col-md-6 col-lg-4">
    <div
      className="service-approach-card fade-in-top-seq"
      style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
    >      <div className="card-image">
        <FeatureImage 
          serviceSlug={service.slug} 
          index={index} 
          feature={feature} 
        />
      </div>
      <h4 className="service-card-title">{feature}</h4>
    </div>
  </div>
))}

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*======== / Service Details Area ========*/}
                    
                    {/*==============================
    View Projects Area
    ==============================*/}
                    <section className="pt-110 pb-110 black-bg position-relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className="section__title mb-30 wow img-custom-anim-left">
                                        <h2 className="title text-white">SEE HOW WE IMPLEMENT {service.title.toUpperCase()} IN REAL PROJECTS</h2>
                                        <p className="sec-text text-white mt-30">Explore our portfolio to see how we've helped businesses achieve remarkable results through our {service.title.toLowerCase()} solutions.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-lg-end">
                                    <Link href="/project" className="btn btn-outline-white square-btn">
                                        VIEW ALL PROJECTS
                                        <i className="icon-arrow-top-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / View Projects Area ========*/}

                    {/*==============================
    Project Area 03
    ==============================*/}                    <section className="project-area-3 pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-50 text-center">
                                <h2 className="title">Other Services</h2>
                            </div>
                            <div className="row gy-60 justify-content-between masonary-active">
                                {otherServices.map((otherService, index) => (
                                    <div key={index} className="col-lg-6 filter-item">
                                        <div className={`project-card-item8 ${index === 1 ? 'mt-lg-200' : ''} shine-animate-item wow img-custom-anim-${index === 0 ? 'top' : 'right'}`}>
                                            <div className="project-card-thumb">
                                                <Link className="shine-animate" href={`/service-details/${otherService.slug}`}>
                                                    <img className="w-100" src={`/assets/img/service/${otherService.img}`} alt={otherService.title} />
                                                </Link>
                                            </div>
                                            <div className="project-card-content">
                                                <h4 className="project-card-title">
                                                    <Link href={`/service-details/${otherService.slug}`}>
                                                        {otherService.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}