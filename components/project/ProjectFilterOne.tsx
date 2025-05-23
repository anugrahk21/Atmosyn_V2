'use client'
import { useCallback, useEffect, useRef, useState } from "react"
import projectsData from "@/util/projects.json"
import ProjectModal from "@/components/project/ProjectModal"

interface IsotopeInstance {
    arrange(options: { filter: string }): void
}

export default function ProjectFilterOne() {
    const isotope = useRef<IsotopeInstance | null>(null) // Define the type for isotope ref
    const [filterKey, setFilterKey] = useState<string>("*")
    // State for the project modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
    // State to track if any projects match the current filter
    const [noProjectsFound, setNoProjectsFound] = useState<boolean>(false)

    useEffect(() => {
        // Only run on the client side
        if (typeof window !== 'undefined') {
            // Dynamically import Isotope only on client side
            import('isotope-layout').then(IsotopeModule => {
                const Isotope = IsotopeModule.default;
                
                // Shorter timeout for faster initialization
                setTimeout(() => {
                    if (isotope.current === null) {
                        isotope.current = new Isotope(".masonary-active", {
                            itemSelector: ".filter-item",
                            percentPosition: true,
                            masonry: {
                                columnWidth: ".filter-item",
                            }
                        })
                    }
                }, 1000)
            });
        }
    }, [])

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
            
            // After filtering, check if any projects are visible or less than 3
            setTimeout(() => {
                if (filterKey === "*") {
                    setNoProjectsFound(projectsData.length < 3);
                } else {
                    const matchingProjects = projectsData.filter(project => 
                        project.services.some(service => 
                            service.toLowerCase().replace(/\s+/g, '') === filterKey
                        )
                    );
                    setNoProjectsFound(matchingProjects.length < 3);
                }
            }, 300);
        }
    }, [filterKey])

    const handleFilterKeyChange = useCallback((key: string) => () => {
        setFilterKey(key)
    }, [])

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

    const activeBtn = (value: string) => (value === filterKey ? "active" : "")

    // Add inline styles for active filter buttons to make highlighting more prominent
    const getButtonStyle = (value: string) => {
        if (value === filterKey) {
            return {
                color: 'var(--tg-theme-primary)',
                fontWeight: '500'
            };
        }
        return {};
    };

    return (
        <>
            <section className="project-area-3 pt-60 pb-120 overflow-hidden">
                <div className="container">
                    <div className="section__title mb-50 text-center">
                        <div className="portfolio-tab-menu filter-menu-active">
                            <span className="portfolio-tab-menu-title">FILTER BY :</span>
                            <button className={`filter-btn ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")} style={getButtonStyle("*")}>All</button>
                            <button className={`filter-btn ${activeBtn("development")}`} onClick={handleFilterKeyChange("development")} style={getButtonStyle("development")}>Web Dev</button>
                            <button className={`filter-btn ${activeBtn("ai")}`} onClick={handleFilterKeyChange("ai")} style={getButtonStyle("ai")}>AI</button>
                            <button className={`filter-btn ${activeBtn("design")}`} onClick={handleFilterKeyChange("design")} style={getButtonStyle("design")}>Design</button>
                            <button className={`filter-btn ${activeBtn("branding")}`} onClick={handleFilterKeyChange("branding")} style={getButtonStyle("branding")}>Brand</button>
                            <button className={`filter-btn ${activeBtn("marketing")}`} onClick={handleFilterKeyChange("marketing")} style={getButtonStyle("marketing")}>Marketing</button>
                        </div>
                    </div>
                    
                    {/* Dynamic project cards from projects.json */}
                    <div className="row gy-60 gx-60 justify-content-between masonary-active">
                        {projectsData.map((project, index) => (
                            <div 
                                key={project.id} 
                                className={`col-lg-6 filter-item ${project.services.map(service => service.toLowerCase().replace(/\s+/g, '')).join(' ')}`}
                            >
                                <div className={`project-card-item8 ${index % 2 === 1 && index < 3 ? 'mt-lg-200' : ''} shine-animate-item`}>
                                    <div className="project-card-thumb">
                                        <div 
                                            className="shine-animate cursor-pointer" 
                                            onClick={() => openProjectModal(project.id)}
                                        >
                                            <img className="w-100" src={`/assets/img/project/${project.img}`} alt={project.title} />
                                        </div>
                                    </div>
                                    <div className="project-card-content mt-30">
                                        <h3>
                                            <div 
                                                className="cursor-pointer" 
                                                onClick={() => openProjectModal(project.id)}
                                            >
                                                {project.title}
                                            </div>
                                        </h3>
                                        <p className="project-card-text">{project.services[0]}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* No projects found message */}
                    {noProjectsFound && (
                        <div className="text-center py-80">
                            <div className="no-projects-found pt-50">
                                <img 
                                    src="assets/img/others/maintenance.svg" 
                                    alt="Under Development" 
                                    style={{height: '320px', marginBottom: '80px'}}
                                    onError={(e) => {
                                        // Fallback if image doesn't exist
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <h3 className="mb-20">More Projects Coming Soon</h3>
                                <p className="sec-text">We're currently developing exciting new projects in this category for our clients.</p>
                                <p className="sec-text mt-10">Check back later or explore our other categories!</p>
                            </div>
                        </div>
                    )}
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
