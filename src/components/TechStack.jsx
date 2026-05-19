export default function TechStack() {
    // 1. Frontend технологии
    const frontendTech = [
        'React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'
    ];

    // 2. Backend & Бази данни (включваме MySQL, заради опита ти с Workbench/Access)
    const backendTech = [
        'Python', 'FastAPI', 'C#', '.NET (Базово)', 'SQL / MySQL', 'VHDL'
    ];

    // 3. Твоят сериозен софтуерен и дизайнерски арсенал
    const toolsAndDesign = [
        'Git & GitHub', 'VS Code', 'Visual Studio', 'Linux Mint', 
        'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 
        'Unity', 'Trello & Milanote'
    ];

    return (
        <section id="tech-stack" className="w-full max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-emerald-950 dark:text-emerald-50 border-b-4 border-emerald-700 inline-block pb-2">
                Технологичен Стек
            </h2>

            {/* Мрежа за Frontend и Backend */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Frontend Картичка */}
                <div className="bg-white dark:bg-emerald-900/30 p-8 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800/50">
                    <div className="flex items-center gap-4 mb-6">
                        <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {frontendTech.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 font-medium rounded-lg bg-emerald-50 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend Картичка */}
                <div className="bg-white dark:bg-emerald-900/30 p-8 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800/50">
                    <div className="flex items-center gap-4 mb-6">
                        <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Backend & Hardware</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {backendTech.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 font-medium rounded-lg bg-emerald-50 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Инструменти & Дизайн (Заема пълната ширина на големи екрани) */}
                <div className="md:col-span-2 bg-white dark:bg-emerald-900/30 p-8 rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-800/50">
                    <div className="flex items-center gap-4 mb-6">
                        <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Инструменти & Дизайн</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {toolsAndDesign.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 font-medium rounded-lg bg-emerald-50 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}