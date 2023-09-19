import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    textDecoration: 'none',
  },
  body: {
    backgroundColor: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
    height: '100%',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
});
