# 🛠️ Changelog - Rlyeh.fr

Toutes les modifications importantes de ce projet seront documentées ici.

## [1.0.0] - 2025-04-28

- Lancement officiel du site Rlyeh.fr 🚀
- Développement complet avec React + Vite
- Intégration Tailwind CSS pour le design responsive
- Ajout du mode sombre 🌙
- Navigation multilingue FR 🇫🇷 / EN 🇬🇧
- Gestion des actualités via Directus CMS
- Formulaire de contact et d'inscription à la newsletter
- Intégration Google Analytics + SEO de base
- Politique de confidentialité et mentions légales
- Déploiement sur serveur IONOS

---

## Format de version

Ce projet utilise le format **SemVer** :
- MAJOR.MINOR.PATCH (ex: 1.0.0)

---

## Prochaines évolutions prévues

- 🎯 Optimisation SEO avancée
- 🎨 Refonte légère du formulaire pour un meilleur UX
- 🚀 Déploiement automatique via GitHub Actions (optionnel)

## [1.0.1] - 2025-04-28

- Injection automatique de la version Git + commit dans le footer
- Ajout d'un fichier CHANGELOG.md
- Première préparation du système de versioning

# 📋 CHANGELOG - Rlyeh Website

## [1.0.2] - 2025-04-28
### Added
- Mise en place du sous-menu visible avec flèche dans la Navbar ("Services" → sous-sections).
- Ajout de la gestion SEO dynamique (Helmet) pour chaque page importante.
- Titre ajouté et corrigé sur la page "Privacy Policy".
- Formulaire de contact corrigé avec EmailJS, gestion confirmation utilisateur et newsletter.
- Ajout automatique du scroll (`pt-32`) sous la Navbar pour éviter l'effet de chevauchement.
- Responsive complet validé pour mobile / tablette / desktop.

### Changed
- Nouveau design du formulaire de contact : arrondi des champs, couleurs cohérentes avec la charte graphique, meilleure lisibilité.
- Nettoyage visuel sur la page "Privacy Policy" (retrait du fond visuel, texte concentré).
- Optimisation de l'accessibilité (amélioration du contraste texte / fond pour SEO).

### Fixed
- Résolution des problèmes de liens dans la Navbar (retours 404 depuis les sous-sections corrigés).
- Résolution des problèmes d'affichage du titre dans les sous-pages.
- Correction des anomalies d'envoi de formulaire EmailJS en production.

---
