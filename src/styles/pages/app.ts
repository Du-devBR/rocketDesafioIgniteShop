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
  position: 'absolute',
  right: 0,
  top: 0,
  background: '$gray800',
  maxWidth: 480,
  height: '100%',
  zIndex: 10,
  transition: '0.5s',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
        zIndex: 0,
      },
    },
  },

  defaultVariants: {
    isOpen: false, // Define o estado inicial como fechado
  },

  h2: {
    color: '$white',
  },
});
