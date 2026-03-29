const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center py-24 px-4">
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Здравейте, аз съм <span className="text-indigo-600">Богомил Иванов</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mb-10">
        Фронтенд разработчик, който обича да създава красиви, интерактивни и бързи уеб приложения.
      </p>
      <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
        Разгледай проектите ми
      </a>
    </header>
  );
};

export default Hero;