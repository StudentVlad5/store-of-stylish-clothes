import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { ReactComponent as delivery } from 'images/svg/delivery.svg';
import { ReactComponent as done } from 'images/svg/done.svg';
import { ReactComponent as creditCard } from 'images/svg/credit-card.svg';
import { ReactComponent as exchange } from 'images/svg/exchange.svg';
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

export const DPBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 45px;
  }
`;

export const DPBoxIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const DPBoxList = styled.ul`
  list-style: disc;
  margin: 10px 0 20px 30px;
`;

export const DPBoxListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DeliveryIcon = styled(delivery)`
  width: 55px;
  height: 55px;
  fill: ${theme.colors.brown4};
  margin-right: 10px;
`;

export const DoneIcon = styled(done)`
  width: 55px;
  height: 55px;
  margin-right: 10px;
`;

export const CreditCardIcon = styled(creditCard)`
  width: 55px;
  height: 55px;
  margin-right: 10px;
  fill: ${theme.colors.brown4};
`;

export const ExchangeIcon = styled(exchange)`
  width: 55px;
  height: 55px;
  margin-right: 10px;
  fill: ${theme.colors.brown4};
`;
