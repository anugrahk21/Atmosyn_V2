'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function Video() {
    const [isOpen, setOpen] = useState(false)

    const openModal = (event: any) => {
        event.preventDefault() // Prevent the default action of the click event
        setOpen(true)
    }
    return (
        <>
            <section className="video-area-1 black2-bg overflow-hidden position-relative">
                <div className="video-thumb-box1 wow img-custom-anim-right">
                    <img src="/assets/img/others/video5-1.jpg" alt="img" />
                    <div className="video-btn-wrap wow img-custom-anim-left">
                        <a onClick={openModal} className="play-btn popup-video" tabIndex={0}>PLAY VIDEO <div className="btn icon-btn"><i className="fas fa fa-play" /></div></a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <div className="video-wrap1">
                                <div className="section__title mb-0 wow img-custom-anim-left">
                                    <h2 className="title title2 text-white">WHERE CREATIVITY BLOWS</h2>
                                    <p className="sec-text2 text-white">FROM USER EXPERIENCE TO STUNNING VISUALS, KRAK'S WEBSITE DESIGNS ARE UNMATCHED. EXPLORE OUR PORTFOLIO AND SEE WHY WE'RE THE AWARD–WINNING CHOICE FOR BUSINESSES.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
