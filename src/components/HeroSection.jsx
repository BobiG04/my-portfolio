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
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Introduction Text */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 py-12 md:py-0 z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">{t[lang].greeting}</h2>
          <p className="text-xl opacity-80 leading-relaxed max-w-lg">
            {t[lang].description}
          </p>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-end w-full h-full">
          <img 
            src={portfolioPic} 
            alt="Profile" 
            className="max-h-[50vh] md:max-h-[75vh] w-auto object-contain drop-shadow-[-2px_-2px_10px_rgba(0,0,0,0.5)] md:pr-8 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] -webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" 
          />
        </div>
      </main>
    );
}