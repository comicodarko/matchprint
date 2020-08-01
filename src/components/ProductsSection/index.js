import React from 'react';
import * as S from './styled';

import Cartazes from '../../images/products/cartaz.jpg';
import Panfletos from '../../images/products/panfletos.jpg';
import Folders from '../../images/products/folders.jpg';
import Camisas from '../../images/products/camisas.jpg';
import Banners from '../../images/products/banners.jpg';
import Cartao from '../../images/products/cartvisitas.jpg';
import Livros from '../../images/products/livros.jpg';
import Projetos from '../../images/products/projetos.jpg';

export default function ProductsSection() {
  return (
    <>
      <S.Title id="products">Produtos</S.Title>
      <S.ProductsContainer>

        <S.Card>
          <S.CardImg src={Cartazes}/>
          <S.CardTitleArea>
            <S.CardTitle>Cartazes</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

        <S.Card>
          <S.CardImg src={Panfletos}/>
          <S.CardTitleArea>
            <S.CardTitle>Panfletos</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

        <S.Card>
          <S.CardImg src={Folders}/>
          <S.CardTitleArea>
            <S.CardTitle>Folders</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

        <S.Card>
          <S.CardImg src={Camisas}/>
          <S.CardTitleArea>
            <S.CardTitle>Camisas</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

        <S.Card>
          <S.CardImg src={Banners}/>
          <S.CardTitleArea>
            <S.CardTitle>Banners e Adesivos</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

        <S.Card>
          <S.CardImg src={Cartao}/>
          <S.CardTitleArea>
            <S.CardTitle>Cartões de Visita</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

        <S.Card>
          <S.CardImg src={Livros}/>
          <S.CardTitleArea>
            <S.CardTitle>Livros e Revistas</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

        <S.Card>
          <S.CardImg src={Projetos}/>
          <S.CardTitleArea>
            <S.CardTitle>Projetos Personalizados</S.CardTitle>
          </S.CardTitleArea>
        </S.Card>

      </S.ProductsContainer>
    </>
  )
}