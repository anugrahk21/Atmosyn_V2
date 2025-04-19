"use client";
import { useState } from "react";
import Link from "next/link";

interface ActiveState {
    status: boolean
    key: number | null
}

export default function BlogFAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 0, // Set first FAQ open by default
    });

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
                key: null,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    
    return (
        <div className="accordion-area accordion" id="blogFaqAccordion">
            {faqs.map((faq, idx) => (
                <div className={`accordion-card style2${isActive.key === idx ? ' active' : ''}`} key={idx}>
                    <div className="accordion-header" id={`collapse-item-${idx}`} onClick={() => handleClick(idx)}>
                        <button
                            className={isActive.key === idx ? 'accordion-button' : 'accordion-button collapsed'}
                            type="button"
                            aria-expanded={isActive.key === idx}
                            aria-controls={`collapse-${idx}`}
                        >
                            {faq.question}
                        </button>
                    </div>
                    <div
                        id={`collapse-${idx}`}
                        className={isActive.key === idx ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
                        aria-labelledby={`collapse-item-${idx}`}
                        data-bs-parent="#blogFaqAccordion"
                    >
                        <div className="accordion-body">
                            <p className="faq-text">{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
