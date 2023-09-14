import { useKeenSlider } from 'keen-slider/react';

import { ButtonAddCart, Footer, HomeContainer, InfoProduct, Product } from '@/styles/pages/home';
import Image from 'next/image';
import Link from 'next/link';

import 'keen-slider/keen-slider.min.css';
import { stripe } from '@/lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import Head from 'next/head';
import { Handbag } from 'phosphor-react';
import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';

interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const { addItem, cartDetails, cartCount } = useShoppingCart();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 48,
    },
  });

  function handleAddToCart(event: React.FormEvent, product: any) {
    event.preventDefault();
    addItem(product);
  }

  // console.log(Object.values(cartDetails ?? {}).map((teste) => teste.id));

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={480} />
              <Footer>
                <InfoProduct>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </InfoProduct>
                <ButtonAddCart onClick={(event) => handleAddToCart(event, product)}>
                  <Handbag />
                </ButtonAddCart>
              </Footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount || 0) / 100),
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 horas
  };
};
