import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/AboutMe.jsx';
import CV from './pages/CV.jsx';

export default function App() {
  return (
    // Опаковаме цялото приложение в Router
    <Router>
      <div className="min-h-screen flex flex-col bg-emerald-50 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-50 transition-colors duration-300">
        
        {/* NavBar се показва на всяка страница */}
        <NavBar />
        
        {/* Routes определя кое съдържание да се зареди според URL-а */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
        </Routes>

        {/* Footer се показва на всяка страница */}
        <Footer />
        
      </div>
    </Router>
  );
}