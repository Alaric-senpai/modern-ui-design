/**
 * modern-ui-design Tailwind preset.
 * Usage (tailwind.config.js):  presets: [require('./tailwind.preset.js')]
 * Override ONLY the brand colours (primary, primary-dark, primary-tint, accent, navy) per project.
 * Default below = "Trust Blue". See references/design-language.md for other palette archetypes.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1A6BFF', dark: '#0B4FD1', tint: '#EAF1FF' },
        accent: { DEFAULT: '#FFC91F' },
        navy: { DEFAULT: '#0B2A6B', dark: '#071C4A' },
        ink: { DEFAULT: '#101828', body: '#344054', muted: '#667085', subtle: '#98A2B3' },
        line: { DEFAULT: '#E4E7EC', soft: '#EEF2F7' },
        page: { DEFAULT: '#F7F9FF', alt: '#F8FAFC' },
        success: { DEFAULT: '#12B76A', tint: '#E8F7EE', text: '#12803D' },
        warning: { DEFAULT: '#F79009', tint: '#FFF4E0', text: '#B45309' },
        danger: { DEFAULT: '#F04438', tint: '#FDECEC', text: '#C0362C' },
        info: { DEFAULT: '#2E90FA', tint: '#EAF1FF', text: '#1D4ED8' },
        star: '#FFB020',
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.06)',
        float: '0 12px 32px rgba(16,24,40,.12)',
        // Change the rgb to match the primary colour
        cta: '0 8px 20px rgba(26,107,255,.28)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        // For luxury / wellness / interiors swap display for a serif:
        // display: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
      },
      maxWidth: { container: '1200px' },
    },
  },
};
