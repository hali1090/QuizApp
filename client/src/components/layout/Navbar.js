import React from 'react';

export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i className='fas fa-code'></i> QuizApp!
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Other Users</a>
        </li>
        <li>
          <a href='register.html'>Join!</a>
        </li>
        <li>
          <a href='login.html'>Login!</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
