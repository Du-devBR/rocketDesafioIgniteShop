import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
});

export const Cart = styled('div', {
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
