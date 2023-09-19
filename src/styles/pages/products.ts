import { styled } from '..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  paddingRight: '2rem',
  paddingBottom: '2rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@bp2': {
    maxWidth: '100%',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'auto',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
    maxWidth: 450,
  },

  '@bp2': {
    maxWidth: '100%',
  },
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',

    '@bp1': {
      fontSize: '$mobileXl',
    },
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$gray300',

    '@bp1': {
      fontSize: '$mobileXl',
    },
  },

  p: {
    margin: '2.5rem 0',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',

    '@bp1': {
      fontSize: '$mobileMd',
    },
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: '0.6s',

    '@bp1': {
      fontSize: '$mobileMd',
    },
  },

  '@bp2': {
    maxWidth: '100%',
  },
});
