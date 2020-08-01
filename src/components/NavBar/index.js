import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';
import Logo from '../../images/MPlogo.png';

export default () => {
  return(
    <S.NavBar id="begin">
      <Link to="/">
        <img src={Logo} alt="MatchPrint"/>
      </Link>  
      <div id="menu">
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink as="a" href="/#clients" >Depoimentos</S.NavLink>
        <S.NavLink as="a" href="/#products" >Produtos</S.NavLink>
        <S.NavLink to="/contato" >Contato</S.NavLink>
      </div>
    </S.NavBar>
  )
} 