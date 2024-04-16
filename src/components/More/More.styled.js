import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as logo } from 'images/svg/logo.svg';
import { ReactComponent as telegram } from 'images/svg/telegram.svg';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MoreSection = styled(Section)`
  background-color: ${theme.colors.fon};
  z-index: 9999;
  padding-top: 58px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const MoreContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MoreList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const MoreListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  padding: 10px 30px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.brown4};

  &:nth-child(1) {
    opacity: 0;
    animation: ${fadeIn} 0.5s ease forwards;
  }

  &:nth-child(2) {
    opacity: 0;
    animation: ${fadeIn} 1s ease forwards;
  }
  &:nth-child(3) {
    opacity: 0;
    animation: ${fadeIn} 1.5s ease forwards;
  }
  &:nth-child(4) {
    opacity: 0;
    animation: ${fadeIn} 2s ease forwards;
  }
  &:nth-child(5) {
    opacity: 0;
    animation: ${fadeIn} 2.5s ease forwards;
  }
  &:nth-child(6) {
    opacity: 0;
    animation: ${fadeIn} 3s ease forwards;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 450px;
  }
`;

export const MoreListItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts[0]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.brown4};
  text-decoration: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

export const MoreText = styled.p`
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.brown4};
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

export const MoreTextDiscr = styled.p`
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.brown4};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

export const MoreLogo = styled(logo)`
  width: 70px;
`;

export const MoreTelegram = styled(telegram)`
  width: 18px;
`;

// export const MoreSection = styled.section``;
// export const MoreSection = styled.section``;
// export const MoreSection = styled.section``;
// export const MoreSection = styled.section``;
// export const MoreSection = styled.section``;
// export const MoreSection = styled.section``;
// export const MoreSection = styled.section``;
// export const MoreSection = styled.section``;
