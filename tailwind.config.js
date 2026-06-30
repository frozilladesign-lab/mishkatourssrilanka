

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: '#0A2F47',
        secondary: '#0F766E',
        accent: '#D9A441',
        light: '#F8FAFC',
        dark: '#111827',
        success: '#16A34A',
        cream: '#FAF8F3',
        sand: '#E8E3D8',
        ivory: '#FFFFF0',
        tea: '#2D5016',
        muted: '#64748B',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3rem, 8vw, 7rem)',
        'display-sm': 'clamp(2.5rem, 6vw, 5rem)',
      },
      letterSpacing: {
        'luxury': '0.02em',
      },
      boxShadow: {
        'soft': '0 2px 16px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.05)',
        'lift': '0 12px 32px -8px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.03)',
        'glass-strong': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}

