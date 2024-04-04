import React from 'react';
import {
  CareContainer,
  CareSection,
  CareSpanName,
  CareSpanTitle,
} from 'components/Confidential/Confidential.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import { useTranslation } from 'react-i18next';
import { Done, ShippingFast } from 'components/Basket/Total/TotalPrice.styled';
import {
  CreditCardIcon,
  DPBox,
  DPBoxIcon,
  DPBoxList,
  DPBoxListItem,
  DeliveryIcon,
  DoneIcon,
  ExchangeIcon,
} from './DeliveryAndPayments.styled';

export const DeliveryAndPayments = () => {
  const { t } = useTranslation();

  return (
    <CareSection>
      <CareContainer>
        <Title>{t('Delivery, Payment, Returns')}</Title>

        <div>
          <DPBox>
            <DPBoxIcon>
              <DeliveryIcon />
              <CareSpanTitle>{t('Delivery')}</CareSpanTitle>
            </DPBoxIcon>

            <CareSpanName style={{ marginBottom: 5 }}>
              {t('The delivery time in Ukraine is from 4-5 days')}
            </CareSpanName>

            <CareSpanName>
              {t('The delivery time in Europe is from 14 days')}
            </CareSpanName>
          </DPBox>

          <DPBox>
            <DPBoxIcon>
              <CreditCardIcon />
              <CareSpanTitle>{t('Payment')}</CareSpanTitle>
            </DPBoxIcon>

            <CareSpanName>
              {t('Cash upon delivery, card payment Visa, Master Card')}
            </CareSpanName>
          </DPBox>

          <DPBox>
            <DPBoxIcon>
              <DoneIcon />
              <CareSpanTitle>{t('Quality control')}</CareSpanTitle>
            </DPBoxIcon>

            <CareSpanName>
              {t(
                'When you receive the product by mail, you have the right to try it on, look at it and evaluate how satisfied you are with the quality of the ordered products before paying for the order. Does the size and style fit you or meet your expectations.',
              )}
            </CareSpanName>
          </DPBox>

          <DPBox>
            <DPBoxIcon>
              <ExchangeIcon />
              <CareSpanTitle>{t('Exchange / Return')}</CareSpanTitle>
            </DPBoxIcon>

            <CareSpanName style={{marginBottom: 10}}>
              {t(
                'If you do not like the size, color, or other problems, within 14 days after purchase, you can return the product to us or exchange it for another one.',
              )}
            </CareSpanName>

            <CareSpanName style={{marginBottom: 10}}>
              {t(
                'Shipping is paid by the buyer, in case of return or exchange of goods.',
              )}
            </CareSpanName>

            <CareSpanName style={{marginBottom: 15}}>
              {t(
                'Refunds are made within 1-3 working days after we receive the goods returned from you to the Nova Poshta warehouse. In the event of a production defect, we will pay for the delivery.',
              )}
            </CareSpanName>

            <CareSpanName>
              <b>{t('Terms of return / exchange:')}</b>
            </CareSpanName>

            <DPBoxList>
              <DPBoxListItem>
                <CareSpanName>
                  {t(
                    'absence of signs of product use, pollution, extraneous odors;',
                  )}
                </CareSpanName>
              </DPBoxListItem>
              <DPBoxListItem>
                <CareSpanName>{t('presence of shortcuts;')}</CareSpanName>
              </DPBoxListItem>
              <DPBoxListItem>
                <CareSpanName>{t('preserved product appearance.')}</CareSpanName>
              </DPBoxListItem>
            </DPBoxList>

            <CareSpanName style={{marginBottom: 10}}>
              {t(
                'If signs of product use are detected, we reserve the right to refuse a refund.',
              )}
            </CareSpanName>

            <CareSpanName>
              {t('If you still have questions, write to us:')}{' '}
              <b>
                <a
                  style={{ textDecoration: 'none', color: 'black' }}
                  href="mailto:quillis.info@gmail.com"
                >
                  quillis.info@gmail.com
                </a>
              </b>
            </CareSpanName>
          </DPBox>
        </div>
      </CareContainer>
    </CareSection>
  );
};
