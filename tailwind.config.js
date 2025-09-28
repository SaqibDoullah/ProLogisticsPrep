// tailwind.config.js (requires "type": "module" in package.json)
import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        'logo-blue-gray': '#8fc1ca',
        'logo-dark-blue': '#9ac7cd',
        'logo-red': '#ed7663',
        'logo-light-green': '#acd3a4',
        'logo-dark-green': '#90c79f',
        'logo-light-orange': '#faaf90',

        'background-primary': '#2d3748',
        'background-secondary': '#4a5568',
        'text-primary': '#e2e8f0',
        'text-secondary': '#a0aec0',
        
        'accent-primary': 'var(--logo-blue-gray)',
        'accent-secondary': 'var(--logo-red)',
        'accent-green': 'var(--logo-light-green)',
        'accent-orange': 'var(--logo-light-orange)',
        'accent-dark-green': 'var(--logo-dark-green)',

        'primary-dark-blue': 'var(--background-primary)',
        'primary-light-blue': 'var(--accent-primary)',
        'primary-orange': 'var(--accent-secondary)',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
