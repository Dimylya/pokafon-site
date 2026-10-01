import { NavLink } from "react-router";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export function Header (){
    const theme = useContext(ThemeContext);
    return (
        <header className={`header-${theme.currentTheme}`}>
        <h1>PoKaFoN</h1>
        <ThemeSwitcher />
        <ul>
            <li><NavLink className={`link-${theme.currentTheme}`} to= "/">Главная</NavLink></li>
            <li><NavLink className={`link-${theme.currentTheme}`} to="/catalog" >Каталог</NavLink></li>
        </ul>
        </header>
    )
}