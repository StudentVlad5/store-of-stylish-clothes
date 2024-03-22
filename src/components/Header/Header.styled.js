import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Section, Container } from 'components/baseStyles/CommonStyle.styled';

const HeaderSectionWrap = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 300;
  transition: background-color 0.3s ease-in-out;
  ${({ isScrolled }) => isScrolled && `background-color: rgb(252, 249, 242);`};
`;

const HeaderSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px 0px 30px;
  margin: 0 auto;
  width: 100%;
  z-index: 300;
  transition: background-color 0.3s ease-in-out;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 30px 0px 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 50px 120px 0px 120px;
    max-width: ${theme.breakpoints.desktop};
  }
`;
const HeaderUnderLine = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 1px;
  margin-top: 40px;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 30px 0px 30px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 40px 40px 0px 40px;
  }
`;

export { HeaderContainer, HeaderSection, HeaderUnderLine, HeaderSectionWrap };
