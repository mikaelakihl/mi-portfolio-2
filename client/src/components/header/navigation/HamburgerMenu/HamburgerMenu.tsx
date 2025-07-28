import { NavLink } from "react-router-dom"
import { navLinks } from "../../../../data/navLinks"
import styles from './HamburgerMenu.module.scss';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <nav className={styles.hamburger_menu_wrapper}>
            <button onClick={toggleMenu}>
                {isOpen ? <X/> : <Menu/>}
            </button>
            {isOpen && (
            <ul className={styles.hamburger_meny}>
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