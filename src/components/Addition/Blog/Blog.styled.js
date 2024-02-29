import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;

  & > div {
    padding: 60px 0;
  }

  & div:nth-child(1) {
    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const BlogWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
  padding: 20px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const BlogInfo = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};
  border-radius: 12px;
  padding: 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 5px 5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    -5px -5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    20px 30px 100px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(7.5px);
`;

export { Container, BlogWrap, BlogInfo };
