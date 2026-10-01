import { useContext } from "react"
import { ThemeContext } from "../context/theme"

export function Footer(){
    const theme = useContext(ThemeContext);
    return (
        <footer className={`footer-${theme.currentTheme}`}>
            <p>&copy; PoKaFoN Все права защищены</p>
        </footer>
    )
}