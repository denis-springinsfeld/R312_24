# TD1 Sass - R3.12 2024/2025

- Dupliquer le dossier 'TD1_start',
- Renommer le dossier en 'TD1_sass1'
- Ouvrir le dossier avec Visual Studio Code.
- Avec le Terminal initialiser un projet npm, installer sass ...

Structure de votre dossier de travail

```bash
/TD1-sass
  /css
    L style.css
  /scss
    L main.scss
  L index.html
```

## Exercice 1 : Nesting

Créer 4 boutons : info, alert, warning et error
En utilisant :

- Sass et le nesting .

* la méthode BEM - un **Block** 'button' et 4 **Modifiers**.

Clrs:  
220 17% 20%
198 93% 60%
158 64% 52%
43 96% 56%
0 91% 71%

## Exercice 2 : Variables

Ajoutez des variables Sass à votre code.
Regardez les fonctions `lighten()` et `darken()` de Sass pour modifier la couleur au survol.
https://sass-lang.com/documentation/modules/color

## Exercice 3 : Maps et boucles

Simplifier votre code en utilisant une Map et une boucle @each.
https://sass-lang.com/documentation/at-rules/control/each

## Exercice 4 : avec des variables CSS.

Reprendre votre travail en utilisant des variables CSS (custom properties).

En utilisant la Maps créer

```css
|  :root {
|       --clr-primary: 198 93% 60%;
        --clr-success: 158 64% 52%;
        --clr-warning: 43 96% 56%;
        --clr-error: 0 91% 71%;
    }
```

## Exercice 5 : partials.

Réorganiser votre code en utilisant des partials.

https://sass-lang.com/guide#topic-4

## Exercice 6 : card

DS :
--font-family-primary: "Vollkorn", serif;
--font-family-primary: 'Vollkorn', serif;
--font-family-secondary: 'PT Sans', sans-serif;
--font-size-heading: 2rem;
--font-size-caption: 0.875rem;
--color-border: #34b897;
--color-text: #222022;
--color-highlight-primary: #FFEF7E;
--color-highlight-secondary: #B7F9E9;
--border-radius: 1.25rem;
--box: 10px;
