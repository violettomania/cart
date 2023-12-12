import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav>
      <div className='nav-center'>
        <h4>cart</h4>
        <div className='nav-container'>
          <FaShoppingCart className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>4</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
