import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ImgProjet from '../img/_img05.webp';

export default function Projet({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Gestion de projet - Rlyeh' : 'Project Management - Rlyeh'}</title>
        <meta name="description" content="Direction de projet, pilotage, coordination et livraison de vos projets stratégiques." />
      </Helmet>

      <img src={ImgProjet} alt="Projet" className="w-96 h-auto mb-6 rounded-xl shadow-lg" />
      <h1 className="text-4xl font-bold mb-6">{lang === 'fr' ? "Direction de projet et accompagnement global" : "Project Management and Full Support"}</h1>

      <div className="max-w-3xl text-justify text-base text-gray-700 dark:text-gray-300 space-y-4">
        {lang === 'fr' ? (
          <>
            <p>Rlyeh prend en charge la direction complète de vos projets stratégiques.</p>
            <p>Nous intervenons dès la définition des besoins, en assurant le pilotage du planning, du budget, et la coordination entre prestataires.</p>
            <p>Nous vous garantissons une gouvernance projet transparente, adaptée à vos contraintes et objectifs de livraison.</p>
          </>
        ) : (
          <>
            <p>Rlyeh fully manages your strategic projects.</p>
            <p>We intervene from the needs definition phase, ensuring planning, budgeting, and coordination among all stakeholders.</p>
            <p>We guarantee transparent project governance, tailored to your constraints and delivery goals.</p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}