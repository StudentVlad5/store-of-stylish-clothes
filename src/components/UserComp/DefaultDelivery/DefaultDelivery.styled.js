import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ProfileInput } from '../Profile/Profile.styled';
import { IconBtn } from '../UserData/UserData.styled';

const ProfileInputSelect = styled(ProfileInput)`
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: ${theme.colors.brown1};
`;

const Label = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.p`
  width: 100%;
  padding: 8px 30px 8px 20px;

  font-family: ${theme.fonts[1]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.brown1};

  border: 1px solid #c6cdd3;
  border-color: transparent;
  border-radius: 10px;
  background: ${theme.colors.blue3};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
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
`;

const EditBtn = styled(IconBtn)`
  top: 1px;
  bottom: 1px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    top: 5px;
    bottom: 0;
  }
`;

export { ProfileInputSelect, Label, Input, EditBtn };
