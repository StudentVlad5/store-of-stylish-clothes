import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

export const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0;
`;

export const ErrorBox = styled.div`
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 37px 77px;

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
    width: 637px;
  }
`;

export const ErrorBoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorTitle = styled.h2`
  width: 330px;
  font-family: ${theme.fonts[1]};
  font-size: 140px;
  font-weight: 200;
  font-style: normal;
  text-align: center;
  line-height: normal;
  color: ${theme.colors.darkGreen};

  @media screen and (min-width: 1440px) {
    font-size: 180px;
  }
`;

export const ErrorDiscr = styled.p`
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.04em;
  margin: 40px 0;
  color: ${theme.colors.brown1};
  @media screen and (min-width: 1440px) {
    font-weight: 100;
  }
`;

export const ErrorBtn = styled.button`
  display: flex;
  width: 180px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-family: 'Raisonne Pro', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid ${theme.colors.brown};
  color: ${theme.colors.brown};
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
`;

export const ErrorImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
