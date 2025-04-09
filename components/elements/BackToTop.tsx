'use client'
import { useEffect, useState } from "react"

export default function BackToTop({ target }: any) {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: document.querySelector(target).offsetTop,
            behavior: 'smooth'
        })
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