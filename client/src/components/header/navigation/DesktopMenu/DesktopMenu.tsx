import { NavLink } from "react-router-dom"
import { getNavLinks } from "../../../../data/navLinks"
import styles from './DesktopMenu.module.scss';
import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";

export const DesktopMenu = () => {

    const context = useContext(LanguageContext);
    if (!context) return null;

    const {texts} = context;
    const navLinks = getNavLinks(texts);

    return (
        <nav>
            <ul className={styles.desktop_menu_ul}>
                {navLinks.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}