import {
  Aside,
  ButtonClosed,
  Cart,
  Counter,
  Footer,
  FullCart,
  HeaderContainer,
  ImageContainer,
  Item,
  ItemInfo,
  Price,
  Quantity,
} from '@/styles/pages/app';
import Image from 'next/image';
import { Handbag, X } from 'phosphor-react';
import logoImg from '../assets/logo.svg';
import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';
import { Product } from 'use-shopping-cart/core';
import axios from 'axios';
import { formatterPrice } from '@/util/formatterPrice';

export type IProduct = Product & {
  defaultPriceId?: string;
  quantity?: number;
};

export default function Header() {
  const { cartCount, cartDetails, removeItem, formattedTotalPrice } = useShoppingCart();
  const [toggle, setToggle] = useState(false);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  // Para corrigir a tipagem do cartDetails chatGpt sugeriu corrgir gerando uma logica
  // para reclassificar o typeof.
  const products: IProduct[] =
    cartDetails && typeof cartDetails === 'object' ? Object.keys(cartDetails).map((item) => cartDetails[item]) : [];
  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: products,
      });

      const { checkoutUrl } = response.data;
      if (typeof window !== undefined) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!');
    }
  }
  return (
    <>
      <HeaderContainer>
        <Image src={logoImg} alt="" />
        <Cart onClick={() => setToggle(!toggle)}>
          <Handbag size={24} fontWeight={'700'} color="white" />
          {cartCount ? (
            <Counter>
              <span>{cartCount}</span>
            </Counter>
          ) : (
            <FullCart>
              <p>Seu carrinho esta vazio!</p>
            </FullCart>
          )}
        </Cart>
      </HeaderContainer>
      {cartCount ? (
        <Aside isOpen={toggle}>
          <ButtonClosed onClick={() => setToggle(!toggle)}>
            <X weight="bold" />
          </ButtonClosed>
          <h2>Sacola de compras</h2>
          {Object.values(cartDetails ?? {}).map((product) => (
            <Item key={product.id}>
              <ImageContainer>
                <Image src={product?.imageUrl} alt="" width={101} height={94} />
              </ImageContainer>
              <ItemInfo>
                <strong>{product.name}</strong>
                <span>{formatterPrice(product.price / 100)}</span>
                <button onClick={() => removeItem(product.id)}>Remover</button>
              </ItemInfo>
            </Item>
          ))}
          <Footer>
            <Quantity>
              <span>Quantidade</span>
              <span>{cartCount !== undefined ? `${cartCount} ${cartCount > 1 ? 'itens' : 'item'}` : '0 itens'}</span>
            </Quantity>
            <Price>
              <span>Valor total</span>
              <span>{formattedTotalPrice}</span>
            </Price>
            <button onClick={handleCheckout}>Finalizar compra</button>
          </Footer>
        </Aside>
      ) : (
        ''
      )}
    </>
  );
}
