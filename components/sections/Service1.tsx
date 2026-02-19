'use client'
import Link from "next/link"
import { useState } from 'react'
import Image from "next/image"
import servicesData from "../../util/services.json"

export default function Service1() {
    const [services] = useState(servicesData)
    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <section className="service-area pt-60 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section__title mb-0">
                                <h2 className="title wow img-custom-anim-left">WHAT WE CAN DO FOR OUR CLIENTS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30">
                        <div className="col-lg-5 wow img-custom-anim-left">
                            <div id="tabs-content">
                                {services.slice(0, 5).map((service, index) => (
                                    <div
                                        key={service.id}
                                        id={`tab${index + 1}`}
                                        className="service1-tab-content"
                                        style={{ display: activeTab === index ? 'block' : 'none' }}
                                    >
                                        <div className="service-thumb" style={{ paddingTop: '0', marginTop: '10px' }}>
                                            <Image
                                                src={`/assets/img/service/${service.img}`}
                                                alt={service.title}
                                                width={500}
                                                height={300}
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-7 pt-30">
                            <ul className="service1-tab-wrap" id="tabs-nav">
                                {services.slice(0, 5).map((service, index) => (
                                    <li
                                        key={service.id}
                                        className={activeTab === index ? 'active' : ''}
                                        onMouseEnter={() => setActiveTab(index)}
                                    >
                                        <div className="service1-tab-item">
                                            <Link className="service1-tab-single" href={`/service-details/${service.slug}`}>
                                                {service.title}
                                                {service.title === "AI Agents & Automation" && <span>(coming soon)</span>}
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}