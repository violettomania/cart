import { useAppSelector } from '../hooks/hooks';
import Cart from './Cart';
import Navbar from './Navbar';
import Spinner from './Spinner';

export default function App() {
  const isLoading = useAppSelector((state) => state.cart.isLoading);

  return (
    <main>
      {isLoading ? (
        <>
          <Spinner />
          <Navbar />
          <Cart />
        </>
      ) : (
        <>
          <Navbar />
          <Cart />
        </>
      )}
    </main>
  );
}
