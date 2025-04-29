import { FaLinkedin } from 'react-icons/fa';

export default function Footer({ lang }) {
  const currentYear = new Date().getFullYear(); // Année dynamique

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-6 md:space-y-0">
        
        {/* Informations légales à gauche */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          
          {/* Ligne 1 : Société + Contact */}
          <div className="flex flex-wrap gap-2 items-center">
            <p className="font-bold">RLYEH SASU</p>
            <span>-</span>
            <a
              href="mailto:contact@rlyeh.fr"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              title="Envoyer un email à RLYEH"
            >
              contact@rlyeh.fr
            </a>
          </div>

          {/* Ligne 2 : SIRET */}
          <div>
            <p>SIRET : 948 219 258 00027</p>
          </div>

          {/* Ligne 3 : TVA */}
          <div>
            <p>TVA INTRA : FR 90948219258</p>
          </div>
        </div>

        {/* LinkedIn + Année centrée */}
        <div className="flex flex-col items-center text-center space-y-2">
          <a
            href="https://www.linkedin.com/in/michaelbenhamou/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-transform duration-300 hover:scale-110"
            title="Profil LinkedIn de Michael Benhamou"
          >
            <FaLinkedin size={28} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>

          {/* © Année */}
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            © {currentYear} RLYEH SASU
          </div>
        </div>

      </div>
    </footer>
  );
}