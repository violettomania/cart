import { items } from '../data';
import CartItem from './CartItem';
import { initializeCart } from '../slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

export default function Cart() {
  const dispatch = useAppDispatch();
  //   const itemAmount = useAppSelector((state) => state.cart.amount);

  dispatch(initializeCart(items.length));

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
        {/* {!!itemAmount || <h4 className='empty-cart'>is currently empty</h4>} */}
      </header>
      <div>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>{`$${'placeholder'}`}</span>
          </h5>
        </div>
        <button className='btn btn-hipster'>clear cart</button>
      </footer>
    </section>
  );
}
