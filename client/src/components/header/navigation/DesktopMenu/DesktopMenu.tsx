import { NavLink } from "react-router-dom"
import { navLinks } from "../../../../data/navLinks"
import styles from './DesktopMenu.module.scss';

export const DesktopMenu = () => {

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