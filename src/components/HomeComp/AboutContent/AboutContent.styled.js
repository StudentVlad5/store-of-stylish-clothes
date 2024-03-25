import { Section } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const AboutSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.fonPrimary};
`;

export const AboutContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  gap: 40px;
  padding: 0px 50px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 0px 100px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 0px 200px;
  }
`;
export const AboutSubTitle = styled.p`
  color: ${theme.colors.brown2};
  font-size: ${theme.fontSizes.extraXL};
  font-style: normal;
  margin-top: 0;
  text-align: left;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 0;
  letter-spacing: 0;
  text-transform: none;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;
export const Title = styled.h1`
  color: ${theme.colors.brown2};
  font-size: ${theme.fontSizes.extraXXL};
  font-style: normal;
  margin-top: 0;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 0;
  letter-spacing: 0;
  text-transform: none;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;
