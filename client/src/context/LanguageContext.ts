import { createContext } from "react";
import type sv from "../languages/sv";

export type Language = 'sv' | 'en';

export type LanguageTexts = typeof sv;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    texts: LanguageTexts;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
