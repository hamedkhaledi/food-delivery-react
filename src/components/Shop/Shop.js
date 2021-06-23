import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import FoodCart from './FoodCart';
import ShopHeader from './Header/ShopHeader';
import Foods from '../../Model/Foods';

const Shop = (props) => {
  const history = useHistory();
  const location = useLocation();
  let currentUser = location.state.currentUser;

  const [search, setSearch] = useState('');
  const [firstFood, setFirstFood] = useState(currentUser.order.foods[0]);

  let foods = Foods;
  console.log('foods : ' + foods);
  function onAddFood(food) {
    if (firstFood === undefined) {
      setFirstFood(food);
    }
    currentUser.order.foods.push(food);
    //TODO
  }

  function handleProfile() {
    let path = '/user';
    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }

  function handleCart() {
    let path = '/cart';
    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }
  function handleSignout() {
    let path = '/login';
    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }

  function handleStatus() {
    let path = '/status';
    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }

  return (
    <div>
      <ShopHeader
        handleCart={() => handleCart()}
        handleProfile={() => handleProfile()}
        handleSignout={() => handleSignout()}
        handleStatus={() => handleStatus()}
        search={search}
        setSearch={setSearch}
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
                  (food.name.includes(search) ||
                    food.restaurant.includes(search)) &&
                  (firstFood === undefined ||
                    firstFood.restaurant === food.restaurant) && (
                    <FoodCart
                      key={index}
                      food={food}
                      onAddFood={() => onAddFood(food)}
                    />
                  )
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
