/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          light: '#A5B4FC'
        },
        secondary: '#F59E0B',
        background: '#0F172A',
        surface: {
          DEFAULT: '#1E293B',
          lighter: '#334155'
        },
        success: '#10B981',
        danger: '#EF4444',
        'light-gray': '#94A3B8'
      },
      animation: {
        'rotate': 'rotate 20s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};