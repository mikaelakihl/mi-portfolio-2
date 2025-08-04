import { NavLink } from "react-router-dom"
import { getNavLinks } from "../../../../data/navLinks"
import styles from './HamburgerMenu.module.scss';
import { useContext, useState } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev)

    const context = useContext(LanguageContext);
    if (!context) return null;

    const {texts} = context;
    const navLinks = getNavLinks(texts);

    return (
        <nav className={styles.hamburger_menu_wrapper}>
            <button className={styles.hamburger_button} onClick={toggleMenu}>
                {isOpen ? 'X' : '☰'}
            </button>
            {isOpen && (
            <ul className={styles.hamburger_menu_ul}>
                {navLinks.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path} onClick={()=> setIsOpen(false)}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
            )}
        </nav>
    )
}