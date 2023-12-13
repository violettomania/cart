import { items } from '../data';
import CartItem from './CartItem';
import { initializeCart, clearCart } from '../slices/cartSlice';
import { useAppDispatch } from '../hooks/hooks';
import { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState(items);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    setCartItems([]);
    dispatch(clearCart());
  };

  dispatch(initializeCart(cartItems.length));

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
        {cartItems.length === 0 ? (
          <h4 className='empty-cart'>is currently empty</h4>
        ) : null}
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      {cartItems.length > 0 ? (
        <footer>
          <hr />
          <div>
            <h5 className='cart-total'>
              total <span>{`$${'placeholder'}`}</span>
            </h5>
          </div>
          <button className='btn btn-hipster' onClick={handleClearCart}>
            clear cart
          </button>
        </footer>
      ) : null}
    </section>
  );
}
