import '../../../styles/ShopHeader.css';
import React from 'react';

export default function Header(props) {
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
              <label>
                <i class='fa fa-search'></i>
              </label>
              <input
                class='form-control search-field'
                type='search'
                name='search'
                id='search-field'
                placeholder='...'
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
              />
            </div>
          </form>
          <button
            class='btn btn-outline-light m-1'
            onClick={props.handleStatus}
          >
            Status
          </button>
          <button
            class='btn btn-outline-danger m-1'
            onClick={props.handleSignout}
          >
            sign out
          </button>
          <button
            class='btn btn-outline-success m-1'
            onClick={props.handleProfile}
          >
            profile
          </button>
          <button
            class='btn btn-outline-warning m-1'
            onClick={props.handleCart}
          >
            Cart
          </button>
        </div>
      </nav>
    </div>
  );
}
