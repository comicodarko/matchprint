import React, { Component } from 'react';
import Slider from 'react-slick';

import * as S from './styled';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import LogoMetalux from '../../images/metalux.jpg';
import LogoLemon from '../../images/lemon.jpg';
import LogoTeresinha from '../../images/teresinha.jpg'
 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "#0195D3", marginRight: 40, padding: 10, borderRadius: 10  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "#0195D3", marginLeft: 40, padding: 10, borderRadius: 10  }}
      onClick={onClick}
    />
  );
}


export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1000,
      pauseOnHover: true,
      swipeToSlide: true,
    }
    return (
      <S.SlideContainer>
          <Slider {...settings}>
            <S.SlidePage>
              <S.SlideImage src={LogoMetalux}/>
              <S.SlideReview>"A MATCHPRINT superou todas as nossas expectativas em relação a prazos,
              qualidade das impressões e cuidado com o atendimento. Principalmente com o pós-venda."</S.SlideReview>
              <S.Client>METALUX - PE</S.Client>
            </S.SlidePage>
            
            <S.SlidePage>
              <S.SlideImage src={LogoTeresinha}/>
              <S.SlideReview>"Trabalhar com a MATCHPRINT é antes de tudo a certeza do cumprimento dos prazos. Nossa produção
              não pode parar então temos que contar com empresas sérias e que ofereçam produtos impressos com
              qualidade e rapidez. A MATCHPRINT preenche esses requisitos."</S.SlideReview>
              <S.Client>ÁGUA MINERAL SANTA TERESINHA - PE</S.Client>
            </S.SlidePage>

            <S.SlidePage>
              <S.SlideImage src={LogoLemon}/>
              <S.SlideReview>"A MATCHPRINT mais uma vez surpreendeu com impressão de adesivo de grande formato
              com cores perfeitas, garantia de qualidade que não desbotou e mais uma
              vez com o prazo de entrega recorde "</S.SlideReview>
              <S.Client>THE-LEMON-WATCH - BRASIL</S.Client>
            </S.SlidePage>

          </Slider>
        </S.SlideContainer>
    );
  }
}