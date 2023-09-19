import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '@bp2': {
    minHeight: 'auto',
  },
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',

    '@bp1': {
      width: 300,
      height: 'auto',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
});

export const Footer = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',

  borderRadius: 6,
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  strong: {
    fontSize: '$lg',
    color: '$gray100',

    '@bp1': {
      fontSize: '$mobileSm',
    },
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',

    '@bp1': {
      fontSize: '$mobileMd',
    },
  },
});

export const InfoProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const ButtonAddCart = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.25rem',
  borderRadius: '0.375rem',
  border: 'none',
  background: '$green500',
  color: '$white',
  fontSize: '$2xl',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.5s',

  '&:hover': {
    background: '$green300',
    transition: '0.5s',
  },

  '@bp2': {
    fontSize: '$xl',
    padding: '1rem',
  },

  '@bp1': {
    fontSize: '$lg',
    padding: '0.5rem',
  },
});
