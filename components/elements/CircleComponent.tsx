'use client'
import React, { useEffect } from 'react'

const Injector: React.FC<{ text: string; splitter: string; klass: string; after: string }> = ({
    text,
    splitter,
    klass,
    after,
}) => {
    const injectText = () => {
        const a = text.split(splitter)
        let inject = ''
        if (a.length) {
            a.forEach((item, i) => {
                inject += `<span class="${klass}${i + 1}">${item}</span>${after}`
            })
        }
        return inject
    }

    return <div dangerouslySetInnerHTML={{ __html: injectText() }} />
}

const CircleComponent: React.FC = () => {
    useEffect(() => {
        const injector = (t: HTMLElement, splitter: string, klass: string, after: string) => {
            const a = t.innerText.split(splitter)
            let inject = ''
            if (a.length) {
                a.forEach((item, i) => {
                    inject += `<span class="${klass}${i + 1}">${item}</span>${after}`
                })
                t.innerHTML = inject
            }
        }

        const elements = document.querySelectorAll<HTMLElement>('.hero-title-anime')
        elements.forEach(element => {
            injector(element, '', 'char', '')
        })
    }, [])

    return (
        <div className="circle-text-wrap position-relative">
            <div className="circle-text-tag">
                <span className="hero-title-anime">SCROLL DOWN SCROLL DOWN SCROLL DOWN</span>
                <Injector text="" splitter=" " klass="word" after=" " />
            </div>
            <i className="icon-arrow-top-left arrow-down" />
        </div>
    )
}

export default CircleComponent
