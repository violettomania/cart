import { FaAngleUp, FaAngleDown, FaShoppingCart } from 'react-icons/fa';

export default function App() {
  return (
    <main>
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
      <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        <div>
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
          <article className='cart-item'>
            <img src='./images/phone-2.png' alt='google pixel' />
            <div>
              <h5>google pixel</h5>
              <span className='item-price'>$499.99</span>
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
          <article className='cart-item'>
            <img src='./images/phone-3.png' alt='Xiaomi Redmi Note 2' />
            <div>
              <h5>Xiaomi Redmi Note 2</h5>
              <span className='item-price'>$699.99</span>
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
          <article className='cart-item'>
            <img src='./images/phone-4.png' alt='Samsung Galaxy S7' />
            <div>
              <h5>Samsung Galaxy S7</h5>
              <span className='item-price'>$599.99 </span>
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
        </div>
        <footer>
          <hr />
          <div>
            <h5 className='cart-total'>
              total <span>$2199.96</span>
            </h5>
          </div>
          <button className='btn btn-hipster'>clear cart</button>
        </footer>
      </section>
    </main>
  );
}
