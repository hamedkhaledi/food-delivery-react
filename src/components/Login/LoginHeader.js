import { AppBar, Toolbar } from '@material-ui/core';
import '../../styles/LoginHeader.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import React from 'react';

export default function Header() {
  const history = useHistory();

  function handleSignUp(event) {
    let path = '/signup';
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
        <Button onClick={handleSignUp} className='buttonImage'></Button>
        <Button onClick={handleSignUp} className='buttonHeader'>
          Sign Up
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
