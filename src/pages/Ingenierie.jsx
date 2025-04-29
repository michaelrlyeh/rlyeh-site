import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ImgIngenierie from '../img/_img03.webp';

export default function Ingenierie({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Solutions techniques - Rlyeh' : 'Technical Solutions - Rlyeh'}</title>
        <meta name="description" content="Fourniture de solutions techniques sur-mesure pour les infrastructures médias." />
      </Helmet>

      <img src={ImgIngenierie} alt="Ingénierie" className="w-96 h-auto mb-6 rounded-xl shadow-lg" />
      <h1 className="text-4xl font-bold mb-6">{lang === 'fr' ? "Fourniture de solutions techniques sur-mesure" : "Provision of Tailored Technical Solutions"}</h1>

      <div className="max-w-3xl text-justify text-base text-gray-700 dark:text-gray-300 space-y-4">
        {lang === 'fr' ? (
          <>
            <p>Nous sélectionnons, intégrons et déployons des solutions techniques complètes pour vos infrastructures médias.</p>
            <p>Grâce à nos partenariats avec les principaux fabricants et éditeurs, nous fournissons des équipements adaptés aux environnements exigeants.</p>
            <p>Notre équipe vous accompagne de la définition des besoins jusqu'à l'intégration, la configuration, les tests et la mise en service.</p>
          </>
        ) : (
          <>
            <p>We select, integrate, and deploy complete technical solutions for your media infrastructures.</p>
            <p>Thanks to our partnerships with leading manufacturers and editors, we provide equipment adapted to demanding environments.</p>
            <p>Our team supports you from needs definition through system integration, configuration, testing, and commissioning.</p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}