import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { NavLink } from 'react-router-dom';

export const AdditionSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

export const AdditionContainer = styled(Container)`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 40px;
  }
`;

export const AdditionDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: start;
  gap: 50px;

  width: 100%;
  padding: 0 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 160px;
  }
`;

export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-wrap: nowrap;
    flex-direction: column;
    width: 285px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 30px;
  }
`;

export const AdditionAboutWrapper = styled.div`
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

export const LinkFolder = styled(NavLink)``;
