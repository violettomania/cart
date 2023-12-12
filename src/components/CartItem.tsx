import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

export default function CartItem() {
  return (
    <article className='cart-item'>
      <img src='./images/phone-1.png' alt='Samsung Galaxy S8' />
      <div>
        <h5>Samsung Galaxy S8</h5>
        <span className='item-price'>$399.99</span>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button className='amount-btn'>
          <FaAngleUp className='amount-icon' />
        </button>
        <span className='amount'>1</span>
        <button className='amount-btn'>
          <FaAngleDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
}
