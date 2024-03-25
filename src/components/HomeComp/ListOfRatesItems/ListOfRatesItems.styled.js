import { Section } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const CardContainerSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 0;
  background-color: ${theme.colors.fonPrimary};
`;
export const SectionTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 50px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0px 100px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0px 200px;
  }
  &:first-of-type {
    padding: 0px 50px 0px;
    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      padding: 0px 100px 0px;
    }
    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      padding: 0px 200px 0px;
    }
  }
`;
export const SectionTitle = styled.h1`
  color: ${theme.colors.brown2};
  font-size: ${theme.fontSizes.extraXL};
  font-style: normal;
  font-family: ${theme.fonts[1]};
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0;
  text-transform: uppercase;
  padding-right: 20px;
  border-bottom: 1px solid ${theme.colors.brown4};
`;
export const SectionSubTitle = styled.span`
  color: ${theme.colors.brown2};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-family: ${theme.fonts[1]};
  font-weight: 400;
  line-height: normal;
  margin-top: 0;
  text-align: left;
  line-height: 25px;
  margin-bottom: 0;
  text-transform: none;
  text-decoration: underline;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-top: 30px;
  background-color: ${theme.colors.fonPrimary};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 60px;
  }
`;
export const ViewportBox = styled.div`
  width: 100%;
  display: ${props => (props.$version === 'mobile' ? 'block' : 'none')};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: ${props => (props.$version === 'tablet' ? 'block' : 'none')};
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: ${props => (props.$version === 'desktop' ? 'block' : 'none')};
  }
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 0px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 25px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 25px;
  }
`;

export const BtnPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  flex-shrink: 0;

  color: ${theme.colors.brown4};
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid ${theme.colors.brown4};
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));

  cursor: pointer;
  transition: ${theme.transition};
  user-select: none;

  &:hover,
  &:focus {
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.3));
  }
`;
