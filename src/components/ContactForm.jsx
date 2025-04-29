// === Fichier corrigé : src/components/ContactForm.jsx ===

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ lang }) {
  const [sent, setSent] = useState(false);

  const t = {
    fr: {
      lead: "Vous avez une question ?\nÉcrivez-nous un message.",
      name: "Nom",
      company: "Société",
      email: "Email",
      phone: "Téléphone",
      message: "Votre message",
      newsletter: "J’accepte de recevoir la newsletter (3 à 4 fois par an)",
      submit: "Envoyer",
      success: "Merci, votre message a bien été envoyé !",
    },
    en: {
      lead: "Have a question?\nSend us a message.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Your message",
      newsletter: "I agree to receive the newsletter (3-4 times a year)",
      submit: "Send",
      success: "Thank you, your message has been sent!",
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await emailjs.sendForm(
        'service_xl36par',
        'template_tl2j1ac',
        e.target,
        'VgkUpERBZ0BsvowBl'
      );
      if (res.status === 200) setSent(true);
    } catch (err) {
      console.error("Erreur lors de l'envoi :", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700">
      <p className="text-center text-md text-gray-700 dark:text-gray-300 leading-snug mb-6">
        {t[lang].lead.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </p>

      {!sent ? (
        <form onSubmit={handleSubmit} className="grid gap-4 text-sm" autoComplete="off">
          <input name="name" type="text" placeholder={t[lang].name} required className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#002147] focus:outline-none" />
          <input name="company" type="text" placeholder={t[lang].company} className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600" />
          <input name="email" type="email" placeholder={t[lang].email} required className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600" />
          <input name="phone" type="tel" placeholder={t[lang].phone} className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600" />
          <textarea name="message" placeholder={t[lang].message} required rows="4" className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"></textarea>

          {/* ➔ Correction pour EmailJS : forçage d'une adresse destinataire */}
          <input type="hidden" name="to_email" value="michael@rlyeh.fr" />

          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
            <input name="newsletter_consent" type="checkbox" className="w-4 h-4" />
            {t[lang].newsletter}
          </label>

          <button
            type="submit"
            className="bg-[#002147] hover:bg-[#003366] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
          >
            {t[lang].submit}
          </button>
        </form>
      ) : (
        <p className="text-center text-green-500 font-medium">{t[lang].success}</p>
      )}
    </div>
  );
}