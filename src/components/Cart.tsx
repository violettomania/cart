import { useEffect } from 'react';
import { items } from '../data';
import CartItem from './CartItem';
import { initializeCart } from '../slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import Footer from './Footer';

interface CartProps {
  isLoading: boolean;
}

export default function Cart({ isLoading }: CartProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeCart(items));
  }, [dispatch]);

  const cart = useAppSelector((state) => state.cart.items);

  return (
    <section className={`cart ${isLoading && 'hidden'}`}>
      <header>
        <h2>your bag</h2>
        {cart.length === 0 ? (
          <h4 className='empty-cart'>is currently empty</h4>
        ) : null}
      </header>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Footer />
    </section>
  );
}
