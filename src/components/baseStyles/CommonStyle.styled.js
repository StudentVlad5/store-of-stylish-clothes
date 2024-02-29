import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 60px 0;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 80px 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 120px 0;
    max-width: ${theme.breakpoints.desktop};
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
    padding: 0 120px;
  }
`;

const Title = styled.h1`
  font-family: ${theme.fonts[0]}; //Raisonne pro
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 42px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts[0]}; //Raisonne pro
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};
  text-transform: uppercase;
`;

const Headline = styled.h2`
  font-family: ${theme.fonts[1]}; //Nib pro
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 144.5%; /* 46.24px */
  letter-spacing: 0.64px;

  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 32px;
  }
`;

export { Container, Section, Title, Headline, Subtitle };
