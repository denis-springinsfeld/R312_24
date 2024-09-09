# CM/TD - TailwindCSS

Tailwind CSS est un **framework utility-fist CSS** constitué de micro-classes prédéfinies que vous pouvez utiliser pour construire et concevoir des pages web directement dans votre page Html. Vous n'écrivez plus de CSS tout se passe dans votre HTML sous la forme de classes prédéfinies.

En tant que terme général de programmation, un **framework** est un outil qui fournit des composants réutilisables et prêts à l’emploi construits à partir des fonctionnalités d’un outil déjà existant - ici CSS. L’objectif général de la création de frameworks est d’augmenter la vitesse de développement.

Vanilla CSS

```html
<a class="btn">Click me</a>
```

```css
.btn {
  background-color: #000;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
}
```

Tailwind CSS

```html
<a class="bg-black text-white p-2 rounded">Click me</a>
```

## 1. Setup

Suivre les instructions de la documentation officielle pour installer TailwindCSS dans un projet.

[Installation TailwindCSS](https://tailwindcss.com/docs/installation)

REM :

- **Playground** https://play.tailwindcss.com
- **documentation** : https://tailwindcss.com

## 2. Première carte Call to Action

Créer une carte Call to Action avec TailwindCSS en utilisant les classes de base.
cf. Exo1_S.png et Exo1_M.png

## 3. @apply et BEM

Dans votre fichier `input.css`, pour vos deux boutons regroupez les classes utilitaires utilisez.
Écrivez une classe `.btn` qui applique les classes utilitaires à vos deux boutons, ainsi qu'un modifier `.btn--muted` qui applique les classes utilitaires à votre second bouton.

Aidez vous de la directive `@apply` et de la convention BEM.

Doc : [Directive @apply](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply)

## 4. Personnalisation des couleurs

Bien que les classes de base de TailwindCSS soient utiles, elles peuvent ne pas correspondre exactement à vos besoins en termes de couleurs, taille... Pour résoudre ce problème, ajoutez des couleurs personnalisées en suivant la documentation de configuration de TailwindCSS.

Doc : [Configuration TailwindCSS](https://tailwindcss.com/docs/configuration)

Dans le fichier `tailwind.config.js` ajouter:

- les couleurs de texte:
  --clr-text-base: 0 0% 100%
  --clr-text-muted: 228 96% 89%
  --clr-text-inverted: 243 75% 59%

- les couleurs de de background:
  clr-fill: 245 58% 51%
  clr-button-accent: 0 0% 100%
  clr-button-accent-hover: 226 100% 97%
  clr-button-muted: 239 84% 67%

## 5. Utilisation de variables CSS

Ajoutez des variables CSS pour vos couleurs personnalisées dans le fichier `input.css` en utilisant la syntaxe :root. Assurez-vous d'inclure ces nouvelles variables dans le fichier `tailwind.config.js` afin de les utiliser dans vos classes personnalisées.

Regarder `@layer base` dans la documentation.

## 6. Étendre des classes utilitaires

Ajouter dans le fichier `tailwind.config.js` des classes utilitaires personnalisées.

Étendre la propriété `backgroundImage` pour ajouter une image de fond et linear-gradient.

Il est possible d'étendre les propriétés `text-color`, `backgroundColor`, avec les variables css déclarée dans le `:root`.

## 7. Thème

Ajoutez des classes `.theme-[nom]` dans le fichier `input.css`, chacune définissant un ensemble de variables CSS pour les couleurs de votre thème personnalisé.
