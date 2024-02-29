import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Container = styled.div`
  padding-top: 40px;

  & > .google-map-code {
    width: 100%;
  }

  & iframe {
    width: calc(100vw - 60px);
    height: 100%;
    min-height: 300px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: calc(100vw - 300px);
      height: 450px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: calc(100vw - 600px);
      max-width: 830px;
    }
  }
`;

export { Container };
