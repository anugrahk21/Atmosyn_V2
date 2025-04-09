'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector<HTMLBodyElement>('body')

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove('theme-green', 'theme-yellow', 'theme-purple', 'theme-orange', 'black2-bg')

            // Add class based on pathname
            // Add class based on pathname
            if (pathname === '/home-2') {
                bodyElement.classList.add('theme-yellow')
            } else if (pathname === '/home-8') {
                bodyElement.classList.add('theme-green', 'black2-bg')
            } else if (pathname === '/home-4') {
                bodyElement.classList.add('theme-purple')
            } else if (pathname === '/home-5') {
                bodyElement.classList.add('theme-orange', 'black2-bg')
            } else if (pathname === '/home-6') {
                bodyElement.classList.add('theme-green', 'black2-bg')
            } else {
                bodyElement.classList.add('theme-green')
            }

        }
    }, [pathname])

    return null
}
