import { FaShoppingCart } from 'react-icons/fa';
import { useAppSelector } from '../hooks/hooks';

export default function Navbar() {
  const amount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.amount, 0)
  );

  const isLoading = useAppSelector((state) => state.cart.isLoading);

  return (
    <nav className={`${isLoading && 'hidden'}`}>
      <div className='nav-center'>
        <h4>cart</h4>
        <div className='nav-container'>
          <FaShoppingCart className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
