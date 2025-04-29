// === src/components/Footer.jsx ===

import { FaLinkedin } from 'react-icons/fa';
import packageJson from '../../package.json';

export default function Footer({ lang }) {
  const currentYear = new Date().getFullYear();
  const version = packageJson.version || '1.0.0';

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-6 md:space-y-0">

        {/* Informations légales */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="font-bold">RLYEH SASU</p>
            <span>-</span>
            <a href="mailto:contact@rlyeh.fr" className="text-blue-500 hover:underline">
              contact@rlyeh.fr
            </a>
          </div>
          <div>
            <p>SIRET : 948 219 258 00027</p>
          </div>
          <div>
            <p>TVA INTRA : FR 90948219258</p>
          </div>
          <div>
            <p>{lang === 'fr' ? 'Hébergement' : 'Hosting'} : IONOS, 7 PLACE DE LA GARE, 57200 SARREGUEMINES</p>
          </div>
        </div>

        {/* LinkedIn + Version */}
        <div className="flex flex-col items-center text-center space-y-2">
          <a
            href="https://www.linkedin.com/in/michaelbenhamou/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin size={28} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            © {currentYear} RLYEH SASU - v{version}
          </div>
        </div>

      </div>
    </footer>
  );
}
