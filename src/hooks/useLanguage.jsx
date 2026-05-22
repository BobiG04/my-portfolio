import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const getLangFromCookie = () => {
        const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
        if (match) {
            const parts = match[1].split('/');
            return parts[2] || 'bg'; 
        }
        return 'bg';
    };

    const [lang, setLang] = useState(getLangFromCookie());

    const toggleLang = () => {
        const newLang = lang === 'bg' ? 'en' : 'bg';
        setLang(newLang);
        
        document.cookie = `googtrans=/bg/${newLang}; path=/`;
        document.cookie = `googtrans=/bg/${newLang}; domain=localhost; path=/`;
        
        window.location.reload();
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Тук е ключовата промяна - само това е default!
export default function useLanguage() {
    return useContext(LanguageContext);
}