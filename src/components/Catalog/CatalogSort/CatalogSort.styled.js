import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const SortList = styled.ul`
  position: absolute;
  top: 25px;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  gap: 4px;

  width: 120px;
  padding: 15px;

  background-color: ${theme.colors.fon};
  border: 0.5px solid ${theme.colors.brown4};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 2px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 58px;
    right: 0;
    width: 100%;
  }
`;

const SortItem = styled.li`
  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* text-transform: uppercase; */

  color: ${theme.colors.brown4};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  &:hover label,
  &:focus label {
    font-weight: 600;
  }

  & > input {
    display: none;
  }

  & label {
    font-weight: 300;
    cursor: pointer;
  }

  & input:checked + label {
    font-weight: 600;
  }
`;

export { SortList, SortItem };
