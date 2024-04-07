import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Filters = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 16px; */
  width: 100%;
`;

const Filter = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px 0 8px 10px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 18px 0 18px 10px;
    font-size: 14px;
  }

  border-top: 1px solid ${theme.colors.beige};

  &:last-of-type {
    border-bottom: 0.5px solid ${theme.colors.beige};
  }
`;

const FilterBtn = styled.button`
  width: 100%;
  padding: 6px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.brown4};

  background-color: transparent;

  border: 0.5px solid ${theme.colors.brown4};
  border-radius: 10px;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 16px 0;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.fon};
    background-color: ${theme.colors.brown4};
    border: 1px solid ${theme.colors.brown4};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    border: 1px solid ${theme.colors.brown2};
    cursor: default;
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
    cursor: default;

    & > svg > path {
      stroke: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
  }
`;

const FilterHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  &.active ~ div {
    display: flex;
  }

  & span {
    color: ${theme.colors.brown2};
    font-size: 14px;
    font-style: normal;
    font-family: ${theme.fonts[0]};
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  &.active > button > svg {
    transform: rotate(180deg);
  }
`;

const FilterInnerList = styled.div`
  display: none;
  /* display: flex; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4px;
  padding-top: 10px;
  width: 100%;

  & label {
    display: flex;
    align-items: center;
    font-weight: 300;

    & > span {
      display: inline-flex;
      align-items: center;
      user-select: none;
      color: ${theme.colors.brown4};
      &::before {
        content: '';
        display: inline-block;
        flex-shrink: 0;
        flex-grow: 0;

        width: 12px;
        height: 12px;
        margin-right: 4px;

        border: 1px solid ${theme.colors.brown4};
        border-radius: 0.25em;
      }
    }
  }
`;

const FilterInnerListItem = styled.input`
  &[type='checkbox'] {
    /* margin-right: 4px; */
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + span::before {
    }
  }

  &[type='number'] {
    width: 50%;
    margin: 0 5px;
    padding: 3px;

    font-weight: 300;

    background-color: transparent;
    border: 0.5px solid ${theme.colors.brown4};

    &:focus-visible,
    &:focus-within {
      outline-color: ${theme.colors.brown4};
    }
  }

  &[type='range'] {
    width: 100%;
    height: 3px;

    &::-webkit-slider-thumb,
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      background: none;
    }

    &::-webkit-slider-runnable-track {
      height: 3px;
      background: ${theme.colors.brown4};
    }

    &::-webkit-slider-thumb {
      position: relative;
      height: 10px;
      width: 10px;
      margin-top: -7px;
      border: 1px solid ${theme.colors.brown4};
      color: ${theme.colors.brown4};
      border-radius: 20px;
      z-index: 1;
    }
  }
`;

const RangeWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;

  & label {
    display: flex;
    align-items: center;
    color: ${theme.colors.brown4};
  }
`;

const RangeLabel = styled.label`
  width: 80%;
  margin: 8px auto;
`;

const InfoBtn = styled.button`
  width: 100%;
  padding: 6px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 0.5px solid ${theme.colors.green};
  border-radius: 10px;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 16px 0;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.green2};
    border: 0.5px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    background-color: ${theme.colors.green4};
    border: 0.5px solid ${theme.colors.green4};
    cursor: default;
  }
`;

const InfoBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 100%;
`;

export {
  IconBtn,
  FilterBtn,
  Filters,
  Filter,
  FilterHeading,
  FilterInnerList,
  FilterInnerListItem,
  InfoBtn,
  InfoBtnBox,
  RangeWrapper,
  RangeLabel,
};
