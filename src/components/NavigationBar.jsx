import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavigationBar = () => (
  <NavWrapper>
    <Link to="/"><div className="logo-wrapper">Bookstore Cms</div></Link>
    <ul className="menu">
      <Link to="/"><li>Books</li></Link>
      <Link to="/catagories"><li>Catagories</li></Link>
    </ul>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  
`

export default NavigationBar;
