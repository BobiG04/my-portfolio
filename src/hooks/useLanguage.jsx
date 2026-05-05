import { createContext, useContext, useState } from 'react';

// 1. Create the context
const LanguageContext = createContext();

// 2. Create the provider component to wrap your app
export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('bg');

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'bg' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

// 3. Create the custom hook for components to use
export default function useLanguage() {
    return useContext(LanguageContext);
}
