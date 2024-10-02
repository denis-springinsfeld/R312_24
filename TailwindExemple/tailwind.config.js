/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        base: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted-foreground) / <alpha-value>)",
        inverted: "hsl(var(--inverted-foreground) / <alpha-value>)",
      },
      backgroundColor: {
        fill: "hsl(var(--background) / <alpha-value>)",
        "button-accent": "hsl(var(--accent-button) / <alpha-value>)",
        "button-accent-hover":
          "hsl(var(--accent-button-hover) / <alpha-value>)",
        "button-muted": "hsl(var(--muted-button) / <alpha-value>)",
      },
      backgroundImage: {
        img: "linear-gradient(to top, hsl(var(--background)/1), hsl(var(--background)/.75)), var(--bg-image)",
      },
    },
  },
  plugins: [],
};
