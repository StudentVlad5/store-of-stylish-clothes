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
`;

const Title = styled(Headline)``;

const Subtitle = styled.p`
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};
  text-transform: uppercase;
`;

const Parah = styled.p`
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 166%;
  color: ${theme.colors.brown2};
`;

const Signature = styled.p`
  margin-left: auto;

  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 166%;
  color: ${theme.colors.brown2};
  text-align: right;
`;

export { Container, Title, Subtitle, Parah, Signature };
