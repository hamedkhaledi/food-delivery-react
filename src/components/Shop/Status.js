import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../styles/Status.css';
import CartHeader from './Header/CartHeader';

const Status = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [comment, setComment] = useState('');
  const [time, setTime] = useState(Date.now());
  let currentUser = location.state.currentUser;

  const [remaining, setRemaining] = useState(
    parseInt(getDiffSeconds(currentUser.order.startTime))
  );

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function getDiffSeconds(time) {
    let diff = Date.now() - time;
    return parseInt(diff / 1000);
  }
  if (remaining < 0) {
    setRemaining(0);
  }
  if (remaining > currentUser.order.preparingTime) {
    setRemaining(currentUser.order.preparingTime);
  }
  function handleShop() {
    let path = '/shop';
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
    <div class='status-container'>
      <div class='card'>
        <CartHeader handleShop={() => handleShop()} />
        <span id='heading'>Thanks for Ordering</span>
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
                <span id='right'>
                  {Math.round(
                    (remaining * 100) / currentUser.order.preparingTime
                  )}
                  %
                </span>
              </div>
            </div>
            <div class='progress'>
              <div
                class={'progress-bar'}
                style={{
                  width:
                    (remaining * 100) / currentUser.order.preparingTime + '%'
                }}
              ></div>
            </div>
            {remaining >= currentUser.order.preparingTime && (
              <div>
                <h2 class='text-success'> your order is Ready</h2>
                <input
                  autoFocus
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  placeholder='comment'
                />

                <button
                  class='btn center btn-outline-warning'
                  onClick={handleShop}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Status;
