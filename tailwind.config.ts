import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './store/**/*.{ts,tsx}'
  ],
  theme: {
    screens: {
      mobile: '0px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px'
    },
    extend: {
      colors: {
        forest: '#274A35',
        evergreen: '#1A2E22',
        sand: '#E8DDCB',
        stone: '#F7F5F0',
        copper: '#A87945',
        charcoal: '#242424',
        success: '#4D8C57'
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        body: ['var(--font-body)', 'Libre Baskerville', 'serif'],
        accent: ['var(--font-manrope)', 'Manrope', 'sans-serif']
      },
      maxWidth: {
        site: '1440px',
        content: '1200px'
      },
      spacing: {
        section: '8.75rem',
        'section-tablet': '6.25rem',
        'section-mobile': '5rem'
      },
      boxShadow: {
        luxury: '0 30px 80px rgba(26, 46, 34, 0.16)',
        'luxury-lg': '0 45px 120px rgba(26, 46, 34, 0.22)',
        glow: '0 0 80px rgba(168, 121, 69, 0.24)'
      },
      backgroundImage: {
        'organic-radial':
          'radial-gradient(circle at 20% 20%, rgba(168, 121, 69, 0.20), transparent 34%), radial-gradient(circle at 80% 15%, rgba(39, 74, 53, 0.18), transparent 30%), linear-gradient(135deg, #F7F5F0 0%, #E8DDCB 100%)',
        'forest-depth':
          'linear-gradient(135deg, rgba(26, 46, 34, 0.96) 0%, rgba(39, 74, 53, 0.88) 48%, rgba(168, 121, 69, 0.34) 100%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite'
      }
    }
  },
  plugins: [typography]
};

export default config;
