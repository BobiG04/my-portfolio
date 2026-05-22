import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsSection() {
    // Състояние за проектите и състояние за зареждането
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Взимаме основните данни за проектите
        fetch('https://api.github.com/users/BobiG04/repos?sort=updated&per_page=6')
            .then(response => response.json())
            .then(async (data) => {
                if (!Array.isArray(data)) {
                    console.error("Грешка от GitHub (вероятно лимит):", data.message);
                    setProjects([]); // Задаваме празен масив, за да не гърми страницата
                    setIsLoading(false);
                    return; // Прекратяваме изпълнението
                }

                const myRepos = data.filter(repo => !repo.fork);

                // 2. Правим нова заявка за всеки отделен проект, за да му вземем ВСИЧКИ езици
                const reposWithAllLanguages = await Promise.all(
                    myRepos.map(async (repo) => {
                        try {
                            const langResponse = await fetch(repo.languages_url);
                            const langData = await langResponse.json();
                            
                            // Обектът langData изглежда така: { "JavaScript": 5000, "HTML": 1200 }
                            // Взимаме само ключовете (имената на езиците)
                            const languages = Object.keys(langData);
                            
                            // Обединяваме автоматичните езици и ръчните тагове (topics), 
                            // като използваме Set, за да премахнем евентуални дублирания
                            const allTech = Array.from(new Set([...languages, ...(repo.topics || [])]));

                            return {
                                title: repo.name.replace(/-/g, ' '),
                                description: repo.description || 'Този проект няма добавено описание в GitHub.',
                                imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
                                technologies: allTech.length > 0 ? allTech : ['Code'],
                                projectUrl: repo.html_url
                            };
                        } catch (error) {
                            console.error(`Грешка при езиците на ${repo.name}:`, error);
                            // Fallback план, ако нещо се обърка с втората заявка
                            return {
                                title: repo.name.replace(/-/g, ' '),
                                description: repo.description || 'Този проект няма добавено описание.',
                                imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
                                technologies: repo.language ? [repo.language] : ['Code'],
                                projectUrl: repo.html_url
                            };
                        }
                    })
                );

                // 3. Запазваме напълно попълнените проекти
                setProjects(reposWithAllLanguages);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Грешка при изтегляне на проектите:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-emerald-950 dark:text-emerald-50 border-b-4 border-emerald-500 inline-block pb-2">
                Моите проекти
            </h2>

            {/* Проверка дали данните се зареждат */}
            {isLoading ? (
                <div className="text-center text-xl text-emerald-950 dark:text-emerald-50">
                    Зареждане на проектите от GitHub...
                </div>
            ) : (
                /* Мрежа с генерираните картички */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            technologies={project.technologies}
                            projectUrl={project.projectUrl}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}