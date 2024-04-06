import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconSearch } from 'images/svg/icon_searchLight__header.svg';
import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100%;
  height: 100vh;

  background-color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    background-color: ${theme.colors.grey};
    opacity: 0.4;
  }
`;

const FormContainer = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;

  width: 100%;
  margin-left: auto;

  background-color: ${theme.colors.fon};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* position: relative; */
    position: absolute;
    right: 0;
    width: 250px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 10px 40px;

  color: ${theme.colors.grey};
  background-color: ${theme.colors.white};
  border: 0.5px solid ${theme.colors.greyOpacity};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 44px;
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
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;

  color: ${theme.colors.brown2};
  background-color: ${theme.colors.white};

  &:focus,
  &:hover {
    border-right: 2px solid ${theme.colors.green};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    background-color: ${theme.colors.fon};
  }
`;

const ButtonSearch = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
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

const IconSearch = styled(iconSearch)`
  display: flex;
  justify-content: center;

  size: 24px;

  cursor: pointer;
  & > path {
    stroke: ${theme.colors.brown1};

    &:hover,
    &:focus {
      stroke: ${theme.colors.brown};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
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
  left: 5px;
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

export {
  Overlay,
  FormContainer,
  Input,
  Label,
  ButtonSearch,
  IconSearch,
  IconClose,
  ButtonClear,
};
