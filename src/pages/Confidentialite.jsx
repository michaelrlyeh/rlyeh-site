import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Confidentialite({ lang }) {
  return (
    <div className="flex flex-col items-center min-h-screen pt-32 p-8 text-gray-800 dark:text-gray-300 bg-white dark:bg-black">
      {/* ✅ Ajout de pt-32 = padding-top: 8rem (128px) pour descendre le contenu sous la navbar */}

      <Helmet>
        <title>{lang === 'fr' ? 'Politique de confidentialité - Rlyeh' : 'Privacy Policy - Rlyeh'}</title>
        <meta name="description" content="Notre politique de confidentialité pour la protection de vos données personnelles." />
      </Helmet>

      {/* Grand titre */}
      <h1 className="text-5xl font-bold mb-8 text-center">
        {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
      </h1>

      {/* Texte */}
      <div className="max-w-3xl text-justify leading-relaxed space-y-6">
        {lang === 'fr' ? (
          <>
            <p>Nous attachons une importance particulière à la protection de vos données personnelles et au respect de votre vie privée.</p>
            <p>Vos informations sont utilisées uniquement pour améliorer nos services et ne sont jamais vendues à des tiers.</p>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
            <p>Pour toute demande, contactez-nous à : <a href="mailto:contact@rlyeh.fr" className="text-blue-500 underline">contact@rlyeh.fr</a>.</p>
          </>
        ) : (
          <>
            <p>We are committed to protecting your personal data and respecting your privacy.</p>
            <p>Your information is used solely to improve our services and is never sold to third parties.</p>
            <p>In accordance with GDPR, you have the right to access, correct, and delete your data at any time.</p>
            <p>For any inquiries, contact us at: <a href="mailto:contact@rlyeh.fr" className="text-blue-400 underline">contact@rlyeh.fr</a>.</p>
          </>
        )}
      </div>

      {/* Lien retour */}
      <Link to="/" className="mt-8 text-blue-500 hover:underline text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}