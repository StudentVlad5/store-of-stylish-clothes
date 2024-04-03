import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Section, Subtitle } from 'components/baseStyles/CommonStyle.styled';

const BenefitsSection = styled(Section)`
  text-align: center;
  margin-top: 40px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 70px;
  }
`;

const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 64px;
`;

const BenefitsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 285px;
  }
`;

const BenefitsSubtitle = styled(Subtitle)`
  color: ${theme.colors.brown1};
`;

const BenefitsDescription = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 166%; /* 26.56px */

  color: ${theme.colors.brown2};
`;

export {
  BenefitsSection,
  BenefitsList,
  BenefitsItem,
  BenefitsSubtitle,
  BenefitsDescription,
};
