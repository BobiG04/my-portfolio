// Масив с всички твои проекти. Когато добавиш нов тук, 
// той автоматично ще се появи на сайта!
const projectsData = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Кратко описание на технологиите и целта на първия ти проект.',
    tech: ['React', 'Tailwind'],
    image: '[Снимка 1]'
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'Кратко описание на втория интересен проект, по който си работил.',
    tech: ['Vite', 'API', 'JavaScript'],
    image: '[Снимка 2]'
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Трети супер як проект, който предстои да направиш.',
    tech: ['HTML', 'CSS'],
    image: '[Снимка 3]'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10 text-center">Избрани Проекти</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Тук магията се случва: въртим масива с .map() */}
          {projectsData.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                {project.image}
              </div>
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {/* Въртим и масива с технологиите за всеки проект */}
                {project.tech.map((techItem, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;