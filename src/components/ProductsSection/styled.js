import styled from 'styled-components';

export const ProductsContainer = styled.section`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  font-size: 3em;
  width: 210px;
  margin: auto;
  padding-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: #fff;
  background: linear-gradient(
      to bottom, #0195D3 0%,
      #0195D3 100%
    );
  background-position: 90px 100%;
  background-repeat: repeat-x;
  background-size: 1px 2px;

`

export const Card = styled.div`
  width: 450px;
  height: 310px; 
  background: #0195D3;
  margin: 20px;
  margin-bottom: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`

export const CardImg = styled.img`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`

export const CardTitleArea = styled.div`
  width: 100%;
  height: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`

export const CardTitle = styled.h1`
  font-size: 2em;
  color: #fafafa;
  line-height: 55px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`