import styled from 'styled-components';

import { Whatsapp as wp } from '@styled-icons/fa-brands/Whatsapp';
import { Instagram as insta} from '@styled-icons/fa-brands/Instagram';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const Content = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 28px;
  text-align: center;
`;

export const DescriptionView = styled.div`
  min-width: 300px;
  max-width: 400px;
  background: #fff2;
  padding: 15px 25px;
  margin-top: 25px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 25px;
  border-radius: 20px;
  border: 2px solid #0195D3;
`;

export const TextDescription = styled.p`
  color: #fff;
  font-size: 1.2em;
  text-align: center;
`;

export const BadgeLogo = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #0195D3;
  margin: -32px 0 8px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BadgeText = styled.p`
  color: #fff;
  font-size: 16px;
`;

export const ContactTitle = styled.h1`
  color: #fff;
  font-size: 28px;
  text-align: center;
  margin-bottom: 25px;
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SocialLink = styled.a`
  padding: 10px;
  background: ${props => props.color};
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 20px;
  transition: 0.4s background;

  &:hover {
    background: #0195D3
  }
`

export const Whatsapp = styled(wp)`
  width: 40px;
  color: #fff;

`
export const Instagram = styled(insta)`
  width: 40px;
  color: #fff;
`