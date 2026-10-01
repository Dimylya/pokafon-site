import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export function ThemeSwitcher(){
    const {setCurrentTheme, currentTheme} = useContext(ThemeContext);

    return(
        <>
        {currentTheme != "dark" &&<button onClick={(e)=>setCurrentTheme('dark')}>dark</button>}
        {currentTheme != "light" &&<button onClick={(e)=>setCurrentTheme('light')}>light</button>}
        </>
    )
}

