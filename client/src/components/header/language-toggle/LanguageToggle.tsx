import { useContext } from "react"
import { LanguageContext } from "../../../context/LanguageContext";
import en from "../../../languages/en";
import styles from './LanguageToggle.module.scss';

export const LanguageToggle = () => {

    const context = useContext(LanguageContext);
    if (!context) return null; 

    const {language, setLanguage} = context; 

    const toggleLanguage = () => {
        setLanguage (language === 'sv' ? 'en' : 'sv');
    }
    
    return (
        <>
        <button className={styles.language_toggle_button} onClick={toggleLanguage}>
            {language === 'sv' ? 'en' : 'sv'}
        </button>
        </>
    )
}