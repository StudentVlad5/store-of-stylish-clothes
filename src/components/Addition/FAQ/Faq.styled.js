import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  gap: 20px;
`;

const Title = styled(Headline)``;

const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

const ParahQ = styled.div`
  position: relative;

  width: 100%;
  padding-right: 20px;
  margin-bottom: 10px;

  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* text-transform: uppercase; */

  z-index: 5;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: calc(100vw - 300px);
    max-width: 600px;
    font-size: 14px;
    text-transform: uppercase;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    color: ${theme.colors.green};
    padding: 0;
  }
`;
const ParahA = styled(ParahQ)`
  text-transform: none;
`;

const ArrowBox = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  & svg {
    width: 15px;
    height: 15px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 25%;
    transform: translateY(-25%);

    & svg {
      width: 25px;
      height: 25px;
    }
  }
`;

const Span = styled.span`
  font-weight: 600;
  color: ${theme.colors.darkGreen};
`;

export { Container, Title, FAQList, ParahQ, ParahA, ArrowBox, Span };
