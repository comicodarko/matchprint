import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowBoldUp } from '@styled-icons/entypo/ArrowBoldUp';

export const Footer = styled.footer`
  background: #3D4351;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`

export const FooterNav = styled.nav`
  width: 300px;
  display: flex;
  flex-direction: column;
`

export const FooterLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  width: 120px;
  margin-top: 5px;
  margin-bottom: 5px;
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

export const FooterLogo = styled.img`
  background: #202125;
  padding: 15px;
  border-radius: 10px;
  margin-top: -120px;  
`

export const FooterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #fff;
`

export const Up = styled(ArrowBoldUp)`
  background: #0195D3;
  width: 50px;
  padding: 5px;
  color: #fff;
  border-radius: 10px;
`