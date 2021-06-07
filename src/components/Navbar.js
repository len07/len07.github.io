import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
      showButton()
    }, []);

window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick=
          {closeMobileMenu}>
           lena <i className='i.fab.fa-typo3'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                  <Link to='about' className='nav-links' onClick={closeMobileMenu}>
                      About 
                  </Link>
              </li>
              <li className='nav-item'>
                  <Link to='experience' className='nav-links' onClick={closeMobileMenu}>
                      Experience
                  </Link>
              </li>
              <li className='nav-item'>
                  <Link to='blog' className='nav-links' onClick={closeMobileMenu}>
                      Blog
                  </Link>
              </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={()=>window.open('https://drive.google.com/file/d/1l2AdnVnDVfyPTZt_p90kN_sgNkizA3nD/view?usp=sharing')}>Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

