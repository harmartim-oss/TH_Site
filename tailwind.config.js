/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Enhanced Modern Authority Brand System with improved contrast
        brand: {
          primary: '#0A2351', // Deep Blue
          secondary: '#8B95A1', // Enhanced Cool Platinum with better contrast
          'secondary-light': '#6B7280', // Improved contrast for taglines (WCAG AA compliant)
          accent: '#17907F', // Darkened Emerald Teal for CTAs and link hover states
          'accent-light': '#20A893', // Lighter accent for hover states
        },
        surface: {
          default: '#FFFFFF', // White
          alt: '#F8FAFC', // Enhanced Soft Gray with better contrast
          muted: '#F1F5F9', // Additional muted background option
        },
        text: {
          primary: '#0A2351', // Deep Blue on light
          secondary: '#4B5563', // Enhanced secondary text with better contrast
          muted: '#6B7280', // Muted text with WCAG AA compliance
          inverse: '#FFFFFF', // White on brand surfaces
          neutral: '#111318', // Neutral Ink
        },
        // Enhanced gray scale with better contrast ratios
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // Primary gray text (WCAG AA compliant)
          600: '#4B5563', // Secondary gray text (enhanced contrast)
          700: '#374151', // Strong gray text
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        // Legacy colors for backward compatibility during transition
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#0A2351', // Updated to Deep Blue
          600: '#0A2351',
          700: '#0A2351',
          800: '#0A2351',
          900: '#1e293b',
          950: '#0f172a',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#8B95A1', // Enhanced Cool Platinum with better contrast
          600: '#6b7280',
          700: '#4b5563',
          800: '#374151',
          900: '#1f2937',
          950: '#030712',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#17907F', // Updated to Darkened Emerald Teal
          600: '#17907F',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        trust: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Enhanced color additions for better visual hierarchy
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#17907F', // Primary emerald matching brand accent
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        lawfirm: {
          navy: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#64748b',
            500: '#334155',
            600: '#1e293b',
            700: '#0f172a',
            800: '#020617',
            900: '#000d1a',
            950: '#000408',
          },
          gold: {
            50: '#fefdf8',
            100: '#fdf6e3',
            200: '#fbeaa0',
            300: '#f9dc5c',
            400: '#f7d032',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
          },
        },
      },
      fontFamily: {
        sans: [
          'Montserrat',
          'Source Sans Pro',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'system-ui',
          'sans-serif',
        ],
        heading: [
          'Montserrat',
          'Crimson Text',
          'Playfair Display',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
        legal: ['Source Serif Pro', 'Charter', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: [
          'JetBrains Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      scale: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        102: '1.02',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
      },
      spacing: {
        // Design token: space.base = 8px
        'token-base': '8px',
      },
      borderRadius: {
        // Design tokens for radius
        'token-sm': '4px', // For buttons, chips
        'token-md': '8px', // For cards
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        // Enhanced design tokens for shadows with better visual hierarchy
        'token-sm': '0 2px 8px rgba(0,0,0,0.08)', // Enhanced cards, sticky header
        'token-md': '0 4px 12px rgba(0,0,0,0.1)', // Enhanced medium depth
        'service-card-hover': '0 6px 20px rgba(0,0,0,0.12)', // Enhanced service card hover
        // Enhanced existing shadows with better contrast
        soft: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 8px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        large: '0 12px 20px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 24px 32px -5px rgba(0, 0, 0, 0.18), 0 8px 12px -6px rgba(0, 0, 0, 0.1)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        glow: '0 0 20px rgba(23, 144, 127, 0.25)', // Updated to use brand accent
        'glow-lg': '0 0 40px rgba(23, 144, 127, 0.3)', // Updated to use brand accent
        // New enhanced shadows
        'button-hover': '0 4px 12px rgba(23, 144, 127, 0.2)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '16-9': '1777px', // 16:9 aspect ratio at 1000px height
        'aspect-16-9': { raw: '(min-aspect-ratio: 16/9)' },
        mobile: { raw: '(hover: none) and (pointer: coarse)' },
        desktop: { raw: '(hover: hover) and (pointer: fine)' },
      },
      aspectRatio: {
        '16/9': '16 / 9',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '1/1': '1 / 1',
      },
    },
  },
  plugins: [],
}
