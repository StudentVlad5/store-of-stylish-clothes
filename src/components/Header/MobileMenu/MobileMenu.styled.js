import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const MobileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px 0px 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 45px 0px 45px;
  }

  & a {
    margin: 0 auto;
  }
`;

const IconClose = styled(iconClose)`
  cursor: pointer;

  & > path {
    stroke: ${theme.colors.grey1};
    fill: ${theme.colors.grey1};
  }
`;

const Text = styled(Link)`
  font-family: ${theme.fonts[0]};
  font-weight: 700;
  font-style: normal;
  font-size: ${theme.fontSizes.extraXL};
  line-height: 42px;
  letter-spacing: 0.07em;
  color: ${theme.colors.brown2};
  text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.2);
  text-decoration: none;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    line-height: 48px;
    font-size: ${theme.fontSizes.extraXXL};
  }
`;

const MobileMenuBox = styled.div`
  display: flex;
  justify-content: center;
`;

export { MobileHeader, IconClose, Text, MobileMenuBox };
