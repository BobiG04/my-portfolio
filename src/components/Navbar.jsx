const Navbar = () => {
  return (
    <nav className="p-6 flex justify-between items-center max-w-1920 mx-auto dark:bg-gray-800 light:bg-gray-100">
      <h1 className="text-2xl font-bold dark:text-indigo-300">Моето Портфолио</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#about" className="hover:text-indigo-300 dark:text-gray-100 transition">За мен</a></li>
        <li><a href="#projects" className="hover:text-indigo-300 dark:text-gray-100 transition">Проекти</a></li>
        <li><a href="#contact" className="hover:text-indigo-300 dark:text-gray-100 transition">Контакти</a></li>
      </ul>
      <button className="px-4 py-2 dark:bg-indigo-300 dark:text-gray-800 light:bg-indigo-600 light:text-white rounded-full font-semibold hover:bg-indigo-700 hover:text-white transition" onClick={toggleDarkMode}>
        Тъмен режим
      </button>
    </nav>
  );
};

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light');
}

export default Navbar;