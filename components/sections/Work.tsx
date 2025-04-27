'use client'
import { useState } from "react"
import Link from "next/link"
import projectsData from "@/util/projects.json"
import ProjectModal from "@/components/project/ProjectModal"

export default function Work() {
    // Use the first and second projects from our projects data
    const featuredProject1 = projectsData[0]; // Web Application Dashboard
    const featuredProject2 = projectsData[1]; // E-commerce Platform
    
    // State for the project modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

    // Open the modal with the selected project
    const openProjectModal = (projectId: number) => {
        setSelectedProjectId(projectId)
        setIsModalOpen(true)
    }

    // Close the modal
    const closeProjectModal = () => {
        setIsModalOpen(false)
        setTimeout(() => {
            setSelectedProjectId(null)
        }, 300) // Give time for the close animation
    }
    
    return (
        <>
            <section className="work-area pt-120 pb-80 dark-bg">
                <div className="container">
                    <div className="work-wrap-header">
                        <div className="work-thumb-wrap">
                            <div className="work-group-thumb wow img-custom-anim-top">
                                <div className="thumb">
                                    <img src="/assets/img/others/group-img-1-1.jpg" alt="img" />
                                </div>
                                <div className="thumb">
                                    <img src="/assets/img/others/group-img-1-2.jpg" alt="img" />
                                </div>
                                <div className="thumb">
                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="work-counter-wrap wow img-custom-anim-left">
                                <span className="counter-number">100%</span> Client Satisfaction
                            </div>
                        </div>
                        <h3 className="work-wrap-text wow img-custom-anim-right">
                            Creative solutions for impactful digital experiences.
                        </h3>
                    </div>
                    <div className="pt-0 pb-120">
                        <div className="row gy-40 align-items-center">
                            <div 
                                className="col-lg-6 wow img-custom-anim-left cursor-pointer" 
                                onClick={() => openProjectModal(featuredProject1.id)}
                            >
                                <div className="work-img-wrap1">
                                    <img src={`/assets/img/project/${featuredProject1.img}`} alt={featuredProject1.title} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="work-wrap-details wow img-custom-anim-left">
                                    <div className="section__title mb-40">
                                        <h2 className="title text-white">{featuredProject1.title}</h2>
                                        <p className="sec-text text-white">{featuredProject1.description}</p>
                                    </div>
                                    <div className="blog__post-meta">
                                        <ul className="list-wrap">
                                            {featuredProject1.services.map((service, index) => (
                                                <li key={index}><span className="text-white">{service.toUpperCase()}</span></li>
                                            ))}
                                            <li><span className="text-white">{featuredProject1.client}</span></li>
                                        </ul>
                                    </div>
                                    <div className="tg-button-wrap mt-70">
                                        <div 
                                            className="link-btn cursor-pointer" 
                                            onClick={() => openProjectModal(featuredProject1.id)}
                                        >
                                            View Project
                                            <i className="icon-arrow-top-left" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 align-items-center flex-row-reverse">
                        <div 
                            className="col-xl-5 col-lg-6 wow img-custom-anim-right cursor-pointer"
                            onClick={() => openProjectModal(featuredProject2.id)}
                        >
                            <div className="work-img-wrap1">
                                <img src={`/assets/img/project/${featuredProject2.img}`} alt={featuredProject2.title} />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="work-wrap-details wow img-custom-anim-right ">
                                <div className="section__title mb-40">
                                    <h2 className="title text-white">{featuredProject2.title}</h2>
                                    <p className="sec-text text-white">{featuredProject2.description}</p>
                                </div>
                                <div className="blog__post-meta">
                                    <ul className="list-wrap">
                                        {featuredProject2.services.map((service, index) => (
                                            <li key={index}><span className="text-white">{service.toUpperCase()}</span></li>
                                        ))}
                                        <li><span className="text-white">{featuredProject2.client}</span></li>
                                    </ul>
                                </div>
                                <div className="tg-button-wrap mt-70">
                                    <div 
                                        className="link-btn cursor-pointer"
                                        onClick={() => openProjectModal(featuredProject2.id)}
                                    >
                                        View Project
                                        <i className="icon-arrow-top-left" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tg-button-wrap mt-80 justify-content-center">
                        <Link href="/project" className="btn big-circle-btn style2 gsap-magnetic">
                            VIEW ALL
                        </Link>
                    </div>
                </div>
            </section>

            {/* Project Modal Component */}
            <ProjectModal 
                isOpen={isModalOpen}
                closeModal={closeProjectModal}
                projectId={selectedProjectId}
            />
        </>
    )
}
