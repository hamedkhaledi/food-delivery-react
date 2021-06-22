import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Shop from '../components/Shop/Shop';
import User from '../components/User/User';
import FoodCart from '../components/Shop/FoodCart';
import Cart from '../components/Shop/Cart';
import Status from '../components/Shop/Status';
import MangerSignUp from '../components/Management/ManagerSignUp';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/user'>
          <User />
        </Route>
        <Route path='/food'>
          <FoodCart />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/status'>
          <Status />
        </Route>
        <Route path='/management'>
          <MangerSignUp />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
