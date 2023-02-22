import React from 'react'
import './Navbar.css'
import Logo from './img/Logo.png'
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {


 
  return (
    <div className='navbar__container'>
      <div className="Navlogo">TAXI BOAT SUNRISE LOGO</div>
      
      <ul className='nav__items'>
        <li className="nav__item">
          <Link   activeClass="active"
                  to="home"
                  spy={true}
                  offset={-70}
                  duration={500}
                  smooth={true} 
          >
            HOME
          </Link>
        </li>
        <li className="nav__item">
          <Link   activeClass="active"
                  to="info"
                  spy={true}
                  offset={-50}
                  duration={500}
                  smooth={true} 
          >
            ROUTE
          </Link>
        </li>
        <li className="nav__item">
          <Link   activeClass="active"
                  to="about"
                  spy={true}
                  offset={-50}
                  duration={500}
                  smooth={true} 
          >
            ABOUT
          </Link>
        </li>
        <li className="nav__item">
          <Link   activeClass="active"
                  to="contact"
                  spy={true}
                  offset={-70}
                  duration={500}
                  smooth={true} 
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar