import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

export const HealthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
    gap: 173px;
  }
`;

export const HealthBoxDiscr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 40px;
  }
`;

export const HealthHeadTitle = styled.h3`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const HealthTitle = styled.h2`
  color: ${theme.colors.green};
  font-family: ${theme.fonts[1]};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 32px;
  }
`;

export const HealthDiscr = styled.p`
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 26.56px */

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* width: 437px; */
  }
`;

export const ReadMore = styled(Link)`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ImgBox = styled.img`
  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    width: 355px;
    max-width: 355px;
    height: 222px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 590px;
    max-width: 590px;
    height: 370px;
  }
`;
