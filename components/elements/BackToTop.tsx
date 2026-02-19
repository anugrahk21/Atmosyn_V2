'use client'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'

interface BackToTopProps {
    target: string;
}

export default function BackToTop({ target }: BackToTopProps) {
    const hasScrolled = useScrollThreshold(250)

    const handleClick = () => {
        const el = document.querySelector<HTMLElement>(target)
        if (el) {
            window.scrollTo({
                top: el.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            {hasScrolled && (
                <a className="scroll__top scroll-to-target open" onClick={handleClick}>
                    <i className="fas fa-arrow-up" />
                </a>

            )}
        </>
    )
}