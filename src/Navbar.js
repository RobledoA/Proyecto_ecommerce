import React from 'react';
import './Navbar.css';  // Asegúrate de tener un archivo de estilos separado

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>My E-commerce</h2>
      </div>
      <form>
        <input className='buscar' placeholder='Buscar productos' ></input>
     </form>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
   
    </nav>
  );
};

export default Navbar;