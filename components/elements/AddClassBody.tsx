'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector<HTMLBodyElement>('body')

        if (bodyElement) {
            // Apply the site theme
            bodyElement.classList.add('theme-green')
        }

        return () => {
            document.querySelector<HTMLBodyElement>('body')?.classList.remove('theme-green')
        }
    }, [pathname])

    return null
}
