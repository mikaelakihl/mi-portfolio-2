import { useLocation } from 'react-router-dom';
import styles from './HeroSection.module.scss';


export const HeroSection = () => {

    const location = useLocation();
    const path = location.pathname;

    const isHome = path === '/';
    const isLogin = path === '/login';

    const showLargeHero = isHome || isLogin; 
    const showLogo = isHome; 

    // const heroClass = isHomePage ? styles ['hero--large'] : styles ['hero--small'];

    return (
        <section className={`${styles.hero_wrapper} ${styles.hero} ${showLargeHero ? styles.hero_large : styles.hero_small}`}>
            { showLogo && (
                <img src={'/assets/mi-portfolio-logo.png'} alt='Logotyp' className={styles.logo}/>
            )}
        </section>
    )
}