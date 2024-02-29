import styled from 'styled-components';
import { HealthDiscr, HealthTitle } from '../Health/Health.styled';
import { ReactComponent as arrow } from 'images/svg/arrow.svg';
import { ReactComponent as quotationMark } from 'images/svg/quotationMark.svg';
import { ReactComponent as quotationMarkIconDesk } from 'images/svg/quotationMarkIconDesk.svg';

export const Feedback = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const FeedbackBox1 = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FeedbackBox1Text = styled.div`
  display: flex;
  align-items: center;
  width: 586px;
`;

export const FeedbackTitle = styled(HealthTitle)`
  margin-top: 0;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 144.5%; /* 46.24px */
    margin-bottom: 64px;
  }
`;

export const FeedbackDiscr = styled(HealthDiscr)`
  text-align: center;
  width: 433px;
  height: 108px;
  margin-bottom: 0;

  @media screen and (min-width: 1440px) {
    text-align: left;
    margin-left: 20px;
  }
`;
export const QuotationMarkIconDesk = styled(quotationMarkIconDesk)``;

export const QuotationMarkIcon = styled(quotationMark)``;

export const ArrowIcon = styled(arrow)`
  cursor: pointer;
  &:nth-child(1) {
    transform: scaleX(-1);
  }
`;

export const FeedbackUser = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 182.5%;
`;
