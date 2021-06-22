import { AppBar, Toolbar } from '@material-ui/core';
import '../../../styles/ShopHeader.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import React from 'react';

export default function Header(props) {
  const history = useHistory();

  function handleManagement(event) {
    let path = '/management';
    history.push(path);
  }

  return (
    <div class='header'>
      <nav class='navbar navbar-expand-sm bg-dark navbar-dark fixed-top '>
        <img
          alt=''
          src='https://images-platform.99static.com/K5Ruk6HZNZoLqnA_LvJBh2uBPxA=/223x0:1283x1060/500x500/top/smart/99designs-contests-attachments/68/68179/attachment_68179294'
          class='logo'
        />
        <button
          class='navbar-toggler'
          data-toggle='collapse'
          data-target='#navcol-1'
        >
          <span class='sr-only'>Toggle navigation</span>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navcol-1'>
          <ul class='nav navbar-nav'>
            <li class='nav-item' role='presentation'>
              Search :
            </li>
          </ul>
          <form class='form-inline mr-auto' target='_self'>
            <div class='form-group'>
              <label for='search-field'>
                <i class='fa fa-search'></i>
              </label>
              <input
                class='form-control search-field'
                type='search'
                name='search'
                id='search-field'
                placeholder='...'
              />
            </div>
          </form>
          <button class='btn btn-outline-success' onClick={props.handleProfile}>
            profile
          </button>
          <button class='btn btn-outline-danger' onClick={props.handleCart}>
            Cart
          </button>
        </div>
      </nav>
    </div>
  );
}
