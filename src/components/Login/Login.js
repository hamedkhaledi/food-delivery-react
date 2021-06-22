import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Login.css';
import { useHistory } from 'react-router-dom';
import LoginHeader from './LoginHeader';

export default function Login() {
  const history = useHistory();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return number.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    let path = '/Shop';
    history.push({
      pathname: path,
      state: { currentNumber: number, orderedFoods: [] }
    });
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
