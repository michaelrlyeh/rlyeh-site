import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ lang }) {
  const [formSent, setFormSent] = useState(false);
  const formRef = useRef();

  const t = {
    fr: {
      title: "Nous contacter",
      name: "Nom",
      company: "Société",
      phone: "Téléphone",
      email: "Email",
      message: "Votre message",
      subscribe: "Je souhaite recevoir la newsletter",
      send: "Envoyer",
      success: "Merci, votre message a été envoyé avec succès !"
    },
    en: {
      title: "Contact us",
      name: "Name",
      company: "Company",
      phone: "Phone",
      email: "Email",
      message: "Your message",
      subscribe: "I would like to receive the newsletter",
      send: "Send",
      success: "Thank you, your message has been sent successfully!"
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    emailjs.sendForm('service_xl36par', 'template_olcrakt', form, 'VgkUpERBZ0BsvowBl')
      .then(() => {
        emailjs.send('service_xl36par', 'template_tl2j1ac', {
          to_email: form.email.value,
          name: form.name.value,
        }, 'VgkUpERBZ0BsvowBl')
        .then(() => {
          console.log('Email de remerciement envoyé.');
        })
        .catch((error) => {
          console.error('Erreur remerciement:', error.text);
        });

        setFormSent(true);
      })
      .catch((error) => {
        console.error('Erreur formulaire:', error.text);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[800px] text-center">
      {!formSent ? (
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-2xl bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{t[lang].title}</h2>

          <input type="text" name="name" placeholder={t[lang].name} required className="p-3 rounded-md bg-white dark:bg-gray-800" />
          <input type="text" name="company" placeholder={t[lang].company} className="p-3 rounded-md bg-white dark:bg-gray-800" />
          <input type="tel" name="phone" placeholder={t[lang].phone} className="p-3 rounded-md bg-white dark:bg-gray-800" />
          <input type="email" name="email" placeholder={t[lang].email} required className="p-3 rounded-md bg-white dark:bg-gray-800" />
          <textarea name="message" placeholder={t[lang].message} required rows="4" className="p-3 rounded-md bg-white dark:bg-gray-800"></textarea>

          <label className="flex items-center gap-2">
            <input type="checkbox" name="newsletter_consent" className="w-4 h-4" />
            <span className="text-sm">{t[lang].subscribe}</span>
          </label>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            {t[lang].send}
          </button>
        </form>
      ) : (
        <div className="text-green-500 text-xl">{t[lang].success}</div>
      )}
    </div>
  );
}