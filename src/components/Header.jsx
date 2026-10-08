import { NavLink } from "react-router";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme";
import Cart from "./Cart";

export function Header (){
    const theme = useContext(ThemeContext);
    const [showCart, setShowCart] = useState(false);
    return (
        <header className={`header-${theme.currentTheme}`}>
        <h1>PoKaFoN</h1>
        <ThemeSwitcher />
        <ul>
            <li><NavLink className={`link-${theme.currentTheme}`} to= "/">Главная</NavLink></li>
            <li><NavLink className={`link-${theme.currentTheme}`} to="/catalog" >Каталог</NavLink></li>
            <li><NavLink className={`link-${theme.currentTheme}`} onClick={(e)=>setShowCart(!showCart)}>корзина</NavLink></li>
        </ul>
        {showCart && <Cart />}
        </header>
    )
}