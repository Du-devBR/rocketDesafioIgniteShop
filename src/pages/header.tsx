import { Aside, Cart, Counter, HeaderContainer } from '@/styles/pages/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import logoImg from '../assets/logo.svg';
import { useShoppingCart } from 'use-shopping-cart';
import { count } from 'console';
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
          <div key={product.id}>
            <Image src={product?.imageUrl} alt="" width={101} height={94} />
            <div>
              <strong>{product.name}</strong>
            </div>
          </div>
        ))}
      </Aside>
    </>
  );
}
