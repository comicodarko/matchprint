import React from 'react';

import * as S from './styled';
import AboutImage from '../../images/aboutimage.png';

export default () => {
  return(
    <S.AboutContainer>
      <S.About>
        <S.AboutTitle><S.Color>30 anos</S.Color> de experiência!</S.AboutTitle>
        <S.AboutText>A MATCHPRINT está chegando agora em Recife para atender todo território nacional, 
        mas nossos profissionais possuem mais de 30 anos de experiência.
        Experiência e expertises que se somam para fornecer toda a qualidade e segurança que a
        sua empresa merece.</S.AboutText>
        <S.AboutText>Solicite uma visita de nosso profissional e poderemos imprimir ou desenvolver o
        seu projeto customizado, superando as suas expectativas e solucionando com inovação e dedicação a ação
        necessária para o sucesso da sua empresa.</S.AboutText>
      </S.About>
      <S.AboutImage src={AboutImage}/>
    </S.AboutContainer>
  )
}