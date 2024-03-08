import React from 'react';
import PropTypes from 'prop-types';
import {
  MobileNavListModalFirst,
  ModalFirstBox,
  ModalFirstListItem,
} from './ModalFirst.styled';
import { Link } from 'react-router-dom';
import { MobileNavBox } from '../Nav.styled';

export const ModalFirst = ({ toggleModal }) => {
  return (
    <MobileNavListModalFirst>
      <ModalFirstBox>
        <Link onClick={toggleModal}>Back</Link>
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
