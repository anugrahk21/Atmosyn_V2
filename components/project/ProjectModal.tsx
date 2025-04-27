'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import projectsData from '@/util/projects.json'

interface ProjectModalProps {
  isOpen: boolean
  closeModal: () => void
  projectId: number | null
}

export default function ProjectModal({ isOpen, closeModal, projectId }: ProjectModalProps) {
  const [project, setProject] = useState<any>(null)
  const [loaded, setLoaded] = useState(false)
  
  // Find the current project data whenever projectId changes
  useEffect(() => {
    if (projectId) {
      const foundProject = projectsData.find(p => p.id === projectId)
      setProject(foundProject)
      
      // Set loaded after a short delay to ensure animations work properly
      setTimeout(() => {
        setLoaded(true)
      }, 100)
    } else {
      setLoaded(false)
      // Add a small delay before removing project data to ensure smooth closing animation
      setTimeout(() => {
        setProject(null)
      }, 300)
    }
  }, [projectId])

  // Find previous and next projects for navigation
  const currentIndex = project ? projectsData.findIndex(p => p.id === project.id) : -1
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1]
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0]

  // Handle clicking outside to close the modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // Close on escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal()
      }
    }
    
    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [isOpen, closeModal])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!project) return null

  // All images for the slider
  const allImages = [
    `/assets/img/project/${project.detailsImg}`,
    ...project.additionalImages.map((img: string) => `/assets/img/project/${img}`)
  ]

  return (
    <div 
      className={`project-modal-overlay ${isOpen ? 'open' : ''} ${loaded ? 'loaded' : ''}`}
      onClick={handleOutsideClick}
    >
      <div className="project-modal-content">
        <button className="project-modal-close" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="project-modal-inner">
          {/* Image Slider */}
          <div className="project-modal-slider mb-40">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.project-modal-next',
                prevEl: '.project-modal-prev',
              }}
            >
              {allImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="project-modal-slide">
                    <img src={img} alt={`${project.title} - image ${index+1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="project-modal-nav">
              <button className="project-modal-prev">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="project-modal-next">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="project-modal-details">
            {/* Project Title */}
            <div className="section__title mb-30">
              <h2 className="title">{project.title}</h2>
            </div>
            
            {/* Project Info */}
            <div className="project-details-info-wrap mb-40">
              <div className="single-project-info">
                <h6 className="title">Description</h6>
                <p className="text">{project.description}</p>
              </div>
              <div className="single-project-info">
                <h6 className="title">Services</h6>
                {project.services.map((service: string, index: number) => (
                  <p key={index} className="text">{service}</p>
                ))}
              </div>
              <div className="single-project-info">
                <h6 className="title">Client</h6>
                <p className="text">{project.client}</p>
              </div>
            </div>
            
            {/* Project Details Section */}
            <div className="project-modal-main-content mb-40">
              <h3 className="page-title mb-30">Project Details</h3>
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
            
            {/* Solution Section */}
            <div className="project-modal-solution mb-40">
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="page-title mb-30">The Solution</h3>
                  <p className="mb-0">{project.solution}</p>
                </div>
              </div>
            </div>
            
            {/* View Live/Demo Button - conditional based on if there's a liveUrl field in the project data */}
            {project.liveUrl && (
              <div className="project-modal-cta mb-40">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fas fa-external-link-alt me-2"></i> View Live
                </a>
              </div>
            )}
            
            {/* Project Navigation */}
            <div className="inner__page-nav mt-40 pt-40 border-top">
              <div 
                className="nav-btn text-md-start cursor-pointer" 
                onClick={() => {
                  setLoaded(false)
                  setTimeout(() => {
                    setProject(prevProject)
                    setLoaded(true)
                  }, 300)
                }}
              >
                <div className="text-wrap mb-0">
                  <i className="fa fa-arrow-left me-4" />
                  <span>Previous Project</span>
                </div>
              </div>
              <div 
                className="nav-btn text-md-end cursor-pointer" 
                onClick={() => {
                  setLoaded(false)
                  setTimeout(() => {
                    setProject(nextProject)
                    setLoaded(true)
                  }, 300)
                }}
              >
                <div className="text-wrap mb-0">
                  <span>Next Project</span>
                  <i className="fa fa-arrow-right ms-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}