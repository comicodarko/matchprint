import React, {useEffect, useState} from 'react';

import NavBar from '../../components/NavBar';
import MobileNav from '../../components/NavBar/MobileNav';
import {
  Container,
  Content,
  Title,
  DescriptionView,
  TextDescription,
  BadgeLogo,
  BadgeText,
  ContactTitle,
  SocialButtons,
  SocialLink,
  Whatsapp,
  Instagram
} from './styled';
import Footer from '../../components/Footer';

export default function Contact() {

  function useWindowSize() {
  
    const [windowSize, setWindowSize] = useState({
      width: 0,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }

      window.addEventListener("resize", handleResize);
      
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
  
    }, []);

    return windowSize;
  }

  const size = useWindowSize();
  return (
    <>
      {size.width < 700
      ? <MobileNav />
      : <NavBar />
      }

      <Container>
        <Content>
          <Title>MatchPrint</Title>
          
          <DescriptionView>

            <BadgeLogo>
              <BadgeText>MP</BadgeText>
            </BadgeLogo>

            <TextDescription>
            Solicite uma visita de nosso profissional e poderemos imprimir ou desenvolver o
            seu projeto customizado, superando as suas expectativas e solucionando com inovação e dedicação a ação
            necessária para o sucesso da sua empresa.
            </TextDescription>
          </DescriptionView>

          <ContactTitle>Fale Conosco!</ContactTitle>

          <SocialButtons>
            <SocialLink href="#" color="#25D366"> 
              <Whatsapp />
            </SocialLink>
            <SocialLink href="#" color="#f00075">
             <Instagram />
            </SocialLink>
          </SocialButtons>

        </Content>
      </Container>
      <Footer />
    </>
  );
}