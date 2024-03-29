import React, { useEffect, useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import {
  FormSection,
  CheckOutContainer,
  CheckOutTitle,
  CheckOutDataWrapper,
  FolderWrapper,
  LinkFolder,
  CheckOutAboutWrapper,
  Liner,
  LinkFolderTitle,
} from './Checkout.styled';
import { getFromStorage } from 'services/localStorService';

export const CheckOut = () => {
  const [activeStep, setActiveStep] = useState(
    getFromStorage('step') ? getFromStorage('step') : 1,
  );

  useEffect(() => {
    const links = document.querySelectorAll('.linkFolder');
    for (let i = 0; i < links.length; i += 1) {
      if (i >= activeStep) {
        links[i].classList.add('isDisabled');
      }
    }
  }, [activeStep]);

  return (
    <FormSection>
      <CheckOutContainer>
        <CheckOutTitle as="h1" hidden>
          CheckOut Steps
        </CheckOutTitle>
        <CheckOutDataWrapper>
          <FolderWrapper>
            <LinkFolder className="linkFolder step1Btn" to={`/checkout/step1`}>
              <span>1</span>
              <LinkFolderTitle>Delivery</LinkFolderTitle>
            </LinkFolder>
            <Liner>
              <span></span>
            </Liner>
            <LinkFolder
              className={'linkFolder step2Btn'}
              to={`/checkout/step2`}
            >
              <span>2</span>
              <LinkFolderTitle>Address</LinkFolderTitle>
            </LinkFolder>
            <Liner>
              <span></span>
            </Liner>
            <LinkFolder className="linkFolder step3Btn" to={`/checkout/step3`}>
              <span>3</span>
              <LinkFolderTitle>Payment</LinkFolderTitle>
            </LinkFolder>
            <Liner>
              <span></span>
            </Liner>
            <LinkFolder className="linkFolder step4Btn" to={`/checkout/step4`}>
              <span>4</span>
              <LinkFolderTitle>Total</LinkFolderTitle>
            </LinkFolder>
          </FolderWrapper>

          <CheckOutAboutWrapper>
            <Outlet />
          </CheckOutAboutWrapper>
        </CheckOutDataWrapper>
      </CheckOutContainer>
    </FormSection>
  );
};

export default CheckOut;
