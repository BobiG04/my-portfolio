import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Навигация */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600">Моето Портфолио</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#about" className="hover:text-indigo-500 transition">За мен</a></li>
          <li><a href="#projects" className="hover:text-indigo-500 transition">Проекти</a></li>
          <li><a href="#contact" className="hover:text-indigo-500 transition">Контакти</a></li>
        </ul>
      </nav>

      {/* Начална секция (Hero) */}
      <header className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Здравейте, аз съм <span className="text-indigo-600">[Твоето Име]</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          Фронтенд разработчик, който обича да създава красиви, интерактивни и бързи уеб приложения.
        </p>
        <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
          Разгледай проектите ми
        </a>
      </header>

      {/* Секция Проекти */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-10 text-center">Избрани Проекти</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Примерна карта за проект */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                [Снимка на проекта]
              </div>
              <h4 className="text-xl font-bold mb-2">Проект 1</h4>
              <p className="text-gray-600 mb-4">Кратко описание на технологиите и целта на първия ти проект.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Tailwind</span>
              </div>
            </div>
            
            {/* Примерна карта за проект 2 */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                [Снимка на проекта]
              </div>
              <h4 className="text-xl font-bold mb-2">Проект 2</h4>
              <p className="text-gray-600 mb-4">Кратко описание на втория интересен проект, по който си работил.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Vite</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футър */}
      <footer id="contact" className="py-10 text-center text-gray-500">
        <p>© 2026 [Твоето Име]. Всички права запазени.</p>
      </footer>

    </div>
  );
}

export default App;