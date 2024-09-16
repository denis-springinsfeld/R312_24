# INTÉGRATION DU SITE SPACE TOURISM

On vous demande :

- d'intégrer l'ensemble des pages de ce projet SPACE TOURISM : HTML + CSS + JS

- d'utiliser pour la pages Design System :
  - une version SASS en partant la configuration utilisée dans le dernier TP.
    Il est aussi possible de se documenter sur la décomposition des 'layers' de la méthode [CUBE CSS](https://cube.fyi).
  - une version TailwindCss.
- utilisation de TailwindCss pour les autres pages.
- utilisation de Bootstrap pour une pages, si vous avez le temps...

Remarques sur les techniques

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid (contrairement au projet réalisé l'an passé)
- Mobile-first workflow
- JS vu en cours cette année

---

## DesignSystem

### Lien Figma :

https://www.figma.com/file/Wdpg6qkHcLrKSgCAqZTOu3/space-tourism-website?node-id=0%3A1

### Prop

/_ colors _/
--clr-dark: 230 35% 7%;
--clr-light: 231 77% 90%;
--clr-white: 0 0% 100%;

---

/_ font-families _/
--ff-serif: "Bellefair", serif;
--ff-sans-cond: "Barlow Condensed", sans-serif;
--ff-sans-normal: "Barlow", sans-serif;

/_ font-weight _/
--fw-400: 400;
--fw-700: 700;

/_ font-sizes _/
S
--fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
--fs-800: 3.5rem;
--fs-700: 1.5rem;
--fs-600: 1rem;
--fs-500: 1rem;
--fs-400: 0.9375rem;
--fs-300: 1rem;
--fs-200: 0.875rem;

M
--fs-800: 5rem;
--fs-700: 2.5rem;
--fs-600: 1.5rem;
--fs-500: 1.25rem;
--fs-400: 1rem;

L
/_ font-sizes _/
--fs-800: 6.25rem;
--fs-700: 3.5rem;
--fs-600: 2rem;
--fs-500: 1.75rem;
--fs-400: 1.125rem;

/_ Reset _/

https://piccalil.li/blog/a-modern-css-reset/

.sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}
