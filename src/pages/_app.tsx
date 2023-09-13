import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import logoImg from '../assets/logo.svg';
import { Cart, Container, Counter, Header } from '@/styles/pages/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Cart>
          <Handbag size={24} fontWeight={'700'} color="white" />
          <Counter>
            <span>0</span>
          </Counter>
        </Cart>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
