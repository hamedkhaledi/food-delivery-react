import React from 'react';
import '../../styles/FoodCart.css';

const FoodCart = (props) => {
  return (
    <div class='u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3'>
      <div class='u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-5'>
        <img
          alt=''
          class='u-expanded-width-xs u-image u-image-default u-image-3'
          src={props.food.imageUrl}
        />
        <div class='u-container-style u-expanded-width-xs u-group u-video-cover u-group-3'>
          <div class='u-container-layout u-valign-middle-xl u-valign-middle-xs u-container-layout-6'>
            <h3 class='u-custom-font u-font-oswald u-text u-text-9'>
              {props.food.name}
            </h3>
            <p class='u-text u-text-10'>Restaurant : {props.food.restaurant}</p>
            <h6 class='u-text u-text-palette-1-base u-text-11'>
              ${props.food.price}
            </h6>
            <button
              onClick={props.onAddFood}
              class='u-btn u-btn-rectangle u-button-style u-grey-10 u-btn-3'
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodCart;
