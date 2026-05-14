import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-50 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-50 transition-colors duration-300">
      <NavBar/>
      <HeroSection/>
    </div>
  );
}