import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
});

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  zIndex: 1,
});

export const Cart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  borderRadius: '0.375rem',
  background: '$gray800',
  position: 'relative',
  transition: '0.5s',
  cursor: 'pointer',

  '&:hover': {
    background: '$gray300',
    transition: '0.5s',
  },
});

export const Counter = styled('div', {
  width: 24,
  height: 24,
  borderRadius: 999,
  background: '$green500',
  outline: '3px solid $gray900',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: '-12px',
  right: '-12px',

  span: {
    color: '$white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const Aside = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  right: 0,
  top: 0,
  background: '$gray800',
  width: '100%',
  maxWidth: 480,
  height: '100%',
  transition: '0.5s',
  zIndex: 0,
  padding: '4.5rem 3rem',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        zIndex: 10,
      },
      false: {
        opacity: 0,
        zIndex: 0,
      },
    },
  },

  defaultVariants: {
    isOpen: false,
  },

  h2: {
    color: '$white',
    fontSize: '$lg',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
});

export const ButtonClosed = styled('button', {
  position: 'absolute',
  border: 'none',
  background: 'none',
  top: 24,
  right: 24,
  color: '$gray500',
  fontSize: '$xl',
  transition: '0.5s',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray300',
    transition: '0.5s',
  },
});

export const Item = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  marginBottom: '1.5rem',
});

export const ImageContainer = styled('div', {
  borderRadius: '0.5rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '100%',
  maxWidth: 102,

  img: {
    objectFit: 'cover',
  },
});

export const ItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$md',
    color: '$gray300',
    fontWeight: 'normal',
    lineHeight: '160%',
  },

  span: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 'bold',
    lineHeight: '160%',
  },

  button: {
    border: 'none',
    background: 'none',
    color: '$green500',
    fontSize: '$sm',
    fontWeight: 'bold',
    lineHeight: '160%',
    cursor: 'pointer',

    marginTop: '0.5rem',
    alignSelf: 'flex-start',
  },
});

export const Footer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  width: '100%',

  button: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1.25rem 2rem',
    borderRadius: '0.5rem',
    border: 'none',
    background: '$green500',

    fontSize: '$md',
    color: '$white',
    fontWeight: 'bold',
    lineHeight: '160%',

    cursor: 'pointer',
  },
});

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  span: {
    color: '$gray100',
    fontWeight: 'normal',
    lineHeight: '160%',

    '&:first-child': {
      fontSize: '$sm',
    },
    '&:last-child': {
      fontSize: '$md',
    },
  },
});

export const Price = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  margin: '0.5rem 0 4rem 0',

  span: {
    color: '$gray100',
    fontWeight: 'bold',
    lineHeight: '160%',

    '&:first-child': {
      fontSize: '$md',
    },
    '&:last-child': {
      fontSize: '$ls',
    },
  },
});
