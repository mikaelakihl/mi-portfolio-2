import { NavLink } from "react-router-dom"
import { navLinks } from "../../../../data/navLinks"
import styles from './HamburgerMenu.module.scss';
import { useState } from "react";

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev)

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