import { Container } from 'components/baseStyles/CommonStyle.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as facebook } from 'images/svg/facebook.svg';
import { ReactComponent as twiter } from 'images/svg/twiter.svg';
import { ReactComponent as instagram } from 'images/svg/instagram.svg';
import { ReactComponent as tiktok } from 'images/svg/tiktok.svg';
import { ReactComponent as youtube } from 'images/svg/youtube.svg';
import { ReactComponent as pinterest } from 'images/svg/pinterest.svg';
import { ReactComponent as arrowDown } from 'images/svg/arrowDown.svg';
import theme from 'components/baseStyles/Variables.styled';
import { Text } from 'components/Header/Elements/logo/Logo.styled';

export const FooterSection = styled.footer`
  background-color: ${theme.colors.brown4};
  color: ${theme.colors.text};
  padding-top: 30px;
`;
export const LinkBrand = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.text};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    text-decoration: none;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    text-decoration: none;
  }
`;

export const FooterContainer = styled(Container)`
  margin: 0 auto;
  padding: 10px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 10px 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    max-width: ${theme.breakpoints.desktop};
  }
`;

export const FooterContainerBrand = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
`;

export const FooterFaqList = styled.ul`
  display: block;
  justify-content: space-between;

  &:nth-child(1) {
    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      display: none;
    }
  }

  &:nth-child(2) {
    display: none;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      gap: 20px;
      width: 100%;
      padding-right: 80px;
    }
  }
`;

export const FooterFaqListBrand = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    border-top: 1px solid ${theme.colors.text};
  }
`;

export const FooterFaqListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.text};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    &::before {
      content: none;
    }
  }
`;

export const FaqListBoxText = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 32px;
  }
`;

export const FooterFaqListTitle = styled.h3`
  padding: 13px 0;
  color: ${theme.colors.text};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0;
    font-size: ${theme.fontSizes.large};
  }
`;

export const FaqListOptionsBox = styled.div``;

export const FaqListOptions = styled.p`
  color: ${theme.colors.text};
  font-family: ${theme.fonts[0]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgb(200, 200, 200);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.medium};

    &:not(:last-child) {
      margin-bottom: 16px;
      padding: 0;
    }
  }
`;

export const FooterSubscribtion = styled.h2`
  display: block;
  color: ${theme.colors.text};
  font-family: ${theme.fonts[1]};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 12px;
  margin-bottom: 8px;

  &:nth-child(1) {
    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      display: none;
    }
  }
  &:nth-child(2) {
    display: none;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      display: block;
      margin-bottom: 12px;
      margin-top: 0;
      font-size: 32px;
      font-weight: 600;
      line-height: 144.5%; /* 46.24px */
    }
  }
`;

export const FooterSubscribtionDiscr = styled.p`
  display: block;
  color: ${theme.colors.text};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const FooterSubscribtionDiscr1 = styled(FooterSubscribtionDiscr)`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: block;
    width: 437px;
    font-size: ${theme.fontSizes.large};
    line-height: 166%; /* 26.56px */
  }
`;

export const FooterInputForm = styled.form`
  margin-top: 8px;
  padding-bottom: 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.text};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 16px;
    padding-bottom: 0;
    &::before {
      content: none;
    }
  }
`;

export const FooterInput = styled.input`
  width: 100%;
  max-width: 437px;
  padding: 12px;

  color: ${theme.colors.black};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  background: ${theme.colors.text};
  border-color: transparent;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

export const FooterInputFormBtn = styled.button`
  display: block;
  border-radius: 10px;
  border-color: transparent;
  background: ${theme.colors.grey};
  padding: 10px 0;
  max-width: 437px;
  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;
  color: ${theme.colors.text};
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(200, 200, 200);
    color: ${theme.colors.black};
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const ArrowBox = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const FooterContacts = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.text};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: center;
    padding: 0;

    &::before {
      content: none;
    }
  }
`;

export const FooterLogo = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  color: ${theme.colors.text};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const FooterContactsList = styled.ul`
  position: absolute;
  right: 0;
  display: flex;
  gap: 9px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    position: static;
    gap: 28px;
  }
`;

export const FooterContactsListItem = styled.li`
  cursor: pointer;
`;

// ICONS
export const ArrowDown = styled(arrowDown)`
  fill: ${theme.colors.text};
`;

export const Facebook = styled(facebook)`
  fill: ${theme.colors.text};
`;

export const Twiter = styled(twiter)`
  fill: ${theme.colors.text};
`;

export const Instagram = styled(instagram)`
  fill: ${theme.colors.text};
`;

export const Tiktok = styled(tiktok)`
  fill: ${theme.colors.text};
`;

export const YouTube = styled(youtube)`
  fill: ${theme.colors.text};
`;

export const Pinterest = styled(pinterest)`
  fill: ${theme.colors.text};
`;
