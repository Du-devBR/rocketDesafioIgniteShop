import {
  Aside,
  Cart,
  Counter,
  Footer,
  HeaderContainer,
  ImageContainer,
  Item,
  ItemInfo,
  Price,
  Quantity,
} from '@/styles/pages/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import logoImg from '../assets/logo.svg';
import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';
export default function Header() {
  const { cartCount, cartDetails } = useShoppingCart();
  const [toggle, setToggle] = useState(false);
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
            ''
          )}
        </Cart>
      </HeaderContainer>
      <Aside isOpen={toggle}>
        <h2>Sacola de compras</h2>
        {Object.values(cartDetails ?? {}).map((product) => (
          <Item key={product.id}>
            <ImageContainer>
              <Image src={product?.imageUrl} alt="" width={101} height={94} />
            </ImageContainer>
            <ItemInfo>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
              <button>Remover</button>
            </ItemInfo>
          </Item>
        ))}
        <Footer>
          <Quantity>
            <span>Quantidade</span>
            <span>3 itens</span>
          </Quantity>
          <Price>
            <span>Valor total</span>
            <span>$R$ 270,00</span>
          </Price>
          <button>Finalizar compra</button>
        </Footer>
      </Aside>
    </>
  );
}
