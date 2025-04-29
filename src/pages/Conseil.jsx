import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ImgConseil from '../img/_img01.webp';

export default function Conseil({ lang }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 text-center">
      <Helmet>
        <title>{lang === 'fr' ? 'Conseil stratégique - Rlyeh' : 'Strategic Consulting - Rlyeh'}</title>
        <meta name="description" content="Optimisation des têtes de réseau et stratégies de diffusion." />
      </Helmet>

      <img src={ImgConseil} alt="Conseil" className="w-96 h-auto mb-6 rounded-xl shadow-lg" />
      <h1 className="text-4xl font-bold mb-6">{lang === 'fr' ? "Optimisation des têtes de réseau et stratégies de diffusion" : "Optimization of Network Heads and Broadcast Strategies"}</h1>

      <div className="max-w-3xl text-justify text-base text-gray-700 dark:text-gray-300 space-y-4">
        {lang === 'fr' ? (
          <>
            <p>Chez Rlyeh, nous vous accompagnons dans la construction et la modernisation de vos infrastructures de diffusion.</p>
            <p>Notre expertise couvre toutes les étapes de la conception d'une tête de réseau, en intégrant les dernières évolutions technologiques : fibre optique, IP, virtualisation, Cloud.</p>
            <p>Nous vous aidons à définir une stratégie de diffusion performante adaptée à vos besoins spécifiques : terrestre (DTT), satellite, IP, OTT.</p>
            <p>Notre approche optimise vos coûts, garantit votre qualité de service et anticipe les évolutions futures.</p>
          </>
        ) : (
          <>
            <p>At Rlyeh, we assist you in building and modernizing your broadcast infrastructures.</p>
            <p>Our expertise covers all stages of head-end design, integrating the latest technologies: fiber optics, IP, virtualization, Cloud.</p>
            <p>We help define high-performance broadcast strategies tailored to your specific needs: terrestrial (DTT), satellite, IP, OTT.</p>
            <p>Our approach focuses on cost optimization, service quality assurance, and future-proofing your infrastructure.</p>
          </>
        )}
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline block text-sm">
        ← {lang === 'fr' ? "Retour à l'accueil" : "Back to home"}
      </Link>
    </div>
  );
}