'use client'
import { gsap, Power4 } from 'gsap'
import { useEffect } from 'react'

const MagnetsComponent: React.FC = () => {
    useEffect(() => {
        const magnets: NodeListOf<HTMLElement> = document.querySelectorAll('.gsap-magnetic')
        const strength: number = 50

        const moveMagnet = (event: MouseEvent) => {
            const magnetButton: HTMLElement = event.currentTarget as HTMLElement
            const bounding: DOMRect = magnetButton.getBoundingClientRect()

            gsap.to(magnetButton, 1, {
                x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
                y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
                ease: Power4.easeOut
            })
        }

        magnets.forEach(magnet => {
            magnet.addEventListener('mousemove', moveMagnet)
            magnet.addEventListener('mouseout', event => {
                gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
            })
        })

        // Cleanup
        return () => {
            magnets.forEach(magnet => {
                magnet.removeEventListener('mousemove', moveMagnet)
                magnet.removeEventListener('mouseout', () => { })
            })
        }
    }, [])

    return null
}

export default MagnetsComponent
