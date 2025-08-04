import { useState, type ReactNode } from "react";
import sv from "../languages/sv";
import en from "../languages/en";
import { LanguageContext, type Language } from "./LanguageContext";


interface Props {
    children: ReactNode;
}

export const LanguageProvider = ({children}: Props) => {
    const [language, setLanguage] = useState<Language>('sv');

    const texts = language === 'sv' ? sv : en;

    return (
        <LanguageContext.Provider value = {{language, setLanguage, texts}}>
            {children}
        </LanguageContext.Provider>
    )
}