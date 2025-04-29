import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HomeTiles from './components/HomeTiles';
import Footer from './components/Footer';
import ConsentBanner from './components/ConsentBanner';
import Conseil from './pages/Conseil';
import Ingenierie from './pages/Ingenierie';
import Projet from './pages/Projet';
import Legal from './pages/Legal';
import Confidentialite from './pages/Confidentialite';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('fr');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLang = () => setLang(lang === 'fr' ? 'en' : 'fr');

  return (
    <HelmetProvider>
      <Router>
        <div className={darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}>
          <Navbar lang={lang} toggleLang={toggleLang} toggleDarkMode={toggleDarkMode} />
          <main className="flex flex-col">
            <Routes>
              <Route path="/" element={<HomeTiles lang={lang} />} />
              <Route path="/services/conseil" element={<Conseil lang={lang} />} />
              <Route path="/services/ingenierie" element={<Ingenierie lang={lang} />} />
              <Route path="/services/projet" element={<Projet lang={lang} />} />
              <Route path="/legal" element={<Legal lang={lang} />} />
              <Route path="/confidentialite" element={<Confidentialite lang={lang} />} />
            </Routes>
          </main>
          <Footer lang={lang} />
          <ConsentBanner lang={lang} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;