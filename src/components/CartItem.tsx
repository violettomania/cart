import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useAppDispatch } from '../hooks/hooks';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { useState } from 'react';

interface CartItemProps {
  title: string;
  price: number;
  img: string;
  amount: number;
}

export default function CartItem({
  title,
  price,
  img,
  amount: amountProp,
}: CartItemProps) {
  const [amount, setAmount] = useState(amountProp);
  const dispatch = useAppDispatch();

  const handleAddItem = () => {
    setAmount(amount + 1);
    dispatch(addToCart());
  };

  const handleRemoveItem = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      dispatch(removeFromCart());
    }
  };

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>{`$${price}`}</span>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={handleAddItem}>
          <FaAngleUp className='amount-icon' />
        </button>
        <span className='amount'>{amount}</span>
        <button className='amount-btn' onClick={handleRemoveItem}>
          <FaAngleDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
}
