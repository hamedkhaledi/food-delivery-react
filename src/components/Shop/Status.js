import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../styles/Status.css';
import CartHeader from './Header/CartHeader';
import User from '../../Model/User';
import Order from '../../Model/Order';

const Status = (props) => {
  const history = useHistory();
  const location = useLocation();
  let completeness = '1';
  let currentUser = location.state.User;

  function handleShop() {
    let path = '/status';
    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }
  //   function handleShop() {
  //     let path = '/shop';
  //     history.push({
  //       pathname: path,
  //       state: { currentNumber: currentNumber, orderedFoods: orderedFoods }
  //     });
  //   }

  return (
    <div class='status-container '>
      <div class='card'>
        <CartHeader />
        <span id='heading'>Thank for Ordering</span>
        <p id='sub-heading'>Progress Bar</p>
        <div class='container'>
          <div class='progress_b'>
            <div class='row'>
              <div class='col'>
                <div class='col'>
                  <span id='left'>completeness</span>
                </div>
              </div>
              <div class='col col-2'>
                <span id='right'>50%</span>
              </div>
            </div>
            <div class='progress'>
              <div class={'progress-bar  progress' + completeness}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Status;
