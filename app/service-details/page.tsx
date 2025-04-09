'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import servicesData from "@/util/services.json"

interface ServiceItem {
    id: number
    title: string
    number: string
    img: string
    excerpt: string
    content: string
    features: string[]
}

export default function ServiceDetails() {
    const searchParams = useSearchParams()
    const [service, setService] = useState<ServiceItem | null>(null)
    const [otherServices, setOtherServices] = useState<ServiceItem[]>([])
    const id = searchParams?.get('id') || '1' // Default to first service if no ID provided

    useEffect(() => {
        if (id) {
            const currentIndex = servicesData.findIndex((item: ServiceItem) => String(item.id) === String(id))
            
            if (currentIndex !== -1) {
                setService(servicesData[currentIndex])
                
                // Get other services (excluding current one)
                const others = servicesData
                    .filter(item => item.id !== servicesData[currentIndex].id)
                    .slice(0, 2) // Just get 2 other services for "Other Services" section
                
                setOtherServices(others)
            }
        } else {
            // If no ID provided, show the first service by default
            if (servicesData.length > 0) {
                setService(servicesData[0])
                setOtherServices(servicesData.slice(1, 3))
            }
        }
    }, [id])

    // Format the content with proper paragraph breaks
    const formatContent = (content: string) => {
        if (!content) return [];
        return content.split('\n\n').filter(paragraph => paragraph.trim() !== '');
    };

    // If no service is found, show a loading state
    if (!service) {
        return (
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Services Details">
                <section className="service-details-page-area pt-110">
                    <div className="container">
                        <p>Loading...</p>
                    </div>
                </section>
            </Layout>
        )
    }

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Services Details">
                <div>
                    <div className="service-details-page-area pt-110 ">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-6">
                                    <div className="section__title mb-50">
                                        <h2 className="title">{service.title}</h2>
                                        <p className="sec-text">{service.excerpt}</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Product Design</h4>
                                        <ul>
                                            {service.features.map((feature, index) => (
                                                <li key={index}><img src="/assets/img/icon/arrow-left.svg" alt="img" /> {feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100" src={`/assets/img/service/${service.img}`} alt={service.title} />
                                <h3 className="page-title mt-60 mb-30">{service.title} Overview</h3>
                                {formatContent(service.content).map((paragraph, index) => (
                                    <p key={index} className="mb-30">{paragraph}</p>
                                ))}
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
                                    <img className="w-100" src="/assets/img/service/service-details-1-2.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*======== / Service Details Area ========*/}
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
                                                <Link className="shine-animate" href={`/service-details?id=${otherService.id}`}>
                                                    <img className="w-100" src={`/assets/img/service/${otherService.img}`} alt={otherService.title} />
                                                </Link>
                                            </div>
                                            <div className="project-card-content">
                                                <h4 className="project-card-title"><Link href={`/service-details?id=${otherService.id}`}>{otherService.title}</Link></h4>
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