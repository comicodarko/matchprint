import styled from 'styled-components';

import SlideBackground from '../../images/MPSlider2.jpg';

export const SlideContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
  padding-top: 20px;
  background-image: url(${SlideBackground});
`

export const SlidePage = styled.div`
  height: 300px;
  width: 100%;
  display: flex!important;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly !important;
`

export const SlideImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 5px solid #0195D3;
`

export const SlideReview = styled.p `
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  max-width: 450px;
  text-align: center;
  color: #fafafa
`

export const Client = styled.strong`
  font-size: 2em;
  font-family: monospace;
  text-align: center;
  color: #888888;
`