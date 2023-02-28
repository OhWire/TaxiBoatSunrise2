import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import { useState ,useEffect} from 'react'

const Navbar = () => {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false)
       } else {
        setButton(true)
       }
    }

    useEffect (() => {
      showButton()
    },[])

    window.addEventListener('resize', showButton)
 
  return (
    <div className=' Navbar navbar__container'>
      <div className="Navlogo">TAXI BOAT SUNRISE LOGO</div>
      
      <ul className={click ? "nav__items nav-menu active" : "nav__items nav-menu"}>
        <li className="nav__item">
          <Link   
                  to="home"
                  spy={true}
                  offset={-70}
                  duration={500}
                  smooth={true} 
                  onClick={closeMobileMenu}
          >
            HOME
          </Link>
        </li>
        <li className="nav__item">
          <Link   
                  to="info"
                  spy={true}
                  offset={-50}
                  duration={500}
                  smooth={true} 
                  onClick={closeMobileMenu}
          >
            ROUTE
          </Link>
        </li>
        <li className="nav__item">
          <Link   
                  to="about"
                  spy={true}
                  offset={-50}
                  duration={500}
                  smooth={true} 
                  onClick={closeMobileMenu}
          >
            ABOUT
          </Link>
        </li>
        <li className="nav__item">
          <Link   
                  to="contact"
                  spy={true}
                  offset={-70}
                  duration={500}
                  smooth={true} 
                  onClick={closeMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
       </div>
    </div>
  )
}

export default Navbar