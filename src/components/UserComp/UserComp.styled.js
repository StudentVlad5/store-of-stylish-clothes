import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

export const UserSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

export const UserContainer = styled(Container)`
  padding-top: 40px;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: start;
  gap: 20px;

  width: 100%;
  padding: 0 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 100px;
    padding: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 84px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 20px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 150px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 30px;
    width: 285px;
  }
`;

export const LinkFolder = styled(NavLink)`
  transition: ${theme.transition[1]};
`;
