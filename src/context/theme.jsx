import { createContext, useEffect, useState } from "react";


const baseThemes = ['dark', 'light'];
export const ThemeContext = createContext('dark');
if (!localStorage.getItem('theme')) localStorage.setItem('theme', baseThemes[0]);
export function ThemeProvider({children}){
    const [themes, setThemes] = useState(baseThemes)
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme'));
    useEffect(()=>{
        document.body.classList.value = `body-${currentTheme}`;
        localStorage.setItem('theme', currentTheme)
    },[currentTheme])
    

    return(
        <ThemeContext value={{themes, currentTheme, setCurrentTheme}}>
            {children}
        </ThemeContext>
    )
}