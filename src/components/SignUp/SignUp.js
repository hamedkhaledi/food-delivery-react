import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Login.css';
import { useHistory } from 'react-router-dom';
import SignUpHeader from './SignUpHeader';

export default function SignUp() {
  const history = useHistory();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(false);

  function validateForm() {
    return (
      number.length === 11 &&
      number.match(/^[0-9]*$/) &&
      password.length >= 8 &&
      password.match(/^[A-Za-z0-9]*$/) &&
      name.length > 0 &&
      region.length > 0 &&
      address.length > 0
    );
  }

  function signUpUser(event) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          number: number,
          password: password,
          name: name,
          region: region,
          address: address
        }
      })
    };
    console.log(requestOptions);
    fetch('http://localhost:8080/signup', requestOptions)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        handleLogin()
      })
      .catch((error) => {
        setError(true);
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    signUpUser();
  }
  function handleLogin() {
    console.log('hello');
    let path = '/login';
    history.push(path);
    setError(false);
  }
  return (
    <div class='Login'>
      <SignUpHeader />
      <Form>
        <Form.Group size='lg' controlId='number'>
          <Form.Label class='text-white'>Number</Form.Label>
          <Form.Control
            autoFocus
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password' required>
          <Form.Label class='text-white'>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label class='text-white'>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label class='text-white'>Region</Form.Label>
          <Form.Control
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label class='text-white'>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        {error && <h5 class='text-danger'>sign up failed</h5>}
        <Button
          block
          size='lg'
          type='submit'
          disabled={!validateForm()}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
