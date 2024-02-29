import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const CatalogSection = styled(Section)`
  padding: 0 0;
`;

const CatalogContainer = styled(Container)`
  margin: 0 auto;
  padding: 0 0;
  width: 100%;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  max-width: calc(100% - 20px);

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-left: 20px;
  }
`;

export { CatalogSection, CatalogContainer, GridContainer, GridWrapper };
