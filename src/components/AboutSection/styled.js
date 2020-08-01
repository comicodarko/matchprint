import styled from 'styled-components';

export const AboutContainer = styled.main`
  display: flex;
  flex: 1;
  background: #0195D3;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 50px;
  padding-right: 50px;
  flex-wrap: wrap;

  @media(max-width: 800px) {
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
  }

`

export const About = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 400px;

  @media(max-width: 500px) {
    min-width: 100px;
  }

`

export const AboutTitle = styled.h1`
  font-size: 2.5em;
  font-family:  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  color: #fff;
  margin-bottom: 20px;
  padding: 13px;
  padding-left: 0px;
  padding-right: 15px;
  border-radius: 20px;
  text-align: center;

  transition: 0.5s background;
  background:
    linear-gradient(
      to bottom, #303030 0%,
      #303030 100%
    );
  background-position: 90px 100%;
  background-repeat: repeat-y;
  background-size: 0px 1px;

  @media(min-width: 1263px) {
    &:hover {
    background-size: 100% 1px;
  }
  }
`

export const Color = styled.strong`
  background: #303030;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 10px;
  border-radius: 20px;

  @media(max-width: 1263px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const AboutText = styled.p`
  color: #fff;
  font-size: 1.4em;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;

  @media(max-width: 1000px) {
    font-size: 1.2em;
  }
`

export const AboutImage = styled.img`
  flex: 1;
  display: flex;
  max-width: 700px;
  min-width: 500px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media(max-width: 700px) {
    display: none;
  }
`