export default function ProjectCard({ title, description, imageUrl, technologies, projectUrl }) {
    return (
        <div 
            onClick={() => window.location.href = projectUrl}
            className="flex flex-col bg-white dark:bg-emerald-900 rounded-2xl shadow-lg overflow-hidden border border-emerald-200 dark:border-emerald-800 cursor-pointer group hover:-translate-y-2 transition-transform duration-300"
        >
            {/* Снимка на проекта */}
            <div className="h-56 w-full overflow-hidden bg-emerald-200 dark:bg-emerald-950 relative">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Лек потъмняващ ефект при посочване */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Текстова част */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 text-emerald-950 dark:text-emerald-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {title}
                </h3>
                <p className="text-emerald-900 dark:text-emerald-100/80 mb-6 flex-1">
                    {description}
                </p>

                {/* Тагове с технологии */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}