'use client'

import Link from "next/link"
import Marquee from "react-fast-marquee"

interface PartnerMarqueeProps {
  backgroundColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  partners?: { img: string; url: string }[];
}

export default function PartnerMarquee({ 
  backgroundColor = "theme-bg",
  paddingTop = 30,
  paddingBottom = 30,
  /*partners = [
    { img: "/assets/img/partner/partner1-1.svg", url: "/#" },
    { img: "/assets/img/partner/partner1-2.svg", url: "/#" },
    { img: "/assets/img/partner/partner1-3.svg", url: "/#" },
    { img: "/assets/img/partner/partner1-4.svg", url: "/#" },
    { img: "/assets/img/partner/partner1-5.svg", url: "/#" },
    { img: "/assets/img/partner/partner1-6.svg", url: "/#" },
  ]
    */
   partners=Array(6).fill({ img: "/assets/img/logo/logo.svg", url: "/" })
}: PartnerMarqueeProps) {
  return (
    <div className={`container-fluid px-0 overflow-hidden pb-${paddingBottom} pt-${paddingTop} ${backgroundColor}`}>
      <div className="slider__marquee clearfix marquee-wrap style3">
        <Marquee className="marquee_mode marquee__group">
          {partners.map((partner, index) => (
            <div className="item m-item" key={index}>
              <Link href={partner.url}><img src={partner.img} alt={`Partner ${index + 1}`} /></Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
