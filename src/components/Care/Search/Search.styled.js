import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const FormContainer = styled.div`
  background-color: ${theme.colors.fon};
  position: relative;
  width: 250px;
  margin: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  /* height: 30px; */
  padding: 10px;

  color: ${theme.colors.grey};
  background-color: ${theme.colors.white};
  border: 0.5px solid ${theme.colors.greyOpacity};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 10px 20px;
    /* height: 44px; */
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    background-color: transparent;
    border: 0.5px solid ${theme.colors.brown2};
  }
`;

const Input = styled.input`
  all: unset;
  width: 100%;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.375;
  letter-spacing: 0.04em;

  color: ${theme.colors.brown2};
  background-color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
    background-color: ${theme.colors.fon};
  }
`;
const IconClose = styled(iconClose)`
  size: 24px;
  transition: ${theme.transition[0]};

  cursor: pointer;
  & > path {
    stroke: ${theme.colors.brown1};

    &:hover,
    &:focus {
      stroke: ${theme.colors.brown};
    }
  }
`;

const ButtonClear = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;
  transition: ${theme.transition[0]};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    border: none;
  }
`;

export { FormContainer, Input, Label, IconClose, ButtonClear };
