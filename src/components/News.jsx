import { useEffect, useState } from 'react';

export default function News({ lang }) {
  const [news, setNews] = useState([]);
  const [expanded, setExpanded] = useState({});

  const t = {
    fr: {
      seeMore: 'Voir plus',
      seeLess: 'Réduire',
      new: 'Nouveau'
    },
    en: {
      seeMore: 'See more',
      seeLess: 'See less',
      new: 'New'
    }
  };

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('https://cms.rlyeh.fr/items/news');
        const data = await response.json();
        if (data.data) {
          setNews(data.data);
        }
      } catch (error) {
        console.error('Erreur de chargement des news:', error);
      }
    }
    fetchNews();
  }, []);

  const isRecent = (publishedAt) => {
    if (!publishedAt) return false;
    const publishedDate = new Date(publishedAt);
    const now = new Date();
    const diffTime = Math.abs(now - publishedDate);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <div
          key={item.id}
          className="relative p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 opacity-0 animate-fadeIn"
        >
          {item.image && (
            <img
              src={`https://cms.rlyeh.fr/assets/${item.image}`}
              alt={item.Title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
          )}

          {isRecent(item.published_at) && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
              🆕 {t[lang].new}
            </span>
          )}

          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{item.Title || '(Sans titre)'}</h3>
            <div className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {expanded[item.id] ? (
                <div dangerouslySetInnerHTML={{ __html: item.content || '(Pas de texte)' }}></div>
              ) : (
                <p>{stripHtml(item.content).slice(0, 200)}...</p>
              )}
            </div>

            {item.content && stripHtml(item.content).length > 200 && (
              <button
                onClick={() => toggleExpanded(item.id)}
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                {expanded[item.id] ? t[lang].seeLess : t[lang].seeMore}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}