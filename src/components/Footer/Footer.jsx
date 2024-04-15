import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FooterSection,
  FooterContainer,
  FooterContainerBrand,
  FooterFaqListBrand,
  Facebook,
  Twiter,
  Instagram,
  Tiktok,
  YouTube,
  Pinterest,
  FooterFaqList,
  FooterFaqListItem,
  FooterFaqListTitle,
  ArrowDown,
  FaqListOptions,
  ArrowBox,
  FooterSubscribtion,
  FooterSubscribtionDiscr,
  FooterInput,
  FaqListOptionsBox,
  FaqListBoxText,
  FooterInputForm,
  FooterLogo,
  FooterContacts,
  FooterContactsList,
  FooterContactsListItem,
  FooterSubscribtionDiscr1,
  FooterInputFormBtn,
  LinkBrand,
  QuillisLogoFooter,
} from './Footer.styled';
import { useTranslation } from 'react-i18next';
import { homeProductLinks } from 'BASE_CONST/Base-const';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { saveToStorage } from 'services/localStorService';
import {
  onFetchError,
  onSuccess,
} from 'components/helpers/Messages/NotifyMessages';
import { makeEmail } from 'services/APIservice';

export const Footer = () => {
  const { t } = useTranslation();
  const [emailUser, setEmailUser] = useState('');
  const [emailSend, setEmailSend] = useState('');
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const [error, setError] = useState(null);
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);
  const init = {
    category: [],
    currency: selectedCurrency,
    man_woman: [],
    maxPrice: '5000',
    minPrice: '0',
    page: 1,
    perPage: 12,
    product: [],
    sizes: [],
  };
  const faqItems = [
    {
      title: t('Catalog'),
      options: [
        t('Discounts'),
        t('Novelty'),
        t('Clothes'),
        t('Shoes'),
        t('Backpacks and Bags'),
        t('Accessories'),
      ],
      opt: [
        'discounts',
        'novelty',
        'clothes',
        'shoes',
        'backpacks and Bags',
        'accessories',
      ],
      links: [
        `discounts`,
        `novetly`,
        `shop?maxPrice=5000&minPrice=0&page=1&perPage=12&currency=${selectedCurrency}&sort=&category=${homeProductLinks?.clothing[selectedLanguage]}`,
        `shop?category=${homeProductLinks?.footwear[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`,
        `shop?minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice&category=${homeProductLinks?.accessories[selectedLanguage]}&product=Backpacks`,
        `shop?minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice&category=${homeProductLinks?.accessories[selectedLanguage]}`,
      ],
    },
    {
      title: t('Explore'),
      options: [
        t('About us'),
        t('Delivery, Payment, Returns'),
        t('Privacy Policy'),
      ],
      opt: ['About us', 'Delivery, Payment, Returns', 'Privacy Policy'],
      links: [`/`, `delivery_and_payments`, `confidential`],
    },
    {
      title: t('CONTACTS'),
      options: ['+38-068-467-72-70', 'quillis.info@gmail.com'],
      links: [`tel:380684677270`, `mailto:quillis.info@gmail.com`],
    },
  ];

  const [isOpen, setIsOpen] = useState({});

  const toggleVisibility = idx => {
    setIsOpen(prevState => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  const hendleSaveFilterToLOcalStorige = it => {
    switch (it) {
      case 'clothes':
        saveToStorage('filters', {
          ...init,
          category: [homeProductLinks?.clothing[selectedLanguage]],
        });
        break;
      case 'shoes':
        saveToStorage('filters', {
          ...init,
          category: [homeProductLinks?.footwear[selectedLanguage]],
        });
        break;
      case 'backpacks and Bags':
        saveToStorage('filters', {
          ...init,
          category: [homeProductLinks?.accessories[selectedLanguage]],
        });
        break;
      case 'accessories':
        saveToStorage('filters', {
          ...init,
          category: [homeProductLinks?.accessories[selectedLanguage]],
        });
        break;
      default:
        saveToStorage('filters', {
          ...init,
        });
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        break;
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await makeEmail({ email: emailUser });
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        if (data) {
          setEmailUser('');
          setEmailSend('');
          return onSuccess(t('Thank you, we send your email to our community'));
        }
      } catch (error) {
        setError(error);
        onFetchError(t('Whoops, something went wrong'));
      } finally {
      }
    }
    if (emailSend !== '') {
      getData();
    }
  }, [emailSend]);

  const handleSubmit = () => {
    setEmailSend(emailUser);
  };
  return (
    <FooterSection id="footer">
      <FooterContainer>
        <FooterFaqList>
          {faqItems.map((item, idx) => (
            <FooterFaqListItem key={idx}>
              <FaqListBoxText>
                <FooterFaqListTitle>{item.title}</FooterFaqListTitle>
                <ArrowBox onClick={() => toggleVisibility(idx)}>
                  {isOpen[idx] ? <ArrowDown /> : <ArrowDown />}
                </ArrowBox>
              </FaqListBoxText>

              {isOpen[idx] && (
                <FaqListOptionsBox>
                  {item.links.map((it, el) => (
                    <Link
                      style={{ textDecoration: 'none' }}
                      key={el}
                      to={it}
                      onClick={() =>
                        hendleSaveFilterToLOcalStorige(item.opt[el])
                      }
                    >
                      <FaqListOptions>{item.options[el]}</FaqListOptions>
                    </Link>
                  ))}
                </FaqListOptionsBox>
              )}
            </FooterFaqListItem>
          ))}
        </FooterFaqList>

        <FooterFaqList>
          {faqItems.map((item, idx) => (
            <FooterFaqListItem key={idx}>
              <FaqListBoxText>
                <FooterFaqListTitle>{item.title}</FooterFaqListTitle>
              </FaqListBoxText>

              <FaqListOptionsBox>
                {item.links.map((it, el) => (
                  <Link
                    style={{ textDecoration: 'none' }}
                    key={el}
                    to={it}
                    onClick={() => hendleSaveFilterToLOcalStorige(item.opt[el])}
                  >
                    <FaqListOptions>{item.options[el]}</FaqListOptions>
                  </Link>
                ))}
              </FaqListOptionsBox>
            </FooterFaqListItem>
          ))}
        </FooterFaqList>

        <div>
          <FooterSubscribtion>{t('Subscribtion')}</FooterSubscribtion>
          <FooterSubscribtion>
            {t('Subscribe to enjoy 10% off')}
          </FooterSubscribtion>

          <FooterSubscribtionDiscr>
            {t('Receive exclusive updates on new arrivals and promotions.')}
          </FooterSubscribtionDiscr>

          <FooterSubscribtionDiscr1>
            {t(
              'Join our community and receive exclusive updates on new arrivals and promotions.',
            )}
          </FooterSubscribtionDiscr1>

          <FooterInputForm>
            <label>
              <FooterInput
                type="email"
                name="emailUser"
                id="emailUser"
                value={emailUser}
                onChange={e => {
                  setEmailUser(e.target.value);
                }}
                placeholder={t('Enter your email here')}
              />
            </label>

            <FooterInputFormBtn
              type="button"
              title="submit email"
              aria-label="submit email"
              onClick={() => handleSubmit()}
              disabled={!emailUser.match(isValidEmail)}
            >
              {t('SUBSCRIBE')}
            </FooterInputFormBtn>
          </FooterInputForm>

          <FooterContacts>
            <FooterLogo to="/">
              <QuillisLogoFooter />
            </FooterLogo>

            <FooterContactsList>
              <FooterContactsListItem>
                <Facebook />
              </FooterContactsListItem>

              <FooterContactsListItem>
                <Twiter />
              </FooterContactsListItem>

              <FooterContactsListItem>
                <Instagram />
              </FooterContactsListItem>

              <FooterContactsListItem>
                <Tiktok />
              </FooterContactsListItem>

              <FooterContactsListItem>
                <YouTube />
              </FooterContactsListItem>

              <FooterContactsListItem>
                <Pinterest />
              </FooterContactsListItem>
            </FooterContactsList>
          </FooterContacts>
        </div>
      </FooterContainer>
      <FooterContainerBrand>
        <FooterFaqListBrand>
          <FooterFaqListItem
            style={{
              padding: '20px 0',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>© Quillis 2024 - {new Date().getFullYear()}</span>
            <span>
              <LinkBrand
                href="https://brand-maze.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('Designed and Developed by Brand Maze')}
              </LinkBrand>
            </span>
          </FooterFaqListItem>
        </FooterFaqListBrand>
      </FooterContainerBrand>
    </FooterSection>
  );
};
