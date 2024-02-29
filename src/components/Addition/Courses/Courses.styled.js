import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};

  width: 100%;
  margin: 10px 0;
  padding: 20px;
`;

const MovieCintainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export { Container, MovieCintainer };
