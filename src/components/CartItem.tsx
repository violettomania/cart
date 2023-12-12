import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useAppDispatch } from '../hooks/hooks';
import { addToCart, removeFromCart } from '../slices/cartSlice';

interface CartItemProps {
  title: string;
  price: number;
  img: string;
  amount: number;
}

export default function CartItem({ title, price, img, amount }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>{`$${price}`}</span>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(addToCart())}>
          <FaAngleUp className='amount-icon' />
        </button>
        <span className='amount'>{amount}</span>
        <button
          className='amount-btn'
          onClick={() => dispatch(removeFromCart())}
        >
          <FaAngleDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
}
