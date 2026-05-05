import {useState} from 'react';
import useTheme from './hooks/useTheme.js'

export default function App() {
  const [lang,setLang] = useState('bg')
  const [isDark,toggleTheme] = useTheme();

  const t = {
    en: {
      name: 'Bogomil Ivanov',
      toggleLang: 'Language',
      toggleTheme: 'Dark Mode',
    },
    bg: {
      name: 'Богомил Иванов',
      toggleLang: 'Език',
      toggleTheme: 'Тъмен режим',
    },
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-emerald-950 text-gray-900 dark:text-white transition-colors">
      <nav className="flex justify-between items-center p-6 border-b dark:border-gray-800">
        <h1 className="text-2xl font-bold">{t[lang].name}</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'bg' : 'en')}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {t[lang].toggleLang}
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {t[lang].toggleTheme}
          </button>
        </div>
      </nav>
    </div>
  );
}