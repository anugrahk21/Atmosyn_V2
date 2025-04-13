import TestimonialMarquee from '../slider/TestimonialMarquee'

interface Testimonial1Props {
  backgroundColor?: string;
  title?: string;
  paddingTop?: number;
  paddingBottom?: number;
  filter?: string[];
  limit?: number;
}

export default function Testimonial1({
  backgroundColor = "dark-bg",
  title = "OUR TESTIMONIAL", 
  paddingTop = 110,
  paddingBottom = 120,
  filter = ['homepage', 'featured'],
  limit = 0
}: Testimonial1Props) {
    return (
        <>
            <section className={`testimonial-area-1 pt-${paddingTop} pb-${paddingBottom} ${backgroundColor}`}>
                <div className="section__title">
                    <div className="container">
                        <h2 className={`title ${backgroundColor.includes('dark') ? 'text-white' : ''} wow img-custom-anim-left`}>{title}</h2>
                    </div>
                </div>
                <div className="container-fluid px-lg-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial__marquee-wrap wow img-custom-anim-right">
                                <TestimonialMarquee 
                                    filter={filter} 
                                    limit={limit}
                                    colorMode={backgroundColor.includes('dark') ? 'light' : 'dark'}
                                    speed={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
