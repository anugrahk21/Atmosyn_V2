import Layout from "@/components/layout/Layout"
import Link from "next/link"
import projects from "@/util/projects.json"
import { generateDynamicMetadata, generateJsonLd } from "@/util/metadata"
import type { Metadata } from 'next'
import Script from 'next/script'
import Marquee from "react-fast-marquee"

// This tells Next.js to pre-render all the project detail pages at build time
export async function generateStaticParams() {
  return projects.map((item) => ({
    id: String(item.id),
  }))
}

// This makes the page static instead of dynamic
export const dynamicParams = false

// Generate dynamic metadata for this project
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const project = projects.find((item) => String(item.id) === params.id)
    
    // Use our utility to generate metadata for this specific project
    return generateDynamicMetadata(project, 'project')
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
    const id = params.id;
    
    // Find the current project data
    const project = projects.find(project => String(project.id) === id);
    
    // Find previous and next projects for navigation
    const currentIndex = projects.findIndex(project => String(project.id) === id);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];
    
    // Generate JSON-LD structured data for this project
    const projectJsonLd = generateJsonLd('project', project);
    
    // If project not found, return a basic error state
    if (!project) {
        return (
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Portfolio Details">
                <div className="container py-5">
                    <h2>Project not found</h2>
                    <p>The requested project does not exist.</p>
                    <Link href="/project" className="btn btn-primary">Back to Projects</Link>
                </div>
            </Layout>
        )
    }

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Portfolio Details">
                {/* Add JSON-LD structured data */}
                <Script
                    id="project-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
                />
                
                <div>
                    <section className="project-details-page-area pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="section__title mb-30">
                                        <h2 className="title">{project.title}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details-info-wrap mb-60">
                                <div className="single-project-info">
                                    <h6 className="title">Description</h6>
                                    <p className="text">{project.description}</p>
                                </div>
                                <div className="single-project-info">
                                    <h6 className="title">Services</h6>
                                    {project.services.map((service, index) => (
                                        <p key={index} className="text">{service}</p>
                                    ))}
                                </div>
                                <div className="single-project-info">
                                    <h6 className="title">Client</h6>
                                    <p className="text">{project.client}</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid p-0">
                            <div className="project-thumb mb-60">
                                <img className="w-100" src={`/assets/img/project/${project.detailsImg}`} alt={project.title} />
                            </div>
                        </div>
                        <div className="pb-115">
                            <div className="container">
                                <h3 className="page-title mb-30">Project details</h3>
                                <p className="mb-40">{project.projectDetails}</p>
                                <div className="row gy-40">
                                    <div className="col-lg-6">
                                        <h3 className="page-title mb-30">Target Audience</h3>
                                        <p className="mb-0">{project.targetAudience}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="page-title mb-30">Creativity and Innovation</h3>
                                        <p className="mb-0">{project.creativityAndInnovation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid p-0">
                            <div className="row gy-30">
                                {project.additionalImages.map((img, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="project-thumb">
                                            <img className="w-100" src={`/assets/img/project/${img}`} alt={`${project.title} - image ${index+1}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-60">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-lg-7">
                                        <h3 className="page-title mb-30">The Solution</h3>
                                        <p className="mb-0">{project.solution}</p>
                                    </div>
                                </div>
                                <div className="inner__page-nav pt-115 mt-n1 mb-n1">                                    <Link href={`/project-details/${prevProject.id}`} className="nav-btn text-md-end">
                                        <div className="text-wrap mb-0">
                                            <i className="fa fa-arrow-left me-4" />
                                            <span>
                                                View Previous Project
                                            </span>
                                        </div>
                                    </Link>
                                    <Link href={`/project-details/${nextProject.id}`} className="nav-btn">
                                        <div className="text-wrap mb-0">
                                            <span>
                                                View Next Project
                                            </span>
                                            <i className="fa fa-arrow-right ms-4" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Project Section ========*/}
                    {/*==============================
    Marquee Area
    ==============================*/}
                    <div className="container-fluid px-0 overflow-hidden pb-30 pt-30 theme-bg">
                        <div className="slider__marquee clearfix marquee-wrap style3">
                            <Marquee className="marquee_mode marquee__group">
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-1.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-2.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-3.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-4.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-5.svg" alt="img" /></Link></div>
                                <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-6.svg" alt="img" /></Link></div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
