import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export function ThemeSwitcher(){
    const {setCurrentTheme, currentTheme} = useContext(ThemeContext);

    return(
        <>
        {currentTheme != "dark" &&<button className={`btn-themeSwitcher-${currentTheme}`} onClick={(e)=>setCurrentTheme('dark')}>dark</button>}
        {currentTheme != "light" &&<button className={`btn-themeSwitcher-${currentTheme}`} onClick={(e)=>setCurrentTheme('light')}>light</button>}
        </>
    )
}

