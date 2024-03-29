import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as logo } from 'images/svg/logo.svg';

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

const QuillisLogo = styled(logo)``;

export { Text,QuillisLogo };
