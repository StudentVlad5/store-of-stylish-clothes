import React from 'react';
import PropTypes from 'prop-types';
import {
  BackLink,
  IconArrowBack,
  MobileNavListModalFirst,
  ModalFirstBox,
  ModalFirstListItem,
} from './ModalFirst.styled';
import { MobileNavBox } from '../Nav.styled';

export const ModalFirst = ({ toggleModal }) => {
  return (
    <MobileNavListModalFirst>
      <ModalFirstBox>
        <BackLink onClick={toggleModal}>
          <IconArrowBack /> Back
        </BackLink>
        <MobileNavBox>
          <ModalFirstListItem>Clothes</ModalFirstListItem>
          <ModalFirstListItem>Footwear</ModalFirstListItem>
          <ModalFirstListItem>Accessories</ModalFirstListItem>
          <ModalFirstListItem>Backpacks and bags</ModalFirstListItem>
        </MobileNavBox>
      </ModalFirstBox>
    </MobileNavListModalFirst>
  );
};

ModalFirst.propTypes = {
  toggleModal: PropTypes.func,
};
