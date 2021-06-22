import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../styles/FoodCart.css';

const CartItem = (props) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div class='d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded'>
      <div class='mr-1'>
        <img alt='' class='rounded' src={props.food.imageUrl} width='70' />
      </div>
      <div class='d-flex flex-column align-items-center product-details'>
        <span class='font-weight-bold'>{props.food.name}</span>
        <div class='d-flex flex-row product-desc'>
          <div class='size mr-1'>
            <span class='text-grey'>Restaurant:</span>
            <span class='font-weight-bold'>&nbsp;{props.food.restaurant}</span>
          </div>
        </div>
      </div>
      <div class='d-flex flex-row align-items-center qty'>
        <i class='fa fa-minus text-danger'></i>
        <h5 class='text-grey mt-1 mr-1 ml-1'>1</h5>
        <i class='fa fa-plus text-success'></i>
      </div>
      <div>
        <h5 class='text-grey'>${props.food.price}</h5>
      </div>
      <div class='d-flex align-items-center'>
        <i class='fa fa-trash mb-1 text-danger'></i>
      </div>
    </div>
  );
};
export default CartItem;
