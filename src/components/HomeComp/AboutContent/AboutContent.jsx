import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AboutSection,
  AboutContainer,
  AboutSubTitle,
  Title,
} from './AboutContent.styled';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { SectionWrapper } from 'components/baseStyles/CommonStyle.styled';

export const AboutContent = () => {
  const { t } = useTranslation();
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);

  return (
    <>
      <AboutSection>
        <SectionWrapper>
          <AboutContainer>
            <Title>About</Title>
            <AboutSubTitle>
              We are a company that offers stylish and modern clothes, shoes and
              accessories for a quality life. Our mission is to help our
              customers express their uniqueness through fashion, inspiring them
              to express themselves and choose a style that suits their needs
              and characteristics.
            </AboutSubTitle>
            <AboutSubTitle>
              Our team is a group of passionate professionals who provide
              personalized service and are always ready to help you choose the
              perfect look. We strive to provide you with the highest quality
              products and satisfaction with every purchase.
            </AboutSubTitle>
          </AboutContainer>
        </SectionWrapper>
      </AboutSection>
    </>
  );
};
