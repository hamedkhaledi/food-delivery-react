import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path=''>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
