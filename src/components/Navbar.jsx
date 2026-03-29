const Navbar = () => {
  return (
    <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-indigo-600">Моето Портфолио</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#about" className="hover:text-indigo-500 transition">За мен</a></li>
        <li><a href="#projects" className="hover:text-indigo-500 transition">Проекти</a></li>
        <li><a href="#contact" className="hover:text-indigo-500 transition">Контакти</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;