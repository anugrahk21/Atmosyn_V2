'use client'

import Link from "next/link"
import Marquee from "react-fast-marquee"

interface OfferMarqueeProps {
  backgroundColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  offers?: { text: string; url: string }[];
}

export default function OfferMarquee({ 
  backgroundColor = "--tg-theme-primary",
  offers = [
    { text: "Launch offer: 50% off on all services (terms & conditions apply)", url: "/pricing" },
    { text: "Launch offer: 50% off on all services (terms & conditions apply)", url: "/pricing" },
    { text: "Launch offer: 50% off on all services (terms & conditions apply)", url: "/pricing" },
  ]
}: OfferMarqueeProps) {
  
  // Define the keyframes for the pulsing animation
  const pulseAnimation = `
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.15); /* Increased scale for more noticeable pulse */
      }
    }
  `;

  return (
    <>
      {/* Inject the keyframes into the document head */}
      <style>{pulseAnimation}</style>
      
      <div className={`container-fluid px-0 overflow-hidden ${backgroundColor}`}>
        <div className="slider__marquee clearfix marquee-wrap style3">
          <Marquee className="marquee_mode marquee__group">
            {offers.map((offer, index) => (
              <div className="item m-item" key={index}>
                <Link href={offer.url} className="text-black text-lg font-semibold mx-8 flex items-center">
                  <i 
                    className="fas fa-gift mr-2" 
                    style={{ 
                      display: 'inline-block',
                      marginRight: '8px',
                      animation: 'pulse 1.5s ease-in-out infinite' // Apply the animation
                    }}
                  />
                  {offer.text}
                </Link>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  )
}
