import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutContainer = styled.main`
  display: flex;
  background: #0195D3;
  align-items: center;
  justify-content: space-evenly;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  justify-content: center;
  align-items: center;
`

export const AboutTitle = styled.h1`
  font-size: 2em;
  font-family:  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  color: #ddd;
  margin-bottom: 20px;
  padding: 13px;
  padding-left: 0px;
  padding-right: 15px;
  border-radius: 20px;

  transition: 0.5s background;
  background:
    linear-gradient(
      to bottom, #303030 0%,
      #303030 100%
    );
  background-position: 90px 100%;
  background-repeat: repeat-y;
  background-size: 0px 1px;

  &:hover {
    background-size: 100% 1px;
  }
`

export const Color = styled.strong`
  background: #303030;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-left: 15px;
  padding-right: 10px;
  border-radius: 20px;
`

export const AboutText = styled.p`
  color: #eee;
  font-size: 1.1em;
  margin-top: 20px;
`

export const AboutImage = styled.img`
  flex: 0.6;
`