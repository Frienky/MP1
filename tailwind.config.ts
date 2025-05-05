import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

import typographyStyles from './typography'

const blueTopaz = {
  css: {
    '--tw-prose-body': '#000',
    '--tw-prose-headings': '#005fa3',
    '--tw-prose-links': '#1976d2',
    '--tw-prose-links-hover': '#1565c0',
    '--tw-prose-bold': '#005fa3',
    '--tw-prose-counters': '#1976d2',
    '--tw-prose-bullets': '#1976d2',
    '--tw-prose-hr': '#b3c6e0',
    '--tw-prose-quote-borders': '#1976d2',
    '--tw-prose-captions': '#6b7280',
    '--tw-prose-code': '#005fa3',
    '--tw-prose-code-bg': '#e3f2fd',
    '--tw-prose-pre-code': '#e3f2fd',
    '--tw-prose-pre-bg': '#e3f2fd',
    '--tw-prose-pre-border': '#b3c6e0',
    '--tw-prose-th-borders': '#b3c6e0',
    '--tw-prose-td-borders': '#e3f2fd',
    'fontFamily': '"Inter", "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    'a': { 'textDecoration': 'underline', 'fontWeight': '500' },
    'h1,h2,h3,h4,h5,h6': {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontWeight: '700',
      letterSpacing: '-0.01em',
      lineHeight: '1.25',
      marginTop: '1.2em',
      marginBottom: '0.5em',
    },
    'p': { marginTop: '0.8em', marginBottom: '0.8em', lineHeight: '1.75', fontSize: '1.12em' },
    'blockquote': { 'fontStyle': 'italic', 'borderLeftColor': '#1976d2', 'color': '#1976d2', 'backgroundColor': '#e3f2fd', 'paddingLeft': '1rem', 'borderLeftWidth': '4px', 'marginTop': '1em', 'marginBottom': '1em' },
    'code': { 'backgroundColor': '#e3f2fd', 'color': '#005fa3', 'padding': '0.18em 0.36em', 'borderRadius': '0.3em', 'fontSize': '0.98em' },
    'pre': { 'backgroundColor': '#e3f2fd', 'color': '#005fa3', 'borderRadius': '0.5em', 'padding': '1em', 'fontSize': '1em', 'marginTop': '1em', 'marginBottom': '1em' },
    'table': { 'borderCollapse': 'collapse', 'marginTop': '1.2em', 'marginBottom': '1.2em' },
    'th': { 'backgroundColor': '#e3f2fd', 'color': '#005fa3', 'fontWeight': 'bold', 'padding': '0.6em 0.9em' },
    'td': { 'backgroundColor': '#f7fbff', 'padding': '0.6em 0.9em' },
    'ul,ol': {
      listStylePosition: 'outside',
      paddingLeft: '2em',
      marginTop: '0.8em',
      marginBottom: '0.8em',
    },
    'li': {
      marginTop: '0.25em',
      marginBottom: '0.25em',
      lineHeight: '1.65',
    },
    'li::marker': { 'color': '#1976d2' },
    'body, p, li': {
      fontFamily: 'Inter, sans-serif',
      fontWeight: '350',
      letterSpacing: '0.01em',
      lineHeight: '1.6',
      color: '#000',
    },
  }
};

const darkBlueTopaz = {
  css: {
    '--tw-prose-body': '#e5e7eb',
    '--tw-prose-headings': '#82aaff',
    '--tw-prose-links': '#82aaff',
    '--tw-prose-links-hover': '#1976d2',
    '--tw-prose-bold': '#82aaff',
    '--tw-prose-counters': '#82aaff',
    '--tw-prose-bullets': '#82aaff',
    '--tw-prose-hr': '#434c5e',
    '--tw-prose-quote-borders': '#82aaff',
    '--tw-prose-captions': '#a0aec0',
    '--tw-prose-code': '#82aaff',
    '--tw-prose-code-bg': '#222436',
    '--tw-prose-pre-code': '#222436',
    '--tw-prose-pre-bg': '#222436',
    '--tw-prose-pre-border': '#434c5e',
    '--tw-prose-th-borders': '#434c5e',
    '--tw-prose-td-borders': '#222436',
    'fontFamily': '"Inter", "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    'a': { 'textDecoration': 'underline', 'fontWeight': '500' },
    'h1,h2,h3,h4,h5,h6': {
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontWeight: '700',
      letterSpacing: '-0.01em',
      lineHeight: '1.25',
      marginTop: '1.2em',
      marginBottom: '0.5em',
    },
    'p': { marginTop: '0.8em', marginBottom: '0.8em', lineHeight: '1.75', fontSize: '1.12em' },
    'blockquote': { 'fontStyle': 'italic', 'borderLeftColor': '#82aaff', 'color': '#82aaff', 'backgroundColor': '#222436', 'paddingLeft': '1rem', 'borderLeftWidth': '4px', 'marginTop': '1em', 'marginBottom': '1em' },
    'code': { 'backgroundColor': '#222436', 'color': '#82aaff', 'padding': '0.18em 0.36em', 'borderRadius': '0.3em', 'fontSize': '0.98em' },
    'pre': { 'backgroundColor': '#222436', 'color': '#82aaff', 'borderRadius': '0.5em', 'padding': '1em', 'fontSize': '1em', 'marginTop': '1em', 'marginBottom': '1em' },
    'table': { 'borderCollapse': 'collapse', 'marginTop': '1.2em', 'marginBottom': '1.2em' },
    'th': { 'backgroundColor': '#222436', 'color': '#82aaff', 'fontWeight': 'bold', 'padding': '0.6em 0.9em' },
    'td': { 'backgroundColor': '#1a1b26', 'padding': '0.6em 0.9em' },
    'ul,ol': {
      listStylePosition: 'outside',
      paddingLeft: '2em',
      marginTop: '0.8em',
      marginBottom: '0.8em',
    },
    'li': {
      marginTop: '0.25em',
      marginBottom: '0.25em',
      lineHeight: '1.65',
    },
    'li::marker': { 'color': '#82aaff' },
    'body, p, li': {
      fontFamily: 'Inter, sans-serif',
      fontWeight: '350',
      letterSpacing: '0.01em',
      lineHeight: '1.6',
      color: '#e5e7eb',
    },
  }
};

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  plugins: [typographyPlugin, require('tailwindcss-animate')],
  theme: {
  	fontSize: {
  		xs: ['0.8125rem', { lineHeight: '1.5rem' }],
  		sm: ['0.875rem', { lineHeight: '1.5rem' }],
  		base: ['1rem', { lineHeight: '1.75rem' }],
  		lg: ['1.125rem', { lineHeight: '1.75rem' }],
  		xl: ['1.25rem', { lineHeight: '2rem' }],
  		'2xl': ['1.5rem', { lineHeight: '2rem' }],
  		'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  		'4xl': ['2rem', { lineHeight: '2.5rem' }],
  		'5xl': ['3rem', { lineHeight: '3.5rem' }],
  		'6xl': ['3.75rem', { lineHeight: '1' }],
  		'7xl': ['4.5rem', { lineHeight: '1' }],
  		'8xl': ['6rem', { lineHeight: '1' }],
  		'9xl': ['8rem', { lineHeight: '1' }]
  	},
  	typography: {
  		blueTopaz,
  		darkBlueTopaz,
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			body: ['Inter', 'sans-serif'],
  			heading: ['IBM Plex Sans', 'sans-serif'],
  		},
  	}
  },
} satisfies Config
