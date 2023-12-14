import { useEffect } from 'react';
import { items } from '../data';
import CartItem from './CartItem';
import { initializeCart, clearCart, removeFromCart } from '../slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

export default function Cart() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeCart(items));
  }, [dispatch]);

  const cart = useAppSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveLastItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
        {cart.length === 0 ? (
          <h4 className='empty-cart'>is currently empty</h4>
        ) : null}
      </header>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            onRemoveLastItem={handleRemoveLastItem}
            item={item}
          />
        ))}
      </div>
      {cart.length > 0 ? (
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
