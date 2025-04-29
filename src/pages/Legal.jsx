import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Legal({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Mentions légales - Rlyeh' : 'Legal Notice - Rlyeh'}</title>
        <meta name="description" content="Mentions légales de Rlyeh SASU." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">
        {lang === 'fr' ? "Mentions légales" : "Legal Notice"}
      </h1>

      <div className="max-w-3xl text-justify text-base space-y-4 text-gray-700 dark:text-gray-300">
        {lang === 'fr' ? (
          <>
            <p>RLYEH SASU, société par actions simplifiée au capital de 1000€</p>
            <p>SIRET : 948 219 258 00027 — TVA Intra : FR90948219258</p>
            <p>Siège social : Paris, France</p>
            <p>Directeur de la publication : Michael Benhamou</p>
            <p>Hébergeur : IONOS SARL, 7 place de la Gare, 57200 Sarreguemines — France</p>
          </>
        ) : (
          <>
            <p>RLYEH SASU, French simplified joint stock company with a capital of €1000</p>
            <p>SIRET: 948 219 258 00027 — VAT: FR90948219258</p>
            <p>Headquarters: Paris, France</p>
            <p>Publication Director: Michael Benhamou</p>
            <p>Hosting provider: IONOS SARL, 7 place de la Gare, 57200 Sarreguemines — France</p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}