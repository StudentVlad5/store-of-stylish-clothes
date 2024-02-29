import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  gap: 20px;
  margin: 0 auto;
`;

const Title = styled(Headline)``;

const Parah = styled.p`
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 166%;
  color: ${theme.colors.brown2};
`;

export { Container, Title, Parah };
