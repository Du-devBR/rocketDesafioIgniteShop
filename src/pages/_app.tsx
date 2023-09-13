import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import { Container } from '@/styles/pages/app';
import { CartProvider } from 'use-shopping-cart';
import Header from './header';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      successUrl="/success" // Adicione o URL de sucesso
      cancelUrl="/" // Adicione o URL de cancelamento
      currency="USD" // Adicione a moeda
      shouldPersist // Adicione se deve persistir o carrinho
      cartMode="client-only"
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
