import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../styles/FoodCart.css';
import '../../styles/Cart.css';
import CartItem from './CartItem';
import CartHeader from './Header/CartHeader';

const Cart = (props) => {
  const history = useHistory();
  const location = useLocation();
  let currentUser = location.state.currentUser;

  let price = 0;
  for (let food of currentUser.order.foods) {
    price += food.price;
  }

  function handleShop() {
    let path = '/shop';
    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }
  function handleSubmit() {
    let path = '/status';
    console.log(currentUser);
    currentUser.credit -= price;
    currentUser.order.foods = [];
    currentUser.order.startTime = Date.now().toString();
    currentUser.order.preparingTime = 20;
    currentUser.order.status = 0;

    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }
  function validate() {
    if (currentUser.order.foods.length === 0) {
      return false;
    }
    return true;
  }

  return (
    <div class='container-all '>
      <div class='container mt-5 mb-5'>
        <CartHeader handleShop={() => handleShop()} />
        <div class='d-flex justify-content-center row'>
          <div class='col-md-8'>
            <div class='p-2'>
              <h4 class='text-white'>Shopping cart</h4>
              <div class='d-flex flex-row align-items-center pull-right text-white'>
                <span class='mr-1'>Price:</span>
                <span class='mr-1 font-weight-bold'>{price}$</span>
                <i class='fa fa-angle-down'></i>
              </div>
            </div>
            {currentUser.order.foods.map((food, index) => {
              return <CartItem food={food} />;
            })}
            <div class='d-flex flex-row align-items-center mt-3 p-2 bg-white rounded'>
              <input
                type='text'
                class='form-control border-0 gift-card'
                placeholder='discount code/gift card'
              />
              <button class='btn btn-outline-warning btn-sm ml-2' type='button'>
                Apply
              </button>
            </div>
            <div class='d-flex flex-row align-items-center mt-3 p-2 bg-white rounded'>
              <button
                class='btn btn-warning btn-block btn-lg ml-2 pay-button'
                type='button'
                onClick={handleSubmit}
                disabled={!validate()}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
