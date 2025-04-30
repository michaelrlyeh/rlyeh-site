import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Legal({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Mentions Légales - Rlyeh' : 'Legal Notice - Rlyeh'}</title>
        <meta name="description" content="Informations légales de l'entreprise Rlyeh SASU." />
        <link rel="canonical" href="https://www.rlyeh.fr/legal" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">{lang === 'fr' ? "Mentions Légales" : "Legal Notice"}</h1>

      <div className="max-w-3xl text-justify text-base text-gray-700 dark:text-gray-300 space-y-4">
        {lang === 'fr' ? (
          <>
            <p>RLYEH SASU, société par actions simplifiée au capital de 2500€</p>
            <p>SIRET : 948 219 258 00027 — TVA Intra : FR90948219258</p>
            <p>Siège social : Chatillon, France</p>
            <p>Directeur de la publication : Michael Benhamou</p>
            <p>Hébergeur : IONOS SARL, 7 place de la Gare, 57200 Sarreguemines — France</p>
            <p>Pour toute question, contactez : <a href="mailto:contact@rlyeh.fr" className="text-blue-500 hover:underline">contact@rlyeh.fr</a></p>
          </>
        ) : (
          <>
            <p>RLYEH SASU, French simplified joint stock company with a capital of €2500</p>
            <p>SIRET: 948 219 258 00027 — VAT: FR90948219258</p>
            <p>Headquarters: Chatillon, France</p>
            <p>Publication Director: Michael Benhamou</p>
            <p>Hosting: IONOS - 7 place de la Gare, 57200 Sarreguemines, France</p>
            <p>For any questions, contact: <a href="mailto:contact@rlyeh.fr" className="text-blue-500 hover:underline">contact@rlyeh.fr</a></p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}