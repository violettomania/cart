import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useAppDispatch } from '../hooks/hooks';
import {
  stopItemImageLoading,
  addToCart,
  removeFromCart,
} from '../slices/cartSlice';

interface CartItemProps {
  item: Item;
}

export default function CartItem({ item }: CartItemProps) {
  const { id, img, title, price, amount: amountProp } = item;

  const dispatch = useAppDispatch();

  const handleAddItem = (id: number) => {
    dispatch(addToCart(id));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleImageLoad = () => {
    dispatch(stopItemImageLoading());
  };

  return (
    <article className='cart-item'>
      <img src={img} alt={title} onLoad={handleImageLoad} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>{`$${price}`}</span>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => handleAddItem(id)}>
          <FaAngleUp className='amount-icon' />
        </button>
        <span className='amount'>{amountProp}</span>
        <button className='amount-btn' onClick={() => handleRemoveItem(id)}>
          <FaAngleDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
}
