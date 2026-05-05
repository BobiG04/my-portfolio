import portfolioPic from '../assets/images/portfolio-pic_t.png';
import useLanguage from '../hooks/useLanguage.jsx';

export default function HeroSection() {
    const { lang } = useLanguage();

    const t = {
        en: {
            greeting: 'Hello!',
            description: 'Welcome to my portfolio! I am a passionate programmer eager to build amazing things. This is a great spot to add a short bio about what you do and what technologies you love.'
        },
        bg: {
            greeting: 'Здравейте!',
            description: 'Добре дошли в моето портфолио! Аз съм страстен програмист, готов да създава невероятни неща. Това е чудесно място да добавите кратка биография за това, което правите и какви технологии харесвате.'
        }
    };

    return(
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-stretch justify-between">
        {/* Left side: Introduction Text */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 py-12 md:py-0">
          <h2 className="text-5xl md:text-6xl font-bold">{t[lang].greeting}</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            {t[lang].description}
          </p>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-end items-end">
          <img src={portfolioPic} alt="Profile" className="h-[60vh] md:h-[calc(100vh-80px)] w-full object-contain object-bottom md:object-right-bottom drop-shadow-2xl" />
        </div>
      </main>
    );
}