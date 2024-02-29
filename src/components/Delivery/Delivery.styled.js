import styled from 'styled-components';
import Select from 'react-select';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleDelivery = styled(Title)`
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
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  &:nth-child(2) {
    width: 50%;
  }
`;

export const SelectInput = styled(Select)`
  background-color: transparent;
  border-radius: 10px;
  border: 0.5px solid ${theme.colors.brown2};

  &:nth-child(2) {
    margin-right: 22px;
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 285px;
  }
`;
