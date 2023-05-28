import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrap>
    <p>
      All Credits and Right Belongs To ©️
      <a href="http://github.com/PowerLevel9000" target="_blank" rel="noopener noreferrer">Adarsh</a>
      {' '}
      Under
      {' '}
      <a href="https://github.com/PowerLevel9000/book-store/blob/dev/LICENSE" target="_blank" rel="noopener noreferrer">License</a>
    </p>
  </FooterWrap>
);

const FooterWrap = styled.footer`
   background-color: #0290ff;
   text-align: center;
   padding: 1rem;
   color: #fff;
   a{
    color: black;
    text-decoration: none;
    font-weight: 800;
    line-spacing: 400;
   }
   p {
    margin: 0;
   }
`;

export default Footer;
