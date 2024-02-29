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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Subtitle = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 166%;
  color: ${theme.colors.green};
`;

const SubtitleP = styled.p`
  margin-left: 15px;
  line-height: normal;
  color: ${theme.colors.brown2};
`;

const Img = styled.img`
  border-radius: 20px;
`;

export { Container, Title, List, Subtitle, SubtitleP, Img };
