/* eslint-disable use-isnan */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Login.css';
import { useHistory } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import User from '../../Model/User';
import Order from '../../Model/Order';

export default function Login() {
  const history = useHistory();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return (
      number.length === 11 &&
      number.match(/^[0-9]*$/) &&
      password.length > 8 &&
      password.match(/^[A-Za-z0-9]*$/)
    );
  }
  function getUser() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number: number, password: password })
    };
    fetch('', requestOptions)
      .then((response) => response.json())
      .then((jsonData) => {
        return new User(
          jsonData.number,
          jsonData.password,
          jsonData.name,
          jsonData.region,
          jsonData.address
        );
      })
      .catch((error) => {
        return NaN;
      });
  }
  function handleSubmit(event) {
    let path = '/Shop';
    let user = getUser();
    if (user !== NaN) {
      history.push({
        pathname: path,
        state: { currentUser: user}
      });
    }
  }

  return (
    <div className='Login'>
      <LoginHeader />
      <section>
        <Form onSubmit={handleSubmit}>
          <Form.Group size='lg' controlId='number'>
            <Form.Label class='text-white'>Number</Form.Label>
            <Form.Control
              autoFocus
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group size='lg' controlId='password'>
            <Form.Label class='text-white'>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            block
            size='lg'
            variant='success'
            type='submit'
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Form>
      </section>
    </div>
  );
}
