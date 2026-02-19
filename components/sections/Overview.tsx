'use client'
import { useEffect, useRef } from 'react'

const CARDS = [
    { num: '01', title: 'Fresh Startup Energy' },
    { num: '02', title: 'AI-Powered Solutions' },
    { num: '03', title: 'Client-Focused Results' },
];

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
                        {CARDS.map((card, index) => (
                            <div className="col-lg-4 col-md-4 d-none d-md-block" key={`desktop-${index}`}>
                                <div
                                    ref={setCardRef(index)}
                                    className="counter-card text-center wow img-custom-anim-left scroll-card"
                                >
                                    <h2 className="counter-card-number">{card.num}</h2>
                                    <h3 className="counter-card-title counter-card-border">{card.title}</h3>
                                </div>
                            </div>
                        ))}

                        {/* Mobile View - Only shown on sm and xs screens */}
                        {CARDS.map((card, index) => (
                            <div className="col-12 d-block d-md-none mb-3" key={`mobile-${index}`}>
                                <div
                                    ref={setCardRef(index + 3)}
                                    className="mobile-counter-card d-flex align-items-center wow img-custom-anim-left hover-card scroll-card"
                                >
                                    <h2 className="counter-card-number pe-4">{card.num}</h2>
                                    <h3 className="counter-card-title mb-0">{card.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
