import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Confidentialite({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Politique de confidentialité - Rlyeh' : 'Privacy Policy - Rlyeh'}</title>
        <meta name="description" content="Politique de confidentialité de Rlyeh SASU." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">
        {lang === 'fr' ? "Politique de confidentialité" : "Privacy Policy"}
      </h1>

      <div className="max-w-3xl text-justify text-base space-y-4 text-gray-700 dark:text-gray-300">
        {lang === 'fr' ? (
          <>
            <p>Nous attachons une grande importance à la protection de vos données personnelles.</p>
            <p>Les données collectées via notre formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais revendues.</p>
            <p>Nous utilisons également des cookies pour améliorer votre expérience et réaliser des statistiques anonymes via Google Analytics.</p>
            <p>Vous pouvez exercer vos droits d’accès, de rectification, d’effacement et d’opposition à tout moment en écrivant à : contact@rlyeh.fr</p>
            <p>En cas de réclamation, vous pouvez saisir la CNIL : https://www.cnil.fr/fr/plaintes</p>
          </>
        ) : (
          <>
            <p>We highly value the protection of your personal data.</p>
            <p>Data collected via our contact form is used solely to respond to your inquiries and is never sold.</p>
            <p>We also use cookies to improve your experience and perform anonymous statistics via Google Analytics.</p>
            <p>You can exercise your rights of access, rectification, deletion, and opposition at any time by emailing: contact@rlyeh.fr</p>
            <p>For complaints, you can contact the CNIL: https://www.cnil.fr/en/contact-cnil</p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}