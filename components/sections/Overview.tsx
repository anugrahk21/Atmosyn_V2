'use client'
import { useEffect, useRef } from 'react'

export default function Overview() {
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        // Initialize the array with the correct number of elements
        cardRefs.current = cardRefs.current.slice(0, 6);
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add animation class when element is visible
                    entry.target.classList.add('animate-on-scroll');
                    // Stop observing after animation is applied
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all card refs that exist
        cardRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Set up ref callback function that properly handles the typing
    const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
        cardRefs.current[index] = el;
    };

    return (
        <>
            <section className="overview-area pt-60 pb-60 green-bg">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-lg-10 col-md-12 mx-auto text-center">
                            <div className="section__title wow img-custom-anim-left">
                                <h2 className="title">WHY CHOOSE ATMOSYN</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-0">
                        {/* Desktop/Tablet View - Shown on md screens and up */}
                        <div className="col-lg-4 col-md-4 d-none d-md-block">
                            <div ref={setCardRef(0)} className="counter-card text-center wow img-custom-anim-left scroll-card">
                                <h2 className="counter-card-number">01</h2>
                                <h3 className="counter-card-title" style={{ border: '1px solid black' }}>Fresh Startup Energy</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-none d-md-block">
                            <div ref={setCardRef(1)} className="counter-card text-center wow img-custom-anim-left scroll-card">
                                <h2 className="counter-card-number">02</h2>
                                <h3 className="counter-card-title" style={{ border: '1px solid black' }}>AI-Powered Solutions</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 d-none d-md-block">
                            <div ref={setCardRef(2)} className="counter-card text-center wow img-custom-anim-left scroll-card">
                                <h2 className="counter-card-number">03</h2>
                                <h3 className="counter-card-title" style={{ border: '1px solid black' }}>Client-Focused Results</h3>
                            </div>
                        </div>

                        {/* Mobile View - Only shown on sm and xs screens */}
                        <div className="col-12 d-block d-md-none mb-3">
                            <div 
                                ref={setCardRef(3)} 
                                className="mobile-counter-card d-flex align-items-center wow img-custom-anim-left hover-card scroll-card">
                                <h2 className="counter-card-number pe-4">01</h2>
                                <h3 className="counter-card-title mb-0">Fresh Startup Energy</h3>
                            </div>
                        </div>
                        <div className="col-12 d-block d-md-none mb-3">
                            <div 
                                ref={setCardRef(4)} 
                                className="mobile-counter-card d-flex align-items-center wow img-custom-anim-left hover-card scroll-card">
                                <h2 className="counter-card-number pe-4">02</h2>
                                <h3 className="counter-card-title mb-0">AI-Powered Solutions</h3>
                            </div>
                        </div>
                        <div className="col-12 d-block d-md-none">
                            <div 
                                ref={setCardRef(5)} 
                                className="mobile-counter-card d-flex align-items-center wow img-custom-anim-left hover-card scroll-card">
                                <h2 className="counter-card-number pe-4">03</h2>
                                <h3 className="counter-card-title mb-0">Client-Focused Results</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
