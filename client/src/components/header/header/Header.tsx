import { Navigation } from "../navigation/Navigation/Navigation"
import styles from './Header.module.scss';

export const Header = () => {

    return (
            <header className={styles.header}>
                <div><Navigation/></div>
            </header>
    )
}