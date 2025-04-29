import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ImgIngenierie from '../img/_img03.webp';

export default function Ingenierie({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Ingénierie - Rlyeh' : 'Engineering - Rlyeh'}</title>
        <meta name="description" content={lang === 'fr'
          ? "Solutions techniques sur-mesure pour infrastructures médias."
          : "Tailored technical solutions for media infrastructures."
        } />
        <link rel="canonical" href="https://www.rlyeh.fr/services/ingenierie" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={lang === 'fr' ? "Ingénierie - Rlyeh" : "Engineering - Rlyeh"} />
        <meta property="og:description" content={lang === 'fr'
          ? "Intégration de solutions techniques fiables pour environnements exigeants."
          : "Reliable technical solutions for demanding environments."
        } />
        <meta property="og:url" content="https://www.rlyeh.fr/services/ingenierie" />
        <meta property="og:image" content="https://www.rlyeh.fr/img/_img03.webp" />
      </Helmet>

      <img src={ImgIngenierie} alt="Ingénierie" className="w-96 h-auto mb-6 rounded-xl shadow-lg" />
      <h1 className="text-4xl font-bold mb-6">{lang === 'fr' ? "Fourniture de solutions techniques sur-mesure" : "Provision of Tailored Technical Solutions"}</h1>

      <div className="max-w-3xl text-justify text-base text-gray-700 dark:text-gray-300 space-y-4">
        {lang === 'fr' ? (
          <>
            <p>Nous sélectionnons, intégrons et déployons des solutions techniques complètes pour vos infrastructures médias.</p>
            <p>Grâce à des partenariats solides avec les principaux fabricants, nous fournissons des équipements adaptés aux environnements exigeants.</p>
            <p>Notre équipe vous accompagne de la définition du besoin à la mise en service complète de vos solutions techniques.</p>
          </>
        ) : (
          <>
            <p>We select, integrate, and deploy complete technical solutions for your media infrastructures.</p>
            <p>Thanks to strong partnerships with leading manufacturers, we provide equipment suited for demanding environments.</p>
            <p>Our team supports you from the definition phase to the full deployment and commissioning of your solutions.</p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}