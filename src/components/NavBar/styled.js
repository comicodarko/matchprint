import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  background: #303030;
  height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const NavLink = styled(Link)`
  color: #fafafa;
  text-decoration: none;
  padding: 1em;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  transition: 0.2s background;
  margin-left: 5px;
  margin-right: 5px;
  
  background:
    linear-gradient(
      to bottom, #0195D3 0%,
      #0195D3 100%
    );
  background-position: 90px 100%;
  background-repeat: repeat-x;
  background-size: 1px 2px;

  &:hover {
    background-size: 1px 100%;
  }
`