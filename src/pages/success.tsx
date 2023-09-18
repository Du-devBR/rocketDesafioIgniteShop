import { stripe } from '@/lib/stripe';
import { ImageContainer, ImageLogo, Images, LinkText, SuccessContainer } from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../assets/logo.svg';

interface SuccessProps {
  customerName: string;
  product: {
    id: string;
    name: string;
    images: string;
  }[];
}

export default function Success({ customerName, product }: SuccessProps) {
  function handleRemoveItensLocalStorage() {
    localStorage.removeItem('persist:root');
  }

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImageLogo>
          <Image src={logoImg} alt="" />
        </ImageLogo>
        <h1>Compra efetuada!</h1>
        <Images>
          {product.map((image) => (
            <ImageContainer key={image.id}>
              <Image src={image.images[0]} width={120} height={110} alt={''}></Image>
            </ImageContainer>
          ))}
        </Images>
        <p>
          Uhuul
          <strong> {customerName}</strong>, sua compra de {product.length}{' '}
          {`${product.length > 1 ? 'camisetas' : 'camiseta'} `}
          já está a caminho da sua casa.
        </p>
        <Link href={'/'} onClick={handleRemoveItensLocalStorage}>
          <LinkText>Voltar ao catalogo</LinkText>
        </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data.map((product) => product.price?.product);

  return {
    props: {
      customerName,
      product,
    },
  };
};
