import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../styles/FoodCart.css';
import '../../styles/Cart.css';
import CartItem from './CartItem';
import CartHeader from './Header/CartHeader';

const Cart = (props) => {
  const history = useHistory();
  const location = useLocation();
  let orderedFoods = location.state.orderedFoods;
  const currentNumber = location.state.currentNumber;

  function handleShop() {
    let path = '/shop';
    history.push({
      pathname: path,
      state: { currentNumber: currentNumber, orderedFoods: orderedFoods }
    });
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
                <span class='mr-1'>Sort by:</span>
                <span class='mr-1 font-weight-bold'>order time</span>
                <i class='fa fa-angle-down'></i>
              </div>
            </div>
            {orderedFoods.map((food, index) => {
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
