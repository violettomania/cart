import Cart from './Cart';
import Navbar from './Navbar';
import { useAppSelector } from '../hooks/hooks';

export default function CartContainer() {
  const isLoading = useAppSelector((state) => state.cart.isLoading);

  return (
    <>
      <Navbar isLoading={isLoading} />
      <Cart isLoading={isLoading} />
    </>
  );
}
