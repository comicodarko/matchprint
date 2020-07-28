import React from 'react';

import NavBar from '../../components/NavBar';
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
  return (
    <>
      <NavBar />

      <Container>
        <Content>
          <Title>MatchPrint</Title>

          <DescriptionView>

            <BadgeLogo>
              <BadgeText>MP</BadgeText>
            </BadgeLogo>

            <TextDescription>
              Nós somos uma empresa revolucionária em Recife que tem pronto
              atendimento para país, nossos profissionais possuem mais de 30 anos
              de experiência. Experiências que se somam para fornecer toda a qualidade
              e segurança que você cliente merece. Superando as suas expectativas e
              solucionando com inovação e dedicação a ação necessária para o sucesso
              da sua empresa.
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