import { createContext, useEffect, useState } from "react";


const baseThemes = ['dark', 'light']
export const ThemeContext = createContext('dark')

export function ThemeProvider({children}){
    const [themes, setThemes] = useState(baseThemes)
    const [currentTheme, setCurrentTheme] = useState("dark")
    useEffect(()=>{
        document.body.classList.value = `body-${currentTheme}`
    },[currentTheme])
    

    return(
        <ThemeContext value={{themes, currentTheme, setCurrentTheme}}>
            {children}
        </ThemeContext>
    )
}