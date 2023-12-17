import { useAppSelector } from '../hooks/hooks';
import CartContainer from './CartContainer';
import Spinner from './Spinner';

export default function App() {
  const isLoading = useAppSelector((state) => state.cart.isLoading);

  return (
    <main>
      {isLoading ? (
        <>
          <Spinner />
          <CartContainer />
        </>
      ) : (
        <>
          <CartContainer />
        </>
      )}
    </main>
  );
}
