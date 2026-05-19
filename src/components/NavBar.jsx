import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme.js';
import useLanguage from '../hooks/useLanguage.jsx';

export default function NavBar() {
    const { lang, toggleLang } = useLanguage();
    const [isDark, toggleTheme] = useTheme();

    const t = {
        en: {
            name: 'Bogomil Ivanov',
            home: 'Home',
            about: 'About Me',
            cv: 'CV',
            toggleLang: 'Language',
            toggleTheme: 'Dark Mode',
        },
        bg: {
            name: 'Богомил Иванов',
            home: 'Начало',
            about: 'За мен',
            cv: 'Автобиография',
            toggleLang: 'Език',
            toggleTheme: 'Тъмен режим',
        },
    }

    return (
        <nav className="flex justify-between items-center p-6">
            <h1 className="text-2xl font-bold">{t[lang].name}</h1>

            {/* Navigation Links (Ready for React Router!) */}
            <div className="hidden md:flex gap-6 items-center font-medium">
                <Link to="/" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                    {/* ... SVG иконата ... */}
                    {t[lang].home}
                </Link>
                <Link to="/about" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                    {/* ... SVG иконата ... */}
                    {t[lang].about}
                </Link>
                <Link to="/cv" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                    {/* ... SVG иконата ... */}
                    {t[lang].cv}
                </Link>
            </div>

            {/* Utility Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={toggleLang}
                    className="flex items-center gap-2 px-4 py-2 rounded bg-emerald-200 dark:bg-emerald-800 hover:bg-emerald-300 dark:hover:bg-emerald-700 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>
                    {t[lang].toggleLang}
                </button>
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 rounded bg-emerald-200 dark:bg-emerald-800 hover:bg-emerald-300 dark:hover:bg-emerald-700 transition-colors"
                >
                    {isDark ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    )}
                    {t[lang].toggleTheme}
                </button>
            </div>
        </nav>
    );
}