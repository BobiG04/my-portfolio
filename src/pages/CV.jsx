// Импортираме PDF файла директно от assets папката
import cvPdf from '../assets/CV/CV_Bogomil_Ivanov.pdf';

export default function CV() {
    return (
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col">
            
            {/* Горен панел: Заглавие и Бутон за изтегляне */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-6 border-b-4 border-emerald-500 pb-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-950 dark:text-emerald-50 mb-2">
                        Автобиография
                    </h1>
                    <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                        Преглед и изтегляне на официалното ми CV в Europass формат
                    </p>
                </div>
                
                {/* Бутон за директно изтегляне - използваме импортираната променлива cvPdf */}
                <a 
                    href={cvPdf} 
                    download="CV_Bogomil_Ivanov.pdf"
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm self-start sm:self-auto whitespace-nowrap"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Изтегли PDF
                </a>
            </div>

            {/* Контейнер за визуализация на страниците от PDF файла */}
            <div className="w-full bg-emerald-100/40 dark:bg-emerald-900/10 p-4 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/40 shadow-inner h-[75vh] min-h-[600px] lg:min-h-[850px]">
                <object
                    data={cvPdf} /* Използваме импортираната променлива тук */
                    type="application/pdf"
                    className="w-full h-full rounded-xl"
                >
                    {/* Fallback интерфейс: Покажи това, ако браузърът блокира вграждането на PDF */}
                    <div className="flex flex-col items-center justify-center h-full py-12 text-center px-4">
                        <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-500 mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <h3 className="text-xl font-bold text-emerald-950 dark:text-emerald-50 mb-2">
                            Директният преглед не се поддържа
                        </h3>
                        <p className="text-emerald-800/80 dark:text-emerald-300/80 text-sm mb-6 max-w-md font-medium">
                            Вашият браузър или устройство не позволява вграждане на PDF документи. Можете да отворите автобиографията в нов раздел или да я изтеглите директно.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href={cvPdf} 
                                target="_blank"
                                rel="noreferrer"
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold transition-colors text-sm shadow-sm"
                            >
                                Отвори в нов раздел
                            </a>
                            <a 
                                href={cvPdf} 
                                download="CV_Bogomil_Ivanov.pdf"
                                className="bg-emerald-200/60 text-emerald-950 hover:bg-emerald-200 dark:bg-emerald-950 dark:text-emerald-100 dark:hover:bg-emerald-900 px-5 py-2.5 rounded-lg font-bold transition-colors text-sm border border-emerald-300/50 dark:border-emerald-800/60"
                            >
                                Изтегли файла
                            </a>
                        </div>
                    </div>
                </object>
            </div>
            
        </main>
    );
}