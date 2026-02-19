'use client'
import Link from "next/link"
import { useCallback, useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { getBlogImageUrl } from "@/util/blogHelpers"

interface BlogPost {
    id: number;
    title: string;
    category: string;
    img: string | string[];
    author: string;
    date: string;
    excerpt: string;
    content: string;
    keyTakeaways: string[];
    seoKeywords: string[];
    faqs: { question: string; answer: string; }[];
}

interface BlogFilterProps {
    initialBlogs: BlogPost[];
}

// Map our startup categories to blog categories from the JSON data
const categoryMap = {
    "ai-automation": {
        name: "AI & Automation",
        categories: ["AI", "Automation"]
    },
    "web-development": {
        name: "Web Dev",
        categories: ["Development"]
    },
    "design": {
        name: "UX/UI Design",
        categories: ["Design"]
    },
    "branding": {
        name: "Branding",
        categories: ["Branding"]
    },
    "marketing": {
        name: "Marketing",
        categories: ["Marketing"]
    }
};

// Helper function to find filter key by category name
const findFilterKeyByCategory = (categoryName: string): string => {
    for (const [key, value] of Object.entries(categoryMap)) {
        if (value.categories.includes(categoryName)) {
            return key;
        }
    }
    return "*"; // Default to "Show All" if no match found
};


export default function BlogFilterOne({ initialBlogs }: BlogFilterProps) {
    const searchParams = useSearchParams();
    const categoryParam = searchParams?.get('category') || null;

    // Sort the initial blogs by date (newest first) before any filtering
    const sortedInitialBlogs = [...initialBlogs].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Set initial filter key based on URL parameter if available
    const [filterKey, setFilterKey] = useState<string>("*");
    const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(sortedInitialBlogs);

    useEffect(() => {
        if (categoryParam) {
            const matchingKey = findFilterKeyByCategory(categoryParam);
            setFilterKey(matchingKey);
        }
    }, [categoryParam]);

    useEffect(() => {
        const filtered = filterKey === "*"
            ? sortedInitialBlogs
            : sortedInitialBlogs.filter(post => categoryMap[filterKey as keyof typeof categoryMap].categories.includes(post.category));

        setFilteredBlogs(filtered);
    }, [filterKey, sortedInitialBlogs]);

    const handleFilterKeyChange = useCallback((key: string) => () => {
        setFilterKey(key);
    }, []);

    const activeBtn = (value: string) => (value === filterKey ? "active" : "");

    // Add inline styles for active filter buttons to make highlighting more prominent
    const getButtonStyle = (value: string) => {
        if (value === filterKey) {
            return {
                color: 'var(--tg-theme-primary)', // Using the theme CSS variable
                fontWeight: '500'
            };
        }
        return {};
    };

    return (
        <>
            <div className="section__title mb-50 text-center">
                <div className="portfolio-tab-menu filter-menu-active">
                    <span className="portfolio-tab-menu-title">FILTER BY :</span>
                    <button
                        className={`filter-btn ${activeBtn("*")}`}
                        onClick={handleFilterKeyChange("*")}
                        style={getButtonStyle("*")}
                    >
                        Show All
                    </button>
                    {Object.entries(categoryMap).map(([key, { name }]) => (
                        <button
                            key={key}
                            className={`filter-btn ${activeBtn(key)}`}
                            onClick={handleFilterKeyChange(key)}
                            style={getButtonStyle(key)}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row gy-80 justify-content-center">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((post, index) => (
                        <div className="col-xl-4 col-md-6" key={index}>
                            <div className="blog__post-item-five shine-animate-item">
                                <div className="blog__post-thumb" style={{ height: "100%", overflow: "hidden" }}>
                                    <Link className="shine-animate" href={`/blog/${post.id}`}>
                                        <img
                                            src={getBlogImageUrl(post.id, 'main', 0)}
                                            alt={post.title}
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href={`/blog/${post.id}`}>{post.title}</Link></h3>
                                    <Link href={`/blog/${post.id}`} className="link-btn">
                                        Read More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No blog posts found for this category.</p>
                    </div>
                )}
            </div>
        </>
    );
}