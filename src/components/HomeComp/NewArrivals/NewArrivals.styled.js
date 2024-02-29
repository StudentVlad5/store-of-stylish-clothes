import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { HealthTitle } from '../Health/Health.styled';

export const List = styled.ul`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const ImgTitle = styled(HealthTitle)`
  margin-top: 0;
  margin-bottom: 32px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    line-height: 144.5%; /* 46.24px */
    margin-bottom: 40px;
  }
`;

export const ImgDiscr = styled.p`
  color: ${theme.colors.brown1};
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 18px;
  margin-bottom: 32px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 22px;
    margin-top: 24px;
    margin-bottom: 0;
  }
`;
