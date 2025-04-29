import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ImgProjet from '../img/_img05.webp';

export default function Projet({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Gestion de Projet - Rlyeh' : 'Project Management - Rlyeh'}</title>
        <meta name="description" content={lang === 'fr'
          ? "Direction de projet, gestion budgétaire et coordination de prestataires."
          : "Project direction, budget management, and supplier coordination."
        } />
        <link rel="canonical" href="https://www.rlyeh.fr/services/projet" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={lang === 'fr' ? "Gestion de Projet - Rlyeh" : "Project Management - Rlyeh"} />
        <meta property="og:description" content={lang === 'fr'
          ? "Pilotage stratégique et gouvernance projet transparente pour vos opérations."
          : "Strategic project management and transparent governance for your operations."
        } />
        <meta property="og:url" content="https://www.rlyeh.fr/services/projet" />
        <meta property="og:image" content="https://www.rlyeh.fr/img/_img05.webp" />
      </Helmet>

      <img src={ImgProjet} alt="Projet" className="w-96 h-auto mb-6 rounded-xl shadow-lg" />
      <h1 className="text-4xl font-bold mb-6">{lang === 'fr' ? "Direction de projet et accompagnement global" : "Project Management and Full Support"}</h1>

      <div className="max-w-3xl text-justify text-base text-gray-700 dark:text-gray-300 space-y-4">
        {lang === 'fr' ? (
          <>
            <p>Rlyeh prend en charge la direction complète de vos projets stratégiques.</p>
            <p>Nous assurons la définition des besoins, le pilotage du planning, la gestion du budget et la coordination entre prestataires.</p>
            <p>Notre gouvernance projet est transparente et adaptée à vos objectifs de livraison.</p>
          </>
        ) : (
          <>
            <p>Rlyeh fully manages your strategic projects.</p>
            <p>We handle needs definition, planning, budget management, and provider coordination.</p>
            <p>Our project governance is transparent and tailored to your delivery objectives.</p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}