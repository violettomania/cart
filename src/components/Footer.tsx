import { clearCart } from '../slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

export default function Footer() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () =>
    cart.reduce((sum, item) => sum + item.amount * item.price, 0).toFixed(2);

  return (
    <>
      {cart.length > 0 ? (
        <footer>
          <hr />
          <div>
            <h5 className='cart-total'>
              total <span>{`$${calculateTotal()}`}</span>
            </h5>
          </div>
          <button className='btn btn-hipster' onClick={handleClearCart}>
            clear cart
          </button>
        </footer>
      ) : null}
    </>
  );
}
