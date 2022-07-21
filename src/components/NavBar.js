import React from 'react'
import logo from '../images/txmxddls.jpeg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

           <Link to='/'><img src={logo} alt="Logo" width="70" height="70"/></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gallery
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li className="dropdown-item"><Link to='/category/1'>Animals</Link></li>
                  <li className="dropdown-item"><Link to='/category/2'>People</Link></li>
                  <li className="dropdown-item"><Link to='/category/3'>Funny</Link></li>
                  <li className="dropdown-item"><Link to='/'>All</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Buy or Hire
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><p className="dropdown-item">Buy a Doodle</p></li>
                  <li><p className="dropdown-item">Hire Services</p></li>
                </ul>
              </li>
              <li className="nav-item">
                <p className="nav-link">Contact</p>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>


    </>
  )
}

export default NavBar