export default function TechStack() {
    const frontendTech = [
        { name: 'React', src: 'https://skillicons.dev/icons?i=react' },
        { name: 'JavaScript', src: 'https://skillicons.dev/icons?i=js' },
        { name: 'Tailwind CSS', src: 'https://skillicons.dev/icons?i=tailwind' },
        { name: 'HTML5', src: 'https://skillicons.dev/icons?i=html' },
        { name: 'CSS3', src: 'https://skillicons.dev/icons?i=css' },
    ];

    const backendTech = [
        { name: 'Python', src: 'https://skillicons.dev/icons?i=py' },
        { name: 'FastAPI', src: 'https://skillicons.dev/icons?i=fastapi' },
        { name: 'C#', src: 'https://skillicons.dev/icons?i=cs' },
        { name: '.NET', src: 'https://skillicons.dev/icons?i=dotnet' },
        { name: 'Java', src: 'https://skillicons.dev/icons?i=java' },
        { name: 'C', src: 'https://skillicons.dev/icons?i=c' },
        { name: 'C++', src: 'https://skillicons.dev/icons?i=cpp' },
        { name: 'MySQL', src: 'https://skillicons.dev/icons?i=mysql' },
    ];

    const toolsAndDesign = [
        { name: 'Git & GitHub', src: 'https://skillicons.dev/icons?i=github' }, 
        { name: 'VS Code', src: 'https://skillicons.dev/icons?i=vscode' },
        { name: 'Linux', src: 'https://skillicons.dev/icons?i=linux' },
        { name: 'Figma', src: 'https://skillicons.dev/icons?i=figma' },
        { name: 'Photoshop', src: 'https://skillicons.dev/icons?i=ps' },
        { name: 'Illustrator', src: 'https://skillicons.dev/icons?i=ai' },
        { name: 'GIMP', src: 'https://skillicons.dev/icons?i=gimp' },
        { name: 'Blender', src: 'https://skillicons.dev/icons?i=blender' },
        { name: 'Unity', src: 'https://skillicons.dev/icons?i=unity' },
    ];

    const TechBadge = ({ item }) => (
        <span className="flex items-center gap-2 px-4 py-2 font-medium rounded-lg bg-emerald-200/50 text-emerald-950 dark:bg-emerald-900/80 dark:text-emerald-50 border border-emerald-300/50 dark:border-emerald-700/60 hover:border-emerald-400/50 dark:hover:border-emerald-500 transition-colors cursor-default shadow-sm">
            <img src={item.src} alt={item.name} className="w-6 h-6 drop-shadow-sm" />
            {item.name}
        </span>
    );

    return (
        <section id="tech-stack" className="w-full max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-emerald-950 dark:text-emerald-50 border-b-4 border-emerald-500 inline-block pb-2">
                Технологичен Стек
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Frontend */}
                <div className="bg-emerald-100/40 dark:bg-emerald-900/20 p-8 rounded-2xl shadow-sm border border-emerald-200/50 dark:border-emerald-800/40">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {frontendTech.map((tech, index) => (
                            <TechBadge key={index} item={tech} />
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div className="bg-emerald-100/40 dark:bg-emerald-900/20 p-8 rounded-2xl shadow-sm border border-emerald-200/50 dark:border-emerald-800/40">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Backend</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {backendTech.map((tech, index) => (
                            <TechBadge key={index} item={tech} />
                        ))}
                    </div>
                </div>

                {/* Инструменти & Дизайн */}
                <div className="bg-emerald-100/40 dark:bg-emerald-900/20 p-8 rounded-2xl shadow-sm border border-emerald-200/50 dark:border-emerald-800/40">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Инструменти & Дизайн</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {toolsAndDesign.map((tech, index) => (
                            <TechBadge key={index} item={tech} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}