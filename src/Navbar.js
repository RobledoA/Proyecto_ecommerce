import React from 'react';
import './Navbar.css';  // Asegúrate de tener un archivo de estilos separado

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Compro todo</h2>
      </div>
      <form className="d-flex">
          <input className='form-control me-2 buscar' type="search" placeholder='Buscar productos' aria-label='Search' />
          <button className='btn btn-outline' type='submit'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className='bi bi-search'
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
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