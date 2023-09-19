import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import { Container } from '@/styles/pages/app';
import { CartProvider } from 'use-shopping-cart';
import Header from './header';

globalStyles();

export default function App({ Component, pageProps, router }: AppProps) {
  const isSuccessPage = router.pathname === '/success';
  return (
    <CartProvider
      mode="payment"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      successUrl="/success"
      cancelUrl="/"
      currency="BRL"
      shouldPersist
      cartMode="client-only"
    >
      <Container>
        {!isSuccessPage && <Header />}
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
