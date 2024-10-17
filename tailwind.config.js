/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
         background: 'var(--background)',
         foreground: "var(--foreground)",
         primary: "var(--primary)"

      }
    }
  },
  plugins: []
};