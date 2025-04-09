import Link from "next/link"

export default function Team1() {
    return (
        <>
            <section className="team-area-1 pt-110 theme-bg">
                <div className="container">
                    <div className="section__title text-center mb-50">
                        <h2 className="title wow img-custom-anim-top">MEET THE MAKERS</h2>
                    </div>
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-1.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-2.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Souro Terry</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-3.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Stephen</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-1-4.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                    <div className="team-social">
                                        <button className="icon-btn"><i className="fas fa-plus" /></button>
                                        <div className="social-icon-wrap">
                                            <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
