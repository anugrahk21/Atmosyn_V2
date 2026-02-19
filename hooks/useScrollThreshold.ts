'use client'
import { useEffect, useState } from 'react'

/**
 * Custom hook that tracks whether the user has scrolled past a given threshold.
 * 
 * Replaces duplicated scroll detection logic in:
 * - BackToTop.tsx (>250px)
 * - WhatsAppButton.tsx (>200px)
 * - ScrollIndicator.tsx (>150px)
 * 
 * @param threshold - The scroll position (in pixels) to trigger the state change.
 * @returns Whether the current scroll position exceeds the threshold.
 */
export function useScrollThreshold(threshold: number): boolean {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > threshold)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [threshold])

    return hasScrolled
}
