import HeroSection from '../components/HeroSection.jsx';
import TechStack from '../components/TechStack.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';

export default function Home() {
    return (
        <main className="flex-1">
            <HeroSection />
            <TechStack />
            <ProjectsSection />
        </main>
    );
}