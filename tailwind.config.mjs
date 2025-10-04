const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false
};

const linkStyles = {
  a: {
    color: '#ea835a', // orange-500
    textDecoration: 'underline',
    '&:hover': {
      color: '#a06e5a' // orange-600
    }
  }
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: { ...disabledCss, ...linkStyles } },
        sm: { css: { ...disabledCss, ...linkStyles } },
        lg: { css: { ...disabledCss, ...linkStyles } },
        xl: { css: { ...disabledCss, ...linkStyles } },
        '2xl': { css: { ...disabledCss, ...linkStyles } }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
