import { FaShoppingCart } from 'react-icons/fa';
import { useAppSelector } from '../hooks/hooks';

export default function Navbar() {
  const itemAmount = useAppSelector((state) => state.cart.items.length);

  return (
    <nav>
      <div className='nav-center'>
        <h4>cart</h4>
        <div className='nav-container'>
          <FaShoppingCart className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{itemAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
