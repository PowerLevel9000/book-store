import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

const NavigationBar = () => (
  <NavWrapper>
    <div className="menu main">
      <Link to="/"><div className="logo-wrapper">Bookstore Cms</div></Link>
      <ul className="menu">
        <Link to="/"><li>Books</li></Link>
        <Link to="/catagories"><li style={{ opacity: 0.5 }}>Catagories</li></Link>
      </ul>
    </div>
    <div className="ovel">
      <FaUserAlt />
    </div>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5.5rem;
  margin: 0 0 2.375rem;
  background: #fff;
  .menu {
    width: 50%;
    display: flex;
    gap: 1rem;
    align-items: center;
    list-style-type: none;
    .logo-wrapper {
      font-family: Montserrat, sans-serif;
      font-size: 1.875rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #0290ff
    }
    a {
      color: #121212;
      text-decoration: none;
    }
    li {
      color: #121212;
    }
  }
  .ovel {
    height: 2.8rem;
    width: 2.8rem;
    border: 1px solid #e8e8e8;
    border-radius: 50%;
    color: #0290ff;
    display: grid;
    place-items: center;
  }

  .main {
    min-width: 600px;
  }
`;

// Link = styled.a`
//   opacity: ${props=> props.clicked?"unset":"0.5"};
// `;

export default NavigationBar;
