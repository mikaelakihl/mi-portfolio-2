import { useContext } from "react"
import { LanguageContext } from "../../../context/LanguageContext";
import en from "../../../languages/en";

export const LanguageToggle = () => {

    const context = useContext(LanguageContext);
    if (!context) return null; 

    const {language, setLanguage} = context; 

    const toggleLanguage = () => {
        setLanguage (language === 'sv' ? 'en' : 'sv');
    }
    
    return (
        <>
        <button onClick={toggleLanguage}>
            SV/EN
        </button>
        </>
    )
}