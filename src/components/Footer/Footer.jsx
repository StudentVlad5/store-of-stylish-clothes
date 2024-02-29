import React, { useState } from 'react';

import {
  FooterSection,
  FooterContainer,
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
} from './Footer.styled';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const faqItems = [
    {
      title: 'Customer Service',
      options: ['FAQ', 'Shipping & Handling', '30-Day guarantee', 'Contact Us'],
      links: [
        `/addition/faq`,
        `/addition/shipping`,
        `/addition/guarantee`,
        `/addition/contact`,
      ],
    },
    {
      title: 'Resources',
      options: [
        'Find Your Plant 🌿',
        'Plant Care Library',
        'Blog',
        'Free Online Course',
      ],
      links: [
        `/catalog?perPage=12&page=1`,
        `/care`,
        `/addition/blogs`,
        `/addition/course`,
      ],
    },
    {
      title: 'my homeforest 🌿',
      options: ['My Account', 'Workshops', 'Rewards Program', 'Track My Order'],
      links: [
        `/user/profile`,
        `/addition`,
        `/addition/rewards_program`,
        `/user/orders`,
      ],
    },
    {
      title: 'explore',
      options: ['Our Story', 'Locations', 'Careers', 'Corporate Gifting'],
      links: [
        `/addition/about_company`,
        `/addition/location`,
        `/addition/careers`,
        `/gifts`,
      ],
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
            Join our community of plant lovers and receive exclusive updates on
            new arrivals, care tips, and promotions.
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
            <FooterLogo>homeforest</FooterLogo>

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
    </FooterSection>
  );
};
