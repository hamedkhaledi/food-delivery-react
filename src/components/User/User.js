import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/User.css';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const User = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  return (
    <div class='page-content page-container' id='page-content'>
      <div class='padding'>
        <div class='row container d-flex justify-content-center'>
          <div class='col-xl-6 col-md-12'>
            <div class='card user-card-full'>
              <div class='row m-l-0 m-r-0'>
                <div class='col-sm-4 bg-c-lite-green user-profile'>
                  <div class='card-block text-center text-white'>
                    <div class='m-b-25'>
                      <image
                        src='https://img.icons8.com/bubbles/100/000000/user.png'
                        class='img-radius'
                        alt='User-Profile-Image'
                      ></image>
                    </div>
                    <h6 class='f-w-600'>Name</h6>
                    <p>Hamed</p>{' '}
                    <i class=' mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16'></i>
                  </div>
                </div>
                <div class='col-sm-8'>
                  <div class='card-block'>
                    <h6 class='m-b-20 p-b-5 b-b-default f-w-600'>
                      Information
                    </h6>
                    <div class='row'>
                      <div class='col-sm-6'>
                        <p class='m-b-10 f-w-600'>Phone</p>
                        <h6 class='text-muted f-w-400'>98979989898</h6>
                      </div>
                    </div>
                    <h6 class='m-b-20 m-t-40 p-b-5 b-b-default f-w-600'>
                      Address
                    </h6>
                    <div class='row'>
                      <div class='col-sm-6'>
                        <p class='m-b-10 f-w-600'>Region</p>
                        <h6 class='text-muted f-w-400'>Sam Disuja</h6>
                      </div>
                      <div class='col-sm-6'>
                        <p class='m-b-10 f-w-600'>Address</p>
                        <h6 class='text-muted f-w-400'>Dinoter husainm</h6>
                      </div>
                    </div>
                    <h6 class='m-b-20 m-t-40 p-b-5 b-b-default f-w-600'>
                      Password
                    </h6>
                    <div class='row'>
                      <div class='col-sm-6'>
                        <p class='m-b-10 f-w-600'>new password</p>
                        <input
                          type='password'
                          class='text-muted f-w-400'
                        ></input>
                        <Button class='text-muted f-w-400 '>Change</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
