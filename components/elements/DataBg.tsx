'use client'
import { useEffect } from 'react'

export default function DataBg() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('[data-background]')

        elements.forEach((element) => {
            const dataBackground = element.getAttribute('data-background')
            if (dataBackground) {
                element.style.backgroundImage = `url(${dataBackground})`
            }
        })
    }, [])

    return null
}
