import Link from "next/link"
import projectsData from "@/util/projects.json"

export default function Work() {
    // Use the first and second projects from our projects data
    const featuredProject1 = projectsData[0]; // Web Application Dashboard
    const featuredProject2 = projectsData[1]; // E-commerce Platform
    
    return (
        <>
            <section className="work-area pt-120 pb-120 dark-bg">
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
                    <div className="pt-100 pb-120">
                        <div className="row gy-40 align-items-center">
                            <div className="col-lg-6 wow img-custom-anim-left">
                                <div className="work-img-wrap1">
                                    <img src={`/assets/img/project/${featuredProject1.img}`} alt={featuredProject1.title} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="work-wrap-details wow img-custom-anim-left ">
                                    <div className="section__title mb-40">
                                        <h2 className="title text-white">{featuredProject1.title}</h2>
                                        <p className="sec-text text-white">{featuredProject1.description}</p>
                                    </div>
                                    <div className="blog__post-meta">
                                        <ul className="list-wrap">
                                            {featuredProject1.services.map((service, index) => (
                                                <li key={index}><Link href={`/project-details/${featuredProject1.id}`}>{service.toUpperCase()}</Link></li>
                                            ))}
                                            <li><Link href={`/project-details/${featuredProject1.id}`}>{featuredProject1.client}</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tg-button-wrap mt-70">
                                        <Link href={`/project-details/${featuredProject1.id}`} className="link-btn">
                                            View Project
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 align-items-center flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 wow img-custom-anim-right">
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
                                            <li key={index}><Link href={`/project-details/${featuredProject2.id}`}>{service.toUpperCase()}</Link></li>
                                        ))}
                                        <li><Link href={`/project-details/${featuredProject2.id}`}>{featuredProject2.client}</Link></li>
                                    </ul>
                                </div>
                                <div className="tg-button-wrap mt-70">
                                    <Link href={`/project-details/${featuredProject2.id}`} className="link-btn">
                                        View Project
                                        <i className="icon-arrow-top-left" />
                                    </Link>
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
        </>
    )
}
