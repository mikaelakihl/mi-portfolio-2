import { NavLink } from "react-router-dom"
import { navLinks } from "../../../../data/navLinks"

export const DesktopMenu = () => {

    return (
        <nav>
            <ul>
                {navLinks.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}