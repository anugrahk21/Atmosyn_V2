import Layout from "@/components/layout/Layout"
import Link from "next/link"
import servicesData from "@/util/services.json"
import { generateDynamicMetadata, generateJsonLd } from "@/util/metadata"
import type { Metadata } from 'next'
import Script from 'next/script'

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
                    <div className="service-details-page-area pt-110 ">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-6">
                                    <div className="section__title mb-50">
                                        <h2 className="title">{service.title.toUpperCase()}</h2>
                                        <p className="sec-text">{service.excerpt}</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">{service.title}</h4>
                                        <ul>
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <li key={index}><img src="/assets/img/icon/arrow-left.svg" alt="img" /> {feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-60">
                                <div className="row gy-40 align-items-center">
                                    <div className="col-lg-6">
                                        <img className="img-fluid rounded" src={`/assets/img/service/${service.img}`} alt={service.title} />
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="page-title mb-30">{service.title} Overview</h3>
                                        {formatContent(service.content).map((paragraph, index) => (
                                            <p key={index} className={index === formatContent(service.content).length-1 ? "mb-0" : "mb-20"}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">Our {service.title} Approach</h3>
                                    <p className="mb-30">We provide comprehensive {service.title.toLowerCase()} services tailored to your specific needs and goals.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            {service.features.map((feature, index) => (
                                                <li key={index}><img src="/assets/img/icon/check-circle2.svg" alt="img" /> {feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100" src="/assets/img/service/service-details-1-2.jpg" alt={service.title} />
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
    ==============================*/}
                    <section className="project-area-3 pt-110 pb-120 overflow-hidden">
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