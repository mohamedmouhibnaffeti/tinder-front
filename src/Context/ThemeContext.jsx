import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const [checked, setChecked] = useState(0);
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        setChecked(2);
        } else {
        setTheme('light');
        setChecked(1);
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{checked, setChecked, theme, setTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}