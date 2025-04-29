import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import Logo from '../img/Logo_16_148.png';

export default function Navbar({ lang, toggleLang, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);  // Fermer menu burger sur changement de page
    setServicesOpen(false);
  }, [location]);

  return (
    <header className="flex justify-between items-center shadow-md bg-white dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 p-2">
      <Link to="/">
        <img src={Logo} alt="Logo Rlyeh" className="h-14 object-contain cursor-pointer" />
      </Link>

      <div className="flex gap-2 items-center">
        <Button variant="ghost" onClick={toggleLang}>
          {lang === "fr" ? "EN" : "FR"}
        </Button>
        <Button variant="ghost" onClick={toggleDarkMode}>
          🌓
        </Button>
        <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </Button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-3 z-50">

          {/* Présentation */}
          <Link to="/" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
            {lang === "fr" ? "Présentation" : "Welcome"}
          </Link>

          {/* Bouton Services qui ouvre un sous-menu */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="text-left hover:underline text-gray-900 dark:text-white"
          >
            {lang === "fr" ? "Services ▾" : "Services ▾"}
          </button>

          {servicesOpen && (
            <div className="flex flex-col gap-2 ml-4">
              <Link to="/services/conseil" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
                {lang === "fr" ? "Conseil" : "Consulting"}
              </Link>
              <Link to="/services/ingenierie" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
                {lang === "fr" ? "Ingénierie" : "Engineering"}
              </Link>
              <Link to="/services/projet" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
                {lang === "fr" ? "Projet" : "Project"}
              </Link>
            </div>
          )}

          {/* Actualités */}
          <a href="/#actualites" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
            {lang === "fr" ? "Actualités" : "News"}
          </a>

          {/* Contact */}
          <a href="/#contact" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
            {lang === "fr" ? "Contact" : "Contact"}
          </a>

          {/* Mentions légales */}
          <Link to="/legal" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
            {lang === "fr" ? "Mentions légales" : "Legal Notice"}
          </Link>

          {/* Politique de confidentialité */}
          <Link to="/confidentialite" className="hover:underline text-gray-900 dark:text-white" onClick={() => setMenuOpen(false)}>
            {lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
          </Link>

        </div>
      )}
    </header>
  );
}