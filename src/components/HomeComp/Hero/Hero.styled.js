import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const HeroSection = styled.section``;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
`;

export const HeroBox = styled.div`
  position: absolute;
  padding: 37px 77px 37px 16px;
  width: 100%;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 5px 5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    -5px -5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    20px 30px 100px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(7.5px);

  @media screen and (min-width: 1440px) {
    width: 530px;
    height: 100%;
    padding: 306px 112px;
    margin-left: -126px;
  }
`;

export const HeroBoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroTitle = styled.h1`
  color: #3f3222;
  font-family: 'Raisonne', sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 330px;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const HeroDiscr = styled.p`
  color: #3f3222;
  font-family: 'Nib Pro', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 26.56px */
  margin: 12px 0;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const HeroBtn = styled.button`
  border-radius: 5px;
  border-color: transparent;
  background: #5a6b47;

  padding: 10px 40px;
  color: #fcf9f2;
  text-align: center;
  font-family: 'Raisonne Pro', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${theme.transition};

  @media screen and (min-width: 1440px) {
    padding: 10px 75px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.green};
    background-color: ${theme.colors.white};
  }
`;
