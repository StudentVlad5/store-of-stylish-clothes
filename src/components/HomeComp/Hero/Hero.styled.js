import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const HeroSection = styled.section`
  margin-top: 235px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
export const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  max-width: 200px;
  max-height: 235px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 400px;
    height: 577px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 400px;
    height: 577px;
  }
`;
export const ImgItem = styled.img`
  width: 400px;
  height: 300px;
`;
