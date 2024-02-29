import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 462px);
  height: 100%;

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 530px);
    height: 100%;
  }
`;
