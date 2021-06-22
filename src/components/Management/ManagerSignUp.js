import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/management/signUp.css';
import { useHistory } from 'react-router-dom';
import SignUpHeader from '../SignUp/SignUpHeader';

export default function MangerSignUp() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regions, setRegions] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(event) {
    let path = '/login';
    history.push(path);
  }

  return (
    <div class='manager-signup-container'>
      <section class='get-in-touch'>
        <SignUpHeader />
        <h1 class='title'>Get in touch</h1>
        <form class='contact-form row'>
          <div class='form-field col-lg-6'>
            <input
              id='name'
              class='input-text js-input'
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label class='label' for='name'>
              Name
            </label>
          </div>
          <div class='form-field col-lg-6 '>
            <input
              id='email'
              class='input-text js-input'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label class='label' for='email'>
              E-mail
            </label>
          </div>
          <div class='form-field col-lg-6 '>
            <input
              id='password'
              class='input-text js-input'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label class='label' for='password'>
              Password
            </label>
          </div>
          <div class='form-field col-lg-6 '>
            <input
              id='work-time'
              class='input-text js-input'
              type='text'
              required
              value={workTime}
              onChange={(e) => setWorkTime(e.target.value)}
            />
            <label class='label' for='work-time'>
              Work Time
            </label>
          </div>
          <div class='form-field col-lg-6 '>
            <input
              id='regions'
              class='input-text js-input'
              type='text'
              required
              value={regions}
              onChange={(e) => setRegions(e.target.value)}
            />
            <label class='label' for='regions'>
              Regions
            </label>
          </div>
          <div class='form-field col-lg-6 '>
            <input
              id='time'
              class='input-text js-input'
              type='Text'
              required
              value={preparationTime}
              onChange={(e) => setPreparationTime(e.target.value)}
            />
            <label class='label' for='time'>
              Preparation Time
            </label>
          </div>

          <div class='form-field col-lg-12'>
            <input
              id='message'
              class='input-text js-input'
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label class='label' for='message'>
              Address
            </label>
          </div>
          <div class='form-field col-lg-12'>
            <input class='submit-btn' type='submit' value='Submit' />
          </div>
        </form>
      </section>
    </div>
  );
}
