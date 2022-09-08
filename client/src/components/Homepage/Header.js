import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../index.css';

function Header() {
  return (
    <div className='header-image'>
        <div className='header-content'>
            <div className='motto'>
                <p>Become The Best Version of Yourself</p>
            </div>
            <div className='signup-button'>
                <Button variant='outline-primary'>Sign Up Today!</Button>
            </div>
        </div>
    </div>
  )
}

export default Header;
