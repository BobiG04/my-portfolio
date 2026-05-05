import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-emerald-950 text-gray-900 dark:text-white transition-colors">
      <NavBar/>
      <HeroSection/>
    </div>
  );
}