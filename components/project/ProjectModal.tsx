'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import projectsData from '@/util/projects.json'
import Image from 'next/image'

interface ProjectModalProps {
  isOpen: boolean
  closeModal: () => void
  projectId: number | null
}

export default function ProjectModal({ isOpen, closeModal, projectId }: ProjectModalProps) {
  const [project, setProject] = useState<any>(null)
  const [loaded, setLoaded] = useState(false)
  const scrollImageRef = useRef<HTMLDivElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const animationFrameId = useRef<number | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  // New state to track the current screenshot index
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  
  // Find the current project data whenever projectId changes
  useEffect(() => {
    if (projectId) {
      const foundProject = projectsData.find(p => p.id === projectId)
      setProject(foundProject)
      setImageLoaded(false) // Reset image loaded state
      setCurrentScreenshotIndex(0) // Reset to first screenshot when changing projects
      
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
    // Cleanup function to reset body overflow when component unmounts or modal closes
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle screenshot page change
  const handleScreenshotChange = (index: number) => {
    // Only change if it's a different screenshot
    if (index !== currentScreenshotIndex) {
      // Stop current animation
      if (timeoutId.current) clearTimeout(timeoutId.current);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      
      setCurrentScreenshotIndex(index);
      setImageLoaded(false); // Reset image loaded state for the new screenshot
      
      // Scroll back to top
      if (scrollImageRef.current) {
        scrollImageRef.current.scrollTop = 0;
      }
    }
  };

  // Auto-scrolling animation effect with delay (Modified for multiple screenshots)
  useEffect(() => {
    // Clear any existing animation/timeout on re-run
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    timeoutId.current = null;
    animationFrameId.current = null;

    const scrollElement = scrollImageRef.current;

    // Conditions to start the animation process
    const isDev = project?.services.some((s: string) =>
      s.toLowerCase().includes('development') || s.toLowerCase().includes('web')
    );
    
    const hasMultipleScreenshots = project?.longScreenshots && Array.isArray(project.longScreenshots);
    const currentScreenshot = hasMultipleScreenshots ? 
      project.longScreenshots[currentScreenshotIndex] : 
      (project?.longScreenshot ? { path: project.longScreenshot } : null);

    if (!isOpen || !project || !currentScreenshot || !scrollElement || !imageLoaded || !isDev) {
      return; // Exit if conditions not met
    }

    const scrollHeight = scrollElement.scrollHeight;
    const clientHeight = scrollElement.clientHeight;
    const maxScrollTop = scrollHeight - clientHeight;

    if (maxScrollTop <= 0) {
      console.log("Skipping scroll animation: No scrollable height.");
      return; // Exit if no scrolling needed
    }

    // Start animation after a 2-second delay
    timeoutId.current = setTimeout(() => {
      console.log("Starting scroll animation after delay");
      
      // Variables to track scroll position and state
      let scrollPosition = 0;
      let isScrollingDown = true;
      const scrollSpeed = 3; // Pixels to scroll per frame - adjust for faster/slower scroll
      const fastScrollSpeed = 20; // Speed for fast scroll back to top
      
      const scrollStep = () => {
        if (isScrollingDown) {
          // Normal scroll down
          scrollPosition += scrollSpeed;
          
          // If we've reached the bottom
          if (scrollPosition >= maxScrollTop) {
            isScrollingDown = false; // Switch to fast scroll-up mode
            console.log("Reached bottom, scrolling back to top");
          }
        } else {
          // Fast scroll back to top
          scrollPosition -= fastScrollSpeed;
          
          // If we've reached the top
          if (scrollPosition <= 0) {
            scrollPosition = 0; // Ensure we start exactly at 0
            isScrollingDown = true; // Switch back to scroll-down mode
            console.log("Reached top, starting scroll down again");
          }
        }
        
        // Apply the scroll position
        if (scrollElement) {
          scrollElement.scrollTop = scrollPosition;
        }
        
        // Continue the animation
        animationFrameId.current = requestAnimationFrame(scrollStep);
      };
      
      // Start the animation
      animationFrameId.current = requestAnimationFrame(scrollStep);

    }, 2000); // 2-second delay

    // Cleanup function: Cancel animation and timeout on unmount or dependency change
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      timeoutId.current = null;
      animationFrameId.current = null;
      console.log("Cleaned up scroll animation effect");
    };

  }, [isOpen, project, imageLoaded, currentScreenshotIndex]); // Added currentScreenshotIndex as dependency

  if (!project) return null;

  // Check if this is a development project (used for conditional rendering)
  const isDevelopmentProject = project.services.some((service: string) => 
    service.toLowerCase().includes('development') || service.toLowerCase().includes('web')
  );

  // Check if project has multiple screenshots
  const hasMultipleScreenshots = project.longScreenshots && Array.isArray(project.longScreenshots) && project.longScreenshots.length > 0;
  
  // Get current screenshot (either from array or fallback to single longScreenshot)
  const currentScreenshot = hasMultipleScreenshots ? 
    project.longScreenshots[currentScreenshotIndex] : 
    (project.longScreenshot ? { path: project.longScreenshot } : null);
    
  // Determine page name for current screenshot
  const currentPageName = hasMultipleScreenshots && currentScreenshot?.name ? 
    currentScreenshot.name : 
    'Page';

  // All images for the slider (for non-development projects)
  const allImages = [
    `/assets/img/project/${project.detailsImg}`,
    ...project.additionalImages.map((img: string) => `/assets/img/project/${img}`)
  ];

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
          {/* Image Display - Conditional based on project type */}
          {isDevelopmentProject && currentScreenshot ? (
            // Long scrolling screenshot for development projects with page navigation
            <div className="project-modal-long-screenshot mb-40">
              {/* Screenshot Container */}
              <div 
                ref={scrollImageRef} 
                className="long-screenshot-container"
                style={{ 
                  height: '500px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px'
                }}
              >
                <img 
                  src={`/assets/img/project/${currentScreenshot.path}`} 
                  alt={`${project.title} - ${currentPageName}`}
                  style={{ width: '100%', display: 'block' }} 
                  onLoad={() => {
                    console.log("Image loaded: ", currentScreenshot.path);
                    setImageLoaded(true);
                  }}
                  onError={() => {
                    console.error("Error loading image: ", currentScreenshot.path);
                  }}
                />
              </div>
              
              {/* Page Navigation */}
              {hasMultipleScreenshots && (
                <div className="screenshot-navigation mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="current-page-name">
                      <span className="fw-medium">{currentPageName}</span>
                    </div>
                    <div className="page-buttons d-flex">
{project.longScreenshots.map((screenshot: any, idx: number) => (
  <button
  key={idx}
  style={{
    backgroundColor: currentScreenshotIndex === idx ? '#a8f600' : '#fff',
    border: '1px solid #000',
    color: '#000',
    width: 36,
    height: 36,
    margin: '0 5px',
    borderRadius: '50%',
    outline: 'none',
    boxShadow: 'none',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    cursor: 'pointer'
  }}
  onClick={() => handleScreenshotChange(idx)}
  aria-label={`View ${screenshot.name || `Page ${idx + 1}`}`}
>
  {idx + 1}
</button>
))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Regular image slider for other projects
            <div className="project-modal-slider mb-40">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: '.project-modal-next',
                  prevEl: '.project-modal-prev',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
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
          )}

          {/* Rest of the component remains unchanged */}
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
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <img 
                      src="/assets/img/icon/check-circle.svg" 
                      alt="check" 
                      className="me-2" 
                      width={18} 
                      height={18}
                      style={{ flexShrink: 0 }}
                    />
                    <p className="text mb-0">{service}</p>
                  </div>
                ))}
              </div>
              <div className="single-project-info">
                <h6 className="title">Client</h6>
                <p className="text">{project.client}</p>
              </div>
            </div>
            
            {/* Project Details Section - Updated layout with overview and highlights side by side */}
            <div className="project-modal-main-content mb-40">
              <div className="row">
                <div className="col-lg-7">
                  <h3 className="page-title mb-30">Project Overview</h3>
                  <p className="mb-0">{project.overview}</p>
                </div>
                <div className="col-lg-5">
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="project-highlights">
                      <h3 className="page-title mb-30">Key Highlights</h3>
                      <ul className="list-wrap project-highlights-list" style={{ paddingLeft: 0 }}>
                        {project.highlights.map((highlight: string, index: number) => (
                          <li key={index} style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start',
                            marginBottom: '12px'
                          }}>
                            <img 
                              src="/assets/img/icon/check-circle.svg" 
                              alt="check" 
                              className="me-2" 
                              width={22} 
                              height={22}
                              style={{ marginTop: '1px', flexShrink: 0 }}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* View Live/Demo Button */}
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
                  setImageLoaded(false) 
                  setCurrentScreenshotIndex(0) // Reset to first screenshot when changing projects
                  setTimeout(() => {
                    setProject(prevProject)
                    setLoaded(true)
                  }, 300)
                }}
              >
                <div className="text-wrap mb-0">
                  <i className="fa fa-arrow-left me-4" />
                  <i className="fa fa-arrow-left me-4" />
                  <span>Previous Project</span>
                </div>
              </div>
              <div 
                onClick={() => {
                  setLoaded(false)
                  setImageLoaded(false) 
                  setCurrentScreenshotIndex(0) // Reset to first screenshot when changing projects
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