import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useAppDispatch } from '../hooks/hooks';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { useState } from 'react';

interface CartItemProps {
  item: Item;
  onRemoveLastItem: (id: number) => void;
}

// TODO use state from cartSlice
export default function CartItem({ item, onRemoveLastItem }: CartItemProps) {
  const { id, img, title, price, amount: amountProp } = item;

  const [amount, setAmount] = useState(amountProp);
  const dispatch = useAppDispatch();

  const handleAddItem = (id: number) => {
    setAmount(amount + 1);
    dispatch(addToCart(id));
  };

  const handleRemoveItem = (id: number) => {
    if (amount > 0) {
      setAmount(amount - 1);
      dispatch(removeFromCart(id));
    }
    if (amount === 1) {
      onRemoveLastItem(id);
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
        <button className='amount-btn' onClick={() => handleAddItem(id)}>
          <FaAngleUp className='amount-icon' />
        </button>
        <span className='amount'>{amount}</span>
        <button className='amount-btn' onClick={() => handleRemoveItem(id)}>
          <FaAngleDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
}
