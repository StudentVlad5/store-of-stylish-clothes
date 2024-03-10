import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { FormTitle, StyledForm } from '../AuthForm.styled';

export const TitleRegister = styled(FormTitle)``;

export const FormRegister = styled(StyledForm)``;

export const BackButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;

  color: ${theme.colors.white};
  background: ${theme.colors.brown4};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  transform: scale(1);

  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    border: 2px solid ${theme.colors.brown4};
    color: ${theme.colors.brown4};
    background: transparent;
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 180px;
  }
`;
