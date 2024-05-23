import React, { useState, useEffect } from 'react';
import {
  Backdrop,
  ModalAdvertBox,
  ModalAdvertBtn,
  ModalAdvertImg,
  ModalAdvertList,
  ModalAdvertListItem,
  ModalAdvertText,
} from './ModalAdvert.styled';
import img1_webp_2x from 'images/gifts/img1@2x.webp';
import img4_webp_2x from 'images/gifts/readyStyles@2x.webp';
import { BasketIconClose } from 'components/Header/ShoppingBag/ShoppingBag.styled';
import { useTranslation } from 'react-i18next';

export const ModalAdvert = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          <Backdrop onClick={handleClose} />
          <ModalAdvertBox>
            <ModalAdvertBtn onClick={handleClose}>
              <BasketIconClose />
            </ModalAdvertBtn>
            <ModalAdvertList>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <li style={{ marginRight: 15 }}>
                  <ModalAdvertListItem
                    to="/styles"
                    onClick={() => setShowModal(false)}
                  >
                    <ModalAdvertImg src={img4_webp_2x} alt="" />
                    <ModalAdvertText>{t("Ready styles")}</ModalAdvertText>
                  </ModalAdvertListItem>
                </li>
                <li>
                  <ModalAdvertListItem
                    to="/gifts"
                    onClick={() => setShowModal(false)}
                  >
                    <ModalAdvertImg src={img1_webp_2x} alt="" />
                    <ModalAdvertText>{t("Gifts")}</ModalAdvertText>
                  </ModalAdvertListItem>
                </li>
              </div>

              <li>
                <a
                  onClick={() => setShowModal(false)}
                  href="mailto:quillis.info@gmail.com"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ModalAdvertText
                    style={{
                      width: 250,
                      textAlign: 'center',
                      textDecoration: 'underline',
                    }}
                  >
                    {t("Have ideas on how to improve our website or what products to add?")}
                  </ModalAdvertText>
                </a>
              </li>
            </ModalAdvertList>
          </ModalAdvertBox>
        </>
      )}
    </>
  );
};
