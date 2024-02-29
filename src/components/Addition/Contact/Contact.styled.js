import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  gap: 30px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const Title = styled(Headline)``;

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 16px;
  }
`;

const SubTitleLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  & svg {
    width: 16px;
    height: 16px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 18px;
      height: 18px;
    }
  }

  & a {
    font-family: ${theme.fonts[1]};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%;
    color: ${theme.colors.brown2};
    text-decoration: none;
  }
`;

const ProfileInputMessage = styled.textarea`
  width: 100%;
  padding: 8px 30px 8px 20px;

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.green};

  border: 1px solid #c6cdd3;
  border-color: transparent;
  border-radius: 10px;
  background: ${theme.colors.blue3};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* width: 580px; */
    padding: 12px 30px 12px 20px;
    font-size: 16px;
  }

  &:focus-visible {
    border: 0.5px solid ${theme.colors.green};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.green};
    font-family: ${theme.fonts[1]};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }
`;

export {
  Container,
  Wrapper,
  Title,
  ContactsList,
  SubTitleLi,
  ProfileInputMessage,
};
