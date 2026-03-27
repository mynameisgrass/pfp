/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#789461',      // Sage Green
        secondary: '#50623A',    // Forest Pine
        dark: '#1E2F1E',         // Very Dark Jungle Green
        darker: '#294B29',       // Moss Green
        accent: '#DBE7C9',       // Oatmeal Beige
        nature: '#111827',       // Near-black readable text
        leaf: '#4CAF50',         // Status / Success
        sky: '#A9BFA0',          // Muted sage
        soil: '#BF7F3F',         // Burnt orange / warning
        txthead: '#F8FDF0',      // Heading text
        txtbody: '#E0ECCF',      // Body text
        txtmute: '#A9BFA0',      // Muted text
        statok: '#4CAF50',       // Status success
        statwarn: '#BF7F3F',     // Status warning
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
