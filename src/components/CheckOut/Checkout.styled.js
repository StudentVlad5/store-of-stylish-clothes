import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

export const FormSection = styled(Section)`
  padding: 130px 0;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 140px 0 0 0;
    max-width: ${theme.breakpoints.desktop};
  }
`;

export const CheckOutContainer = styled(Container)`
  padding-top: 40px;
`;

export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 90%;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const CheckOutDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  gap: 60px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;
export const CheckOutAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  } */
`;

export const CheckOutTitle = styled(Title)`
  font-size: ${theme.fontSizes.extra};
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.brown1};
  outline: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    text-align: start;
    padding-bottom: 4px;
    font-size: 28px;
    letter-spacing: 0;
  }
`;

export const LinkFolder = styled(NavLink)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extrasmall};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  text-decoration: none;
  color: ${theme.colors.brown};

  border-radius: 50%;
  border: 1px solid ${theme.colors.brown};
  background-color: transparent;

  cursor: pointer;
  transition: ${theme.transition};

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
    font-size: ${theme.fontSizes.small};
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }

  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
`;

export const LinkFolderTitle = styled.span`
  position: absolute;
  top: 25px;

  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extrasmall};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  text-decoration: none;
  color: ${theme.colors.brown};

  @media (min-width: ${theme.breakpoints.tablet}) {
    top: 45px;
    font-size: ${theme.fontSizes.small};
  }
`;

export const Liner = styled.div`
  flex: 1 1 auto;

  & > span {
    display: block;
    border-bottom: 2px solid ${theme.colors.brown};
  }
`;

export const CheckoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 16px;

  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  border-radius: 10px;
  border: 1px solid ${theme.colors.brown2};
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 500px;
    margin: 22px auto 0 auto;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 800px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
  }
  &:disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.5;
  }
`;
