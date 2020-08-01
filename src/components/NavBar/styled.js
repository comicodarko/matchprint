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

export const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  background: #303030;
  border-bottom-left-radius: 15px;
  position: absolute;
  right: -145px;
  transition: 0.8s transform;
  padding-bottom: 10px;
`

export const MobileLink = styled(Link)`
  position: relative;
  text-decoration: none;
  padding: 5px;
  padding-left: 10px;
  width: 120px;
  margin: 5px;
  margin-top: 15px;
  color: #fff;
  transition: 0.3s background;
  background:
    linear-gradient(
      to bottom, #0195D3 0%,
      #0195D3 100%
    );
  background-position: 0px 1px;
  background-repeat: repeat-y;
  background-size: 2px 1px;

  &:hover {
    background-size: 100% 1px;
  }
`