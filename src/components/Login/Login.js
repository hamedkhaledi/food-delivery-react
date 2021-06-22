/* eslint-disable use-isnan */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Login.css';
import { useHistory } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import User from '../../Model/User';

export default function Login() {
  const history = useHistory();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  function validateForm() {
    return (
      number.length === 11 &&
      number.match(/^[0-9]*$/) &&
      password.length >= 8 &&
      password.match(/^[A-Za-z0-9]*$/)
    );
  }
  function getUser() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: { number: number, password: password } })
    };
    var user = NaN;
    fetch('http://localhost:8080/login', requestOptions)
      .then((response) => response.json())
      .then((jsonData) => {
        user = new User(
          jsonData.user.number,
          jsonData.user.password,
          jsonData.user.name,
          jsonData.user.region,
          jsonData.user.address,
          [],
          jsonData.user.credit
        );
        console.log(user);
        handleLogin(user);
      })
      .catch((error) => {
        setError(true);
      });
  }
  function handleLogin(user) {
    let path = '/Shop';
    console.log(user);
    history.push({
      pathname: path,
      state: { currentUser: user }
    });
    setError(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let user = getUser();
    console.log(user);
  }

  return (
    <div class='Login'>
      <LoginHeader />
      <section>
        <Form>
          <Form.Group size='lg' controlId='number'>
            <Form.Label class='text-white'>Number</Form.Label>
            <Form.Control
              autoFocus
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                setError(false);
              }}
            />
          </Form.Group>
          <Form.Group size='lg' controlId='password'>
            <Form.Label class='text-white'>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />
          </Form.Group>
          {error && <h5 class='text-danger'>number or password is wrong</h5>}
          <Button
            block
            size='lg'
            variant='success'
            type='submit'
            disabled={!validateForm()}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Form>
      </section>
    </div>
  );
}
