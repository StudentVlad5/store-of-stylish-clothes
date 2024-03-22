import styled from 'styled-components';
import { Section, Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { DataContainerText } from 'components/CheckOut/Order/Order.styled';
import { ProfileContainer } from 'components/UserComp/UserData/UserData.styled';

export const BasketSection = styled(Section)`
  padding-top: 123px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 129px;
  }
`;

export const BasketContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding-top: 68px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 68px 30px 0 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 68px 120px 0 120px;
  }
`;

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 121px;
  }
`;

export const TitleCheckOut = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
    color: ${theme.colors.brown1};
  }
`;

export const TextCheckOut = styled.p`
  font-size: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
  margin-top: 0;
  color: ${theme.colors.brown2};
`;

export const Btn = styled(Button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  color: ${theme.colors.brown1};
  background: ${theme.colors.green4};
  border: none;
  border-radius: 4px;

  transform: scale(1);
  cursor: pointer;

  overflow-x: hidden;
  overflow-y: hidden;
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.brown2};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    transition: none;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 71px;
  }
`;

export const Legend = styled.h1`
  margin-bottom: 40px;
  margin-top: 0;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  color: ${theme.colors.brown1};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 32px;
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const BasketCompList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 24px;
  height: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 60%;
    min-width: 350px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 600px;
  }
`;

export const AuthCheckOutBox = styled.div`
  margin-top: 100px;
  display: ${props => (props.isClosed ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
`;

export const OrderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 68px;
  gap: 30px 20px;
  width: 600px;
`;

export const OrderBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  width: 285px;
  height: 300px;

  background-color: ${theme.colors.green6};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 10px;
  }
`;

export const OrderBoxTitle = styled.p`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  position: relative;
  padding-bottom: 12px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;

    height: 1px;
    width: 100%;
    background: ${theme.colors.brown1};
  }
`;

export const DataContainerTextGreen = styled(DataContainerText)`
  color: ${theme.colors.green};
`;
