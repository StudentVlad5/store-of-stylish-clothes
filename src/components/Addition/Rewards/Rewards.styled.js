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

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 40px;
  }
`;

const Title = styled(Headline)``;

const SubTitleP = styled.p`
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  color: ${theme.colors.brown2};
`;

const WorksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubTitleLi = styled.li`
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  color: ${theme.colors.brown2};
`;

export { Container, Title, SubTitleP, WorksList, SubTitleLi };
