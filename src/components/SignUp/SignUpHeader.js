import { AppBar, Toolbar } from '@material-ui/core';
import '../../styles/Header.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import React from 'react';

export default function SignUpHeader() {
  const history = useHistory();

  function handleLogin(event) {
    let path = '/login';
    history.push(path);
  }
  function handleManagement(event) {
    let path = '/management';
    history.push(path);
  }

  const displayDesktop = () => {
    return <Toolbar className='loginHeader'>{getMenuButtons()}</Toolbar>;
  };

  const getMenuButtons = () => {
    return (
      <div className='loginHeader'>
        <Button onClick={handleLogin} className='buttonHeader'>
          Login
        </Button>
        <Button onClick={handleManagement} className='buttonHeader'>
          Management
        </Button>
      </div>
    );
  };

  return (
    <header className='loginHeader container'>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
