import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';

const ProductCardSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 130px;
  }
`;

const ProductCardContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
`;

const ProductNav = styled.div`
  padding: 24px 0;
  border-top: 1px solid ${theme.colors.brown1};
  border-bottom: 1px solid ${theme.colors.brown1};
`;

const ProductNavList = styled.ul`
  display: inline-flex;
`;

const ProductNavItem = styled.li`
  position: relative;
  margin-right: 13px;

  &:nth-child(3) {
    & a {
      text-transform: capitalize;
    }
  }

  &:not(:last-child)::before {
    content: ' / ';
    position: absolute;
    top: 0;
    right: -8px;
  }
`;

const ProductNavLink = styled.a`
  font-family: ${theme.fonts[1]}; //'Nib Pro'
  font-size: 12px;
  font-style: normal;
  font-weight: ${props => (props.$primary ? 500 : 400)};
  line-height: normal;
  color: ${props =>
    props.$primary ? theme.colors.green : theme.colors.green1};

  text-decoration: none;
  text-transform: capitalize;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.darkGreen};
  }
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-top: 18px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;

    margin-top: 48px;
  }
`;

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: space-around;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 47px;
    width: 50%;
  }
`;

const ControlsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 30%;
  height: 100%;
  max-height: 700px;

  transition: ${theme.transition};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: auto;
  }

  & svg {
    stroke: ${theme.colors.greyOpacity};

    &:hover,
    &:focus {
      stroke: ${theme.colors.green};
    }

    &.disabled {
      cursor: not-allowed;
    }
  }
`;

const ControlsItem = styled.li`
  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 80px;
      height: 80px;
    }
  }
`;

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 823px;
  }
`;

const ProductImage = styled.img`
  width: 437px;
  height: auto;
  margin: auto 0;
`;

const DeliveryInfo = styled.ul`
  display: inline-flex;
  justify-content: flex-start;
  gap: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 38px;
  }
`;

const DeliveryInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 12px;
    width: 200px;
  }

  & span {
    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    color: ${theme.colors.green};

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 12px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 14px;
    }
  }

  & p {
    text-align: center;
    font-family: ${theme.fonts[1]}; //Nib Pro
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    color: ${theme.colors.brown2};

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 12px;
    }
  }

  & svg {
    width: 18px;
    height: 18px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 24px;
      height: 24px;
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
    padding-left: 163px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 6px;
  padding-bottom: 10px;

  border-bottom: 1px solid ${theme.colors.brown1};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 12px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 16px;
    padding-bottom: 40px;
  }
`;

const Name = styled.h2`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green1};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

const Prices = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Discount = styled.li`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${theme.colors.green1};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

const Price = styled.li`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: line-through;
  color: ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

const Description = styled(Subtitle)`
  text-transform: lowercase;

  font-size: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

const Options = styled.div`
  /* margin-bottom: 24px; */
`;

const ProductSubTitle = styled(Subtitle)`
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-transform: uppercase;

  font-size: 12px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

const OptionsList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Option = styled.label`
  position: relative;

  & span {
    padding: 6px 8px;

    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    text-align: center;

    color: ${theme.colors.green1};
    background-color: transparent;

    border-radius: 10px;
    border: 0.5px solid ${theme.colors.brown1};
    cursor: pointer;
    transition: ${theme.transition};

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 12px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 14px;
    }

    &:hover,
    &:focus {
      color: #6f8d4c;
      background-color: ${theme.colors.green5};
      border: 1px solid ${theme.colors.green2};
    }
  }

  & > input {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
    cursor: pointer;
    transition: ${theme.transition};

    &:disabled + span {
      color: ${theme.colors.brown2};
      background-color: ${theme.colors.greyOpacity};
      border: 1px solid ${theme.colors.brown2};
      cursor: not-allowed;
    }

    &:checked + span,
    &:not(:disabled):active + span {
      /* color: #6f8d4c;
      background-color: ${theme.colors.green5};
      border: 1px solid ${theme.colors.green2}; */
    }

    & > input:checked {
      /* color: #6f8d4c;
      background-color: ${theme.colors.green5};
      border: 1px solid ${theme.colors.green2}; */
    }
  }
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 132px;

  border-radius: 10px;
  border: 0.5px solid ${theme.colors.brown1};

  & span {
    font-family: ${theme.fonts[1]}; //Nib Pro
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 166%; /* 26.56px */
    color: ${theme.colors.green};

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }
`;

const IconBtn = styled.button`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
  }

  &:disabled {
    cursor: not-allowed;

    & > svg > path {
      stroke: ${theme.colors.brown2};
      fill: ${theme.colors.brown2};
    }
  }
`;

const TextBtn = styled.button`
  width: 100%;
  padding: 10px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 1px solid ${theme.colors.green};
  border-radius: 10px;

  cursor: pointer;
  transition: ${theme.transition};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.green2};
    border: 1px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    background-color: ${theme.colors.green4};
    border: 1px solid ${theme.colors.green4};
    cursor: not-allowed;
  }
`;

const InfoSection = styled.div`
  /* margin-bottom: 24px; */
`;

const Accord = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 24px;
`;

const AccordCareList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  animation: fade-in-top 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  transition: all ${theme.transition};
`;

const AccordCareItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;

  & span {
    width: calc(100% - 30px);

    color: ${theme.colors.brown2};
    font-family: ${theme.fonts[1]}; //Nib Pro
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 138%; /* 19.32px */

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 12px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 14px;
    }
  }
`;

const AccordIncludedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-left: 20px;

  list-style: disc;
  color: ${theme.colors.grey};

  animation: fade-in-top 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  transition: all ${theme.transition};
`;

const AccordIncludedItem = styled.li`
  display: list-item;

  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 138%; /* 19.32px */
  color: ${theme.colors.grey};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export {
  ProductCardSection,
  ProductCardContainer,
  ProductNav,
  ProductNavList,
  ProductNavItem,
  ProductNavLink,
  ProductContent,
  ProductGallery,
  ProductImageWrapper,
  ProductImage,
  ControlsList,
  ControlsItem,
  DeliveryInfo,
  DeliveryInfoItem,
  ProductInfo,
  Heading,
  Name,
  Prices,
  Discount,
  Price,
  Description,
  Options,
  ProductSubTitle,
  OptionsList,
  Option,
  Quantity,
  IconBtn,
  TextBtn,
  InfoSection,
  Accord,
  AccordCareList,
  AccordCareItem,
  AccordIncludedList,
  AccordIncludedItem,
};
