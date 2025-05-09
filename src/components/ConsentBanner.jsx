import { useEffect, useState } from "react";

// ✅ Export de la fonction pour usage externe
export function resetConsent() {
  localStorage.removeItem('cookie_consent');
  window.location.reload(); // recharge la page pour afficher à nouveau le bandeau
}

export default function ConsentBanner({ lang }) {
  const [visible, setVisible] = useState(false);

  const translations = {
    fr: {
      message: "Nous utilisons des cookies pour analyser notre trafic. Acceptez-vous ?",
      accept: "Accepter",
      refuse: "Refuser"
    },
    en: {
      message: "We use cookies to analyze our traffic. Do you accept?",
      accept: "Accept",
      refuse: "Refuse"
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WWN4PGZNEP');
  };

  const refuseCookies = () => {
    localStorage.setItem('cookie_consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white text-sm p-4 flex flex-col md:flex-row justify-between items-center z-50">
      <div className="mb-2 md:mb-0">
        {translations[lang]?.message || translations.fr.message}
      </div>
      <div className="flex gap-4">
        <button
          onClick={acceptCookies}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white text-sm"
        >
          {translations[lang]?.accept || translations.fr.accept}
        </button>
        <button
          onClick={refuseCookies}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white text-sm"
        >
          {translations[lang]?.refuse || translations.fr.refuse}
        </button>
      </div>
    </div>
  );
}