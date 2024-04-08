import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { ReactComponent as Pencil } from 'images/svg/edit_light.svg';

const UserDataSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 36px;
    width: 80%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 42px;
  }
`;
const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const UserDataImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

const EditCameraForm = styled.form`
  position: absolute;
  bottom: 0;
  left: 110%;
  z-index: 10;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* position: absolute;
    right: 0;
    top: 214px; */
  }
`;

const UserDataImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

const EditPhotoLabel = styled.label`
  transition: ${theme.transition[1]};
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-right: 0px;
  }
`;

const EditPhotoInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 0;
  height: 0;
  cursor: pointer;
`;

const UserDataList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* padding-top: 16px;
    padding-bottom: 55px;
    width: 379px;
    margin-left: 32px; */
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 24px;
    /* padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 16px; */
  }
`;

const UserPasswordList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 16px;
    padding-bottom: 55px;
    width: 379px;
    margin-left: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 16px;
  }
`;

const BtnLight = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  /* width: 100%; */
  height: 35px;

  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  color: ${theme.colors.brown4};

  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${theme.colors.brown4};

  cursor: pointer;
  transition: ${theme.transition[1]};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* width: 180px; */
    height: 45px;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.brown4};
    transition: ${theme.transition[1]};
  }
`;

const BtnBrown = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 35px;

  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  color: ${theme.colors.white};

  background-color: ${theme.colors.brown4};
  border-radius: 10px;
  border: 1px solid ${theme.colors.brown4};

  cursor: pointer;
  transition: ${theme.transition[1]};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 180px;
    height: 45px;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.brown4};
    background-color: transparent;
    transition: ${theme.transition[1]};
  }

  & :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  padding: 20px;
  border: 1px solid ${theme.colors.brown4};
  border-radius: 12px;
  background-color: transparent;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 10px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* width: 580px; */
  }
`;

const ProfileSpanName = styled.span`
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

const ProfileSpanValues = styled.span`
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: ${theme.colors.brown1};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

const IconBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 27px;

  border: none;
  border-radius: 50%;
  background-color: transparent;

  cursor: pointer;
  transform: ${theme.transition[1]};
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    border-radius: 50%;
    background-color: ${theme.colors.fon};
  }

  /* &:disabled {
    svg {
      fill: ${theme.colors.brown4};
    }
  } */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 30px;
    height: 30px;
  }
`;

const PensilStyle = styled(Pencil)`
  width: 14px;
  height: 14px;
  /* fill: ${theme.colors.white}; */
  /* transform: ${theme.transition[1]}; */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 24px;
    height: 24px;
  }
`;

const TitleArticle = styled.h2`
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

export {
  EditCameraForm,
  EditPhotoInput,
  EditPhotoLabel,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
  BtnLight,
  BtnBrown,
  UserDataSection,
  UserPasswordList,
  ProfileContainer,
  ProfileSpanName,
  ProfileSpanValues,
  IconBtn,
  PensilStyle,
  TitleArticle,
  BtnContainer,
};
