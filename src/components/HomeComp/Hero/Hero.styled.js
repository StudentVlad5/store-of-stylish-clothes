import { Section } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroSection = styled(Section)`
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategorySection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: ${theme.colors.fonPrimary};
`;

export const HeroContainer = styled.div`
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
  padding: 20px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 30px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 40px;
  }
`;
export const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  width: 200px;
  height: 305px;
  background-image: ${props => props.props};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 16px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 350px;
    height: 600px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 400px;
    height: 700px;
  }
`;
export const LinkCategory = styled(Link)`
  text-decoration: none;
`;
export const SideBarTitle = styled.h2`
  width: 100%;
  max-width: 489px;
  margin-top: 0;
  min-height: 158px;
  margin-bottom: 0;
  color: ${theme.colors.brown2};
  font-size: 38px;
  font-style: normal;
  margin-top: 0;
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-weight: 400;
  line-height: 38px;
  margin-bottom: 0;
  letter-spacing: 0;
  text-transform: uppercase;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    text-align: left;
    line-height: 44px;
    font-size: 44px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    line-height: 84px;
    font-size: 64px;
    text-align: left;
  }
`;

export const ImgTitle = styled.h3`
  position: absolute;
  display: block;
  padding: 11px;
  background-color: rgba(225, 225, 225, 0.45);
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.extraXXL};
  color: #f0eadc;
  text-transform: capitalize;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 11px 30px 14px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 11px 30px 14px;
  }
`;
export const CategoryItem = styled(HeroItem)`
  width: 292px;
  height: 148px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 350px;
    height: 200px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 552px;
    height: 275px;
  }
`;
export const CategoryTitle = styled(ImgTitle)`
  border-radius: 16px;
  color: ${theme.colors.brown4};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: uppercase;
`;
export const ButtonForReadyStyle = styled.button`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 222px;
  border-radius: 16px;
  background-color: ${theme.colors.brown4};
  color: ${theme.colors.white};
  border: none;
  padding: 16px 36px;
  gap: 20px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin: 0;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin: 0;
  }
`;
export const TitleForBtnReadyStyle = styled.span`
  width: 100%;
  max-width: 84px;
  min-height: 30px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.extra};
  font-style: normal;
  font-family: ${theme.fonts[0]};
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  cursor: pointer;
`;
export const ContainerForBtnReadyStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
`;
