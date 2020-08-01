import React from 'react';

import * as S from './styled';
import AboutImage from '../../images/aboutimage.png';

export default () => {
  return(
    <S.AboutContainer>
      <S.About>
        <S.AboutTitle><S.Color>30 anos</S.Color> de experiência!</S.AboutTitle>
        <S.AboutText>Estamos chegando em Recife para atender todo território nacional, com profissionais que possuem
        30 anos de experiência.
        Experiência e expertises que se somam para fornecer toda a qualidade e segurança que a
        sua empresa merece.</S.AboutText>
      </S.About>
      <S.AboutImage src={AboutImage}/>
    </S.AboutContainer>
  )
}