import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';
import Logo from '../../images/MPlogo.png';

export default () => {
  return(
    <S.NavBar>
      <Link to="/">
        <img src={Logo} alt="MatchPrint"/>
      </Link>  
      <div>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="" >Sobre</S.NavLink>
        <S.NavLink to="" >Depoimentos</S.NavLink>
        <S.NavLink to="" >Produtos</S.NavLink>
        <S.NavLink to="/contato" >Contato</S.NavLink>
      </div>
    </S.NavBar>
  )
} 