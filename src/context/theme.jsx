import { createContext, useState } from "react";


const baseThemes = ['dark', 'light']
export const ThemeContext = createContext('dark')

export function ThemeProvider({children}){
    const [themes, setThemes] = useState(baseThemes)
    const [currentTheme, setCurrentTheme] = useState("dark")

    return(
        <ThemeContext value={{themes, currentTheme, setCurrentTheme}}>
            {children}
        </ThemeContext>
    )
}