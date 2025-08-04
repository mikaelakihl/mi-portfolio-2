import { LanguageToggle } from "../language-toggle/LanguageToggle";
import { Navigation } from "../navigation/Navigation/Navigation"
import styles from './Header.module.scss';

export const Header = () => {

    return (
            <header className={styles.header}>
                <LanguageToggle/>
                <div className="nav_bar"><Navigation/></div>
                
            </header>
    )
}