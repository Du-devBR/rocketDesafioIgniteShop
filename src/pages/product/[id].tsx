import { stripe } from '@/lib/stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/products';
import { formatterPrice } from '@/util/formatterPrice';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Stripe from 'stripe';
import { useShoppingCart } from 'use-shopping-cart';
import 'react-loading-skeleton/dist/skeleton.css';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    descripition: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();
  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <ProductContainer>
          <ImageContainer style={{ background: 'none' }}>
            <Skeleton width={576} height={'calc(656px - 0.5rem)'} />
          </ImageContainer>
          <ProductDetails>
            <Skeleton width={'100%'} />
            <Skeleton width={'100%'} />
            <Skeleton width={'100%'} count={3} />
            <Skeleton width={'100%'} height={80} />
          </ProductDetails>
        </ProductContainer>
      </SkeletonTheme>
    );
  }

  async function handleAddingProductToCart(event: React.FormEvent, product: any) {
    event.preventDefault();
    addItem(product);
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt={''} width={520} height={480} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatterPrice(product.price / 100)}</span>
          <p>{product.descripition}</p>
          <button onClick={(event) => handleAddingProductToCart(event, product)}>Adicionar ao carrinho</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_OZYPN2Dbv9Mtnj' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        descripition: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, //1 hora
  };
};
