import { Link } from 'react-router-dom';
import ContactForm from "./ContactForm";
import News from "./News";
import { Helmet } from 'react-helmet-async';
import RackAI from '../img/rack_ai.webp';
import ServicesImage from '../img/services_v1.webp';
import NewsImage from '../img/news_ai.webp';
import PictoConseil from '../img/logo_conseil.webp';
import PictoIngineering from '../img/logo_ingineering.webp';
import PictoProjet from '../img/logo_projet.webp';
import React from "react";

const HomeTiles = ({ lang }) => {
  const t = {
    fr: {
      welcome: "Bienvenue",
      services: "Services",
      conseil: "Conseil",
      ingenierie: "Ingénierie",
      projet: "Projet",
      news: "Actualités",
      contact: "Nous contacter",
      conseilDesc: "Conception et accompagnement d'infrastructures informatiques.",
      ingenierieDesc: "Assurez le succès de vos déploiements techniques.",
      projetDesc: "Direction de projet, gestion des fournisseurs et budget."
    },
    en: {
      welcome: "Welcome",
      services: "Services",
      conseil: "Consulting",
      ingenierie: "Engineering",
      projet: "Project",
      news: "News",
      contact: "Contact us",
      conseilDesc: "Design and support of IT infrastructures.",
      ingenierieDesc: "Ensure the success of your technical deployments.",
      projetDesc: "Project management, supplier management and budget oversight."
    }
  };

  const tiles = [
    { id: "presentation", title: t[lang].welcome, bg: true },
    {
      id: "services",
      title: t[lang].services,
      bg: false,
      subsections: [
        { title: t[lang].conseil, icon: PictoConseil, path: "/services/conseil", desc: t[lang].conseilDesc },
        { title: t[lang].ingenierie, icon: PictoIngineering, path: "/services/ingenierie", desc: t[lang].ingenierieDesc },
        { title: t[lang].projet, icon: PictoProjet, path: "/services/projet", desc: t[lang].projetDesc }
      ]
    },
    { id: "actualites", title: t[lang].news, bg: true },
    { id: "contact", title: t[lang].contact, bg: false }
  ];

  return (
    <>
      <Helmet>
        <title>{lang === 'fr' ? 'Bienvenue - Rlyeh' : 'Welcome - Rlyeh'}</title>
        <meta name="description" content="Page d'accueil de Rlyeh, innovation, ingénierie et conseil stratégique pour la diffusion et les médias." />
      </Helmet>

      {tiles.map((tile, index) => (
        <React.Fragment key={tile.id}>
          <section
            id={tile.id}
            className={`relative p-8 min-h-[800px] flex flex-col gap-4 items-center justify-center text-3xl font-bold w-full ${
              !["presentation", "services", "actualites"].includes(tile.id)
                ? (tile.bg ? "bg-gray-200 dark:bg-gray-800" : "bg-white dark:bg-black")
                : ""
            }`}
            style={
              tile.id === "presentation"
                ? { backgroundImage: `url(${RackAI})`, backgroundSize: "cover", backgroundPosition: "center" }
                : tile.id === "services"
                ? { backgroundImage: `url(${ServicesImage})`, backgroundSize: "cover", backgroundPosition: "center" }
                : tile.id === "actualites"
                ? { backgroundImage: `url(${NewsImage})`, backgroundSize: "cover", backgroundPosition: "center" }
                : undefined
            }
          >
            <h2 className="relative z-10 text-6xl mb-4 text-white" style={{ textShadow: "2px 2px 8px black" }}>
              {tile.title}
            </h2>

            {tile.id === "presentation" && (
              <p className="relative z-10 text-lg italic mt-2 text-white opacity-0 animate-fade-in-up" style={{ textShadow: "1px 1px 4px black" }}>
                Smart Media Services to Globalize Your Channels
              </p>
            )}

            {tile.subsections && (
              <div className="flex flex-col gap-4 text-xl mt-4 w-full max-w-md relative z-10">
                {tile.subsections.map((sub, idx) => (
                  <Link
                    to={sub.path}
                    key={idx}
                    className="group relative flex flex-col p-4 rounded-xl shadow-md bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <img src={sub.icon} alt="" className="h-8 w-8" />
                      <span className="text-xl font-semibold">{sub.title}</span>
                    </div>
                    <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 whitespace-pre-line rounded-lg bg-gray-900 text-white text-sm p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 max-w-md text-center">
                      {sub.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {tile.id === "actualites" && (
              <div className="relative z-10 w-full">
                <News lang={lang} />
              </div>
            )}

            {tile.id === "contact" && (
              <div className="relative z-10">
                <ContactForm lang={lang} />
              </div>
            )}
          </section>

          {index < tiles.length - 1 && (
            <div className="h-12 bg-white dark:bg-black"></div>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default HomeTiles;