import React from 'react';

import * as S from './styled';
import FooterLogo from '../../images/footer.png';

export default function Footer() {
  return(
    <S.Footer>
      <S.FooterNav>
        <S.FooterLink as="a" href="#begin">
          Sobre
        </S.FooterLink>

        <S.FooterLink as="a" href="/#clients">
          Depoimentos
        </S.FooterLink>

        <S.FooterLink as="a" href="/#products">
          Produtos
        </S.FooterLink>

        <S.FooterLink to="/contato">
          Contato
        </S.FooterLink>
      </S.FooterNav>

      <S.FooterArea>
        <S.FooterLogo src={FooterLogo}/>
        <strong>Copyright © 2020 MATCHPRINT</strong>
      </S.FooterArea>

      {/* <S.FooterArea>
        Parceiros
      </S.FooterArea> */}
    </S.Footer>
  )
}