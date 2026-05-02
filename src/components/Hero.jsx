const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center py-24 px-4 dark:bg-gray-800 light:bg-gray-100">
      <img src="./src/images/profile.jpg" alt="Профилна снимка" className="w-48 h-48 rounded-full mb-6 border-4 border-indigo-300 shadow-lg" />
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 dark:text-gray-100">
        Здравейте, аз съм <span className="light:text-indigo-600 dark:text-indigo-300">Богомил Иванов</span>
      </h2>
      <p className="text-xl dark:text-gray-100 light:text-gray-600 max-w-2xl mb-10">
        Фронтенд разработчик, който обича да създава красиви, интерактивни и бързи уеб приложения.
      </p>
      <a href="#projects" className="px-8 py-4 dark:bg-indigo-300 dark:text-gray-800 light:bg-indigo-600 light:text-white rounded-full font-semibold hover:bg-indigo-700 hover:text-gray-100 transition shadow-lg hover:shadow-xl">
        Разгледай проектите ми
      </a>
    </header>
  );
};

export default Hero;