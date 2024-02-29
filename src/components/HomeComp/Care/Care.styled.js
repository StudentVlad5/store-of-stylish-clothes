import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { HealthBox } from '../Health/Health.styled';

export const CareBox = styled(HealthBox)`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
