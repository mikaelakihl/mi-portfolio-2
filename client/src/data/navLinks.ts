import type { LanguageTexts } from "../context/LanguageContext";

export const getNavLinks = (texts: LanguageTexts) => [

    {path: '/', label: texts.navBar.home},
    {path: '/projects', label: texts.navBar.projects},
    {path: '/gallery', label: texts.navBar.gallery},
    {path: '/login', label: texts.navBar.logIn},
    {path: '/admin', label: texts.navBar.admin}

]
 
    
