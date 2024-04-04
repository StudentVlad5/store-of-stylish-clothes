import React, { useState, useEffect } from 'react';
import { getCareList } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';

import {
  CareContainer,
  CareLi,
  CareSection,
  CareSpanName,
  CareSpanTitle,
  CareUl,
} from './Confidential.styled';
import { Subtitle, Title } from 'components/baseStyles/CommonStyle.styled';
import { useTranslation } from 'react-i18next';

export const Confidential = () => {
  const { t } = useTranslation();
  
  return (
    <CareSection>
      <CareContainer>
        <Title>{t("Privacy Policy")}</Title>
        <div>
          <CareSpanTitle>A. {t("Introduction")}</CareSpanTitle>
          <CareUl>
            <CareLi>
              <CareSpanName>
                {t("The privacy of our website visitors is very important to us, and we are committed to safeguarding it. This policy explains what we do with your personal information.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Consenting to our use of cookies in accordance with the terms of this policy when you first visit our website permits us to use cookies every time you visit our website.")}
              </CareSpanName>
            </CareLi>
          </CareUl>

          <CareSpanTitle>B. {t("How we collect your personal data")}</CareSpanTitle>
          <CareSpanName>
            {t("The following types of personal information may be collected, stored, and used:")}
          </CareSpanName>

          <CareUl>
            <CareLi>
              <CareSpanName>
                {t("Information about your computer including your IP address, geographical location, browser type and version, and operating system.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information about your visits to and use of this website including the referral source, length of visit, page views, and website navigation paths.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information that you enter when you register with our website, such as your email website.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information that you enter when you create a profile on our website. For example, your name, profile pictures, birthday, and employment details.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information that you enter in order to set up subscription to our emails and/or newsletters.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information that is generated while using our website, including when, how often, and under what circumstances you use it.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information relating to anything you purchase, services you use, or transaction you make through our website, which includes your name, address, telephone number, email address, and credit card details.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information that you post to our website with the intention of publishing it on the internet.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Any other personal information you send to us.")}
              </CareSpanName>
            </CareLi>
          </CareUl>

          <CareSpanTitle>C. {t("Using Personal Information")}</CareSpanTitle>
          <CareSpanName>
            {t("Personal information submitted to us through our website will be used for the purposes specified in this policy or on the relevant pages of the website. We may use your personal information for the following:")}
          </CareSpanName>

          <CareUl>
            <CareLi>
              <CareSpanName>
                {t("Administering our website and business.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>{t("Personalizing our website for you.")}</CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Enabling your use of the services available on our website.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Sending you goods purchased through our website.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Supplying services purchased through our website.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Sending statements, invoices, and payment reminders to you, and collecting payments from you.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Sending you on-marketing commercial communications.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Sending you email notifications you have specifically requested.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Sending you our email newsletter if you signed up for it.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Sending you marketing communications relating to our business or the businesses of third parties which we think may be of interest to you.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Providing third parties with statistical information about our users.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Dealing with inquiries and complaints made by or about you relating to our website.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Keeping our website secure and prevent fraud.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Verifying compliance with the terms and conditions governing the use of our website.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Other uses. If you submit personal information for publication on our website, we will publish and otherwise use that information in accordance with the license you grant us. Your privacy settings can be used to limit the publication of your information on our website and can be adjusted using privacy controls on the website. We will not, without your expressed consent, supply your personal information to any third party for their or any other third party’s direct marketing.")}
              </CareSpanName>
            </CareLi>
          </CareUl>

          <CareSpanTitle>D. {t("International data transfers")}</CareSpanTitle>
          <CareUl>
            <CareLi>
              <CareSpanName>
                {t("Information that we collect may be stored, processed in, and transferred between any of the countries in which we operate in order to enable us to use the information in accordance with this policy.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Information that we collect may be transferred to the following countries which do not have data protection laws equivalent to those in force in the European Economic Area: the United States of America, Ukraine, Japan, China, and India.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Personal information that you publish on our website or submit for publication on our website may be available, via the internet, around the world. We cannot prevent the use or misuse of such information by others.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("You expressly agree to the transfers of personal information described in this Section")} D.
              </CareSpanName>
            </CareLi>
          </CareUl>

          <CareSpanTitle>E. {t("Retaining personal information")} </CareSpanTitle>
          <CareUl>
            <CareLi>
              <CareSpanName>
                {t("This Section E sets out our data retention policies and procedure, which are designed to help ensure that we comply with our legal obligations regarding the retention and deletion of personal information.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Personal information that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Without prejudice to article G-2, we will usually delete personal data falling within the categories set out below at the date/time.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("Notwithstanding the other provisions of this Section E, we will retain documents (including electronic documents) containing personal data: a. to the extent that we are required to do so by law; b. if we believe that the documents may be relevant to any ongoing or prospective legal proceedings; and c. in order to establish, exercise, or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk).")}
              </CareSpanName>
            </CareLi>
          </CareUl>

          <CareSpanTitle>
            F. {t("Security of your personal information")}
          </CareSpanTitle>

          <CareUl>
            <CareLi>
              <CareSpanName>
                {t("We will take reasonable technical and organizational precautions to prevent the loss, misuse, or alteration of your personal information.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("We will store all the personal information you provide on our secure (password- and firewall-protected) servers.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("All electronic financial transactions entered into through our website will be protected by encryption technology.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("You acknowledge that the transmission of information over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet.")}
              </CareSpanName>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("You are responsible for keeping the password you use for accessing our website confidential; we will not ask you for your password (except when you log in to our website).")}
              </CareSpanName>
            </CareLi>
          </CareUl>

          <CareSpanTitle> G. {t("Your rights")} </CareSpanTitle>
          <CareSpanName>
            {t("You may instruct us to provide you with any personal information we hold about you; provision of such information will be subject to the following:")}
          </CareSpanName>
          <CareUl>
            <CareLi>
              <p>{t("The payment of a fee.")}</p>
            </CareLi>
            <CareLi>
              <CareSpanName>
                {t("The supply of appropriate evidence of your identity. We may withhold personal information that you request to the extent permitted by law. You may instruct us at any time not to process your personal information for marketing purposes. In practice, you will usually either expressly agree in advance to our use of your personal information for marketing purposes, or we will provide you with an opportunity to opt out of the use of your personal information for marketing purposes.")}
              </CareSpanName>
            </CareLi>
          </CareUl>

          <CareSpanTitle> H. {t("Updating information")} </CareSpanTitle>
          <CareSpanName>
            {t("Please let us know if the personal information that we hold about you needs to be corrected or updated.")}
          </CareSpanName>

          <CareSpanTitle style={{ marginTop: 15 }}>{t("Feedback")}</CareSpanTitle>
          <CareSpanName>
            {t("All suggestions or questions regarding this Privacy Policy should be sent to the Quillis.com online store customer service using the email address:")} 
            <b> quillis.info@gmail.com</b>
          </CareSpanName>
        </div>
      </CareContainer>
    </CareSection>
  );
};
