import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { InnerLeftWrapper, InnerRightWrapper } from '../Gifts.styled';
import { BtnLight } from 'components/UserComp/UserData/UserData.styled';

const InnerLeft = styled(InnerLeftWrapper)``;

const InnerRight = styled(InnerRightWrapper)`
  align-items: center;
  padding: 0;
`;

const BtnGiftCard = styled(BtnLight)`
  width: 100%;
`;

export { InnerLeft, InnerRight,BtnGiftCard };
