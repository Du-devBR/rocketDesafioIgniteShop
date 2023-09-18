import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,
  position: 'relative',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },
});

export const ImageLogo = styled('image', {
  position: 'absolute',
  top: 0,
});

export const Images = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 1000,
  padding: '0.25rem',
  marginTop: '4rem',

  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

  '&:nth-child(n+2)': {
    marginLeft: '-52px',
  },

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const LinkText = styled('div', {
  display: 'block',
  marginTop: '5rem',
  fontSize: '$lg',
  color: '$green500',
  transition: '0.5s',
  fontWeight: 'bold',

  '&:hover': {
    color: '$green300',
    transition: '0.5s',
  },
});
