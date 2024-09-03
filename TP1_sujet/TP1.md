# TP1 SASS - Hosting Plans

Figma : https://www.figma.com/file/tmKGUuYddp1ePmp6ADqSH8/Hosting-Plans-(Copy)?node-id=0%3A1

## DS

```
/* colors */
color-neutral-100: #fff
color-neutral-900: #1f3049
color-primary-400: #0066ff

/* font-families */
ff-sans: "Open Sans", sans-serif;

/* font-sizes */
fs-900: 60px
fs-800: 48px
fs-700: 27px
fs-600: 24px
fs-400: 18px

/* font-weights */
fw-400: 400
fw-700: 700

/* size/spacing values */
size-8: 8px
size-20: 20px;
size-36: 36px;
```

## Exercice 1 : Création d'une card 'pricing-plan' : Nesting + Lists/Maps + Variables CSS

Création d'une card 'pricing-plan' en utilisant des `List` et `Maps` Sass pour initialiser les Variables CSS.

Vous pouvez contextualiser les variables CSS:
Les variables sont définies en fonction de leur contexte, ce qui facilite la gestion des styles de votre application.

```css
--body
--heading
--bg
--btn-text
--btn-bg
--btn-text-hover
--btn-bg-hover
```

exemple : `--body: var(--clr-neutral-100);`

Base de code

```html
<section class="pricing-plan">
  <h2 class="pricing-plan__title">Free Plan</h2>
  <ul class="pricing-plan__features">
    <li class="pricing-plan__feature"><strong>Domain:</strong> 1 included</li>
    <li class="pricing-plan__feature"><strong>Bandwidth:</strong> 5 GB</li>
    <li class="pricing-plan__feature"><strong>Diskspace:</strong> 1 GB</li>
    <li class="pricing-plan__feature">
      <strong>Monthly Uniques:</strong> 5,000
    </li>
  </ul>
  <p class="pricing-plan__price">$0<span>/month</span></p>
  <a href="/" class="pricing-plan__cta-button">Get Started</a>
</section>
```

## Exercice 2 : Dark card

Créer un modifier --dark pour créer une variante de la card 'plan'.

## Exercice 3 : Refactoring

Utilisez des partials pour restructurer votre code.

Structure du dossier Scss :
scss
L abstracts/
L bases/
L components/
main.scss

## Exercice 4 : Page Hosting Plan

5 domain
250gb of bandwidth
5gb of diskspace
15,000 monthly uniques
$19/month

15 domain
750gb of bandwidth
20gb of diskspace
50,000 monthly uniques
$49/month
