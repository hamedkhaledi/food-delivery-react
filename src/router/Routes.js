import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signUp'>
          <SignUp/>
        </Route>
        <Route path=''>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
