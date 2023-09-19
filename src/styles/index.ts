import { createStitches } from '@stitches/react';

export const { config, styled, globalCss, keyframes, getCssText, theme, createTheme, css } = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257e6',
      white: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray500: '#8D8D99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },

    fontSizes: {
      mobileSm: '0.75rem',
      mobileMd: '0.875rem',
      mobileLg: '1rem',
      mobileXl: '1.25rem',

      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1280px)',
  },
});
