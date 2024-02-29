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

const SubTitleP = styled.p`
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};
  text-transform: uppercase;
`;

export { Container, Title, SubTitleP };
