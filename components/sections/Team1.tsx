import Link from "next/link"
import teamMembers from "@/util/team.json";

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
    paddingTop = 60,
    paddingBottom = 60,
    showSocials = true,
    teamMembers: _teamMembers
}: Team1Props) {
    // Use imported teamMembers if no override is provided
    const members = _teamMembers || teamMembers;
    return (
        <>
            <section className={`team-area-1 pt-${paddingTop} pb-${paddingBottom} ${backgroundColor}`}>
                <div className="container">
                    <div className="section__title text-center mb-50">
                        <h2 className="title wow img-custom-anim-top">{title}</h2>
                    </div>
                    <div className="row gx-30 gy-30 justify-content-center">
                        {members.map((member, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top" key={member.id || index}>
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src={`/assets/img/team/${member.photo}`} alt={member.name} />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title">{member.name}</h4>
                                            <p className="team-card-text">{member.designation}</p>
                                        </div>
                                        {showSocials && member.socialLinks && (
                                            <div className="team-social">
                                                <button className="icon-btn"><i className="fas fa-plus" /></button>
                                                <div className="social-icon-wrap">
                                                    {/* {member.socialLinks.facebook && (
                                                            <Link href={member.socialLinks.facebook}><i className="fab fa-facebook-f" /></Link>
                                                        )} */}
                                                    {/*{member.socialLinks.twitter && (
                                                            <Link href={member.socialLinks.twitter}><i className="fab fa-twitter" /></Link>
                                                        )} */}
                                                    {member.socialLinks.linkedin && (
                                                        <Link href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></Link>
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
