import theme from 'components/baseStyles/Variables.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalAdvertBox = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: ${theme.colors.fon};
  width: 370px;
  height: auto;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.brown4};
  z-index: 1000;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 400px;
  }
`;

export const ModalAdvertBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

export const ModalAdvertList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const ModalAdvertImg = styled.img`
  width: 145px;
  height: 255px;
  border-radius: 9px;
  margin-bottom: 5px;
`;

export const ModalAdvertListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const ModalAdvertText = styled.p`
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.brown1};
`;