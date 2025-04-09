import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    const [togglETHeme, setTogglETHeme] = useState<string>(
        () => (localStorage.getItem("togglETHeme") as string) || "light-theme"
    )

    useEffect(() => {
        localStorage.setItem("togglETHeme", JSON.stringify(togglETHeme))
        document.body.classList.add(togglETHeme)
        return () => {
            document.body.classList.remove(togglETHeme)
        }
    }, [togglETHeme])

    const toggleTheme = () => {
        setTogglETHeme(prevTheme => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"))
    }

    return (
        <>
            <nav className="switcher__tab" onClick={toggleTheme}>
                <span className={`switcher__btn ${togglETHeme === "light-theme" ? "light-mode" : "dark-mode"}`}>
                    {togglETHeme === "light-theme" ? <i className="flaticon-sun" /> : <i className="flaticon-moon" />}
                </span>
                <span className="switcher__mode" />
                <span className={`switcher__btn ${togglETHeme === "light-theme" ? "dark-mode" : "light-mode"}`}>
                    {togglETHeme === "light-theme" ? <i className="flaticon-moon" /> : <i className="flaticon-sun" />}
                </span>
            </nav>
        </>
    )
}
