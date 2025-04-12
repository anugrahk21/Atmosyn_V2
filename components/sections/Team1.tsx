import Link from "next/link"

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  photo: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

interface Team1Props {
  title?: string;
  backgroundColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  showSocials?: boolean;
  teamMembers?: TeamMember[];
}

export default function Team1({
  title = "MEET THE MAKERS",
  backgroundColor = "theme-bg",
  paddingTop = 110,
  paddingBottom = 120,
  showSocials = true,
  teamMembers = [
    {
      id: 1,
      name: "Terry Souro",
      designation: "Creative Director",
      photo: "/assets/img/team/team-1-1.jpg",
      socialLinks: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      id: 2,
      name: "Souro Terry",
      designation: "Creative Director",
      photo: "/assets/img/team/team-1-2.jpg",
      socialLinks: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      id: 3,
      name: "Stephen",
      designation: "Creative Director",
      photo: "/assets/img/team/team-1-3.jpg",
      socialLinks: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      id: 4,
      name: "Terry Souro",
      designation: "Creative Director",
      photo: "/assets/img/team/team-1-4.jpg",
      socialLinks: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/"
      }
    }
  ]
}: Team1Props) {
    return (
        <>
            <section className={`team-area-1 pt-${paddingTop} pb-${paddingBottom} ${backgroundColor}`}>
                <div className="container">
                    <div className="section__title text-center mb-50">
                        <h2 className="title wow img-custom-anim-top">{title}</h2>
                    </div>
                    <div className="row gx-30 gy-30 justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top" key={member.id || index}>
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src={member.photo} alt={member.name} />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title"><Link href="/team-details">{member.name}</Link></h4>
                                            <p className="team-card-text">{member.designation}</p>
                                        </div>
                                        {showSocials && member.socialLinks && (
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    {member.socialLinks.facebook && (
                                                        <Link href={member.socialLinks.facebook}><i className="fab fa-facebook-f" /></Link>
                                                    )}
                                                    {member.socialLinks.twitter && (
                                                        <Link href={member.socialLinks.twitter}><i className="fab fa-twitter" /></Link>
                                                    )}
                                                    {member.socialLinks.linkedin && (
                                                        <Link href={member.socialLinks.linkedin}><i className="fab fa-linkedin-in" /></Link>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
