import React, { useState } from 'react';
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
} from './Footer.styled';
import theme from 'components/baseStyles/Variables.styled';

export const Footer = () => {
  const faqItems = [
    {
      title: 'Catalog',
      options: [
        'Discounts',
        'Novelty',
        'Clothes',
        'Footwear',
        'Backpacks and Bags',
        'Accessories',
      ],
      links: [
        `/catalog`,
        `/catalog`,
        `/catalog`,
        `/catalog`,
        `/catalog`,
        `/catalog`,
      ],
    },
    {
      title: 'EXPLORE',
      options: ['About us', 'Delivery, Payment, Returns', 'Privacy Policy'],
      links: [`/`, `/`, `/`],
    },
    {
      title: 'CONTACTS',
      options: ['+380111111111', 'support@quillis.com'],
      links: [`tel:380111111111`, `mailto:support@quillis.com`],
    },
  ];

  const [isOpen, setIsOpen] = useState({});

  const toggleVisibility = idx => {
    setIsOpen(prevState => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
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
                    <Link style={{ textDecoration: 'none' }} key={el} to={it}>
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
                  <Link style={{ textDecoration: 'none' }} key={el} to={it}>
                    <FaqListOptions>{item.options[el]}</FaqListOptions>
                  </Link>
                ))}
              </FaqListOptionsBox>
            </FooterFaqListItem>
          ))}
        </FooterFaqList>

        <div>
          <FooterSubscribtion>Subscribtion</FooterSubscribtion>
          <FooterSubscribtion>Subscribe to enjoy 10% off</FooterSubscribtion>

          <FooterSubscribtionDiscr>
            Receive exclusive updates on new arrivals, care tips, and
            promotions.
          </FooterSubscribtionDiscr>

          <FooterSubscribtionDiscr1>
            Join our community and receive exclusive updates on new arrivals,
            care tips, and promotions.
          </FooterSubscribtionDiscr1>

          <FooterInputForm>
            <label>
              <FooterInput
                type="email"
                name=""
                id=""
                placeholder="Enter your email here"
              />
            </label>

            <FooterInputFormBtn>SUBSCRIBE</FooterInputFormBtn>
          </FooterInputForm>

          <FooterContacts>
            <FooterLogo>Quillis</FooterLogo>

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
              <LinkBrand to="">Designed and Developed by Brand Maze</LinkBrand>
            </span>
          </FooterFaqListItem>
        </FooterFaqListBrand>
      </FooterContainerBrand>
    </FooterSection>
  );
};
