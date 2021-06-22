import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import FoodCart from './FoodCart';
import ShopHeader from './Header/ShopHeader';
import Food from '../../Model/Food';
const Shop = (props) => {
  const history = useHistory();
  const location = useLocation();
  let orderedFoods = location.state.orderedFoods;
  const currentNumber = location.state.currentNumber;
  console.log(location);
  let imgUrl =
    'https://media.istockphoto.com/photos/square-crust-flatbread-pizza-picture-id1032111568?s=612x612';
  let food1 = new Food('1', 'pizza', 'rs1', '10', imgUrl);
  let food2 = new Food('2', 'pizza1', 'rs2', '20', imgUrl);
  let food3 = new Food('3', 'pizza2', 'rs3', '30', imgUrl);
  let food4 = new Food('4', 'pizza3', 'rs4', '40', imgUrl);
  let foods = [food1, food2, food3, food4];

  function onAddFood(food) {
    orderedFoods.push(food);
    console.log(orderedFoods);
  }

  function handleProfile() {
    let path = '/user';
    history.push({
      pathname: path,
      state: { currentNumber: currentNumber, orderedFoods: orderedFoods }
    });
  }

  function handleCart() {
    let path = '/cart';
    history.push({
      pathname: path,
      state: { currentNumber: currentNumber, orderedFoods: orderedFoods }
    });
  }

  return (
    <div>
      <ShopHeader
        handleCart={() => handleCart()}
        handleProfile={() => handleProfile()}
      />
      {/* <h1>{location.state.currentNumber}</h1> */}
      <section
        class='u-align-center u-clearfix u-grey-10 u-section-1'
        id='carousel_0199'
      >
        <div class='u-clearfix u-sheet u-sheet-1'>
          <div class='u-expanded-width-xs u-list u-list-1'>
            <div class='u-repeater u-repeater-1'>
              {foods.map((food, index) => {
                return (
                  <FoodCart food={food} onAddFood={() => onAddFood(food)} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Shop;
