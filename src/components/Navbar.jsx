import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Logo from '../img/Logo_16_148.png';

export default function Navbar({ lang, toggleLang, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { id: 'presentation', label: { fr: 'Présentation', en: 'Welcome' }, path: "/" },
    { id: 'services', label: { fr: 'Services', en: 'Services' }, path: "#" },
    { id: 'actualites', label: { fr: 'Actualités', en: 'News' }, path: "#actualites" },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact' }, path: "#contact" },
    { id: 'legal', label: { fr: 'Mentions légales', en: 'Legal notice' }, path: "/legal" },
    { id: 'confidentialite', label: { fr: 'Politique de confidentialité', en: 'Privacy Policy' }, path: "/confidentialite" }
  ];

  const serviceSubItems = [
    { label: { fr: 'Conseil', en: 'Consulting' }, path: "/services/conseil" },
    { label: { fr: 'Ingénierie', en: 'Engineering' }, path: "/services/ingenierie" },
    { label: { fr: 'Projet', en: 'Project' }, path: "/services/projet" }
  ];

  return (
    <header className="flex justify-between items-center shadow-md bg-white dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 p-4">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo Rlyeh" className="h-14 object-contain" />
      </Link>

      {/* Boutons à droite */}
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

      {/* Menu déroulant */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-4 w-64">
          {navItems.map((item) => (
            item.id === "services" ? (
              <div key="services" className="flex flex-col">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between text-left font-bold text-gray-900 dark:text-white hover:underline"
                >
                  {item.label[lang]}
                  <span className="text-sm ml-2">{servicesOpen ? "▲" : "▼"}</span>
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {serviceSubItems.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-700 dark:text-gray-300 hover:underline"
                      >
                        {sub.label[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="hover:underline text-gray-900 dark:text-white"
              >
                {item.label[lang]}
              </Link>
            )
          ))}
        </div>
      )}
    </header>
  );
}