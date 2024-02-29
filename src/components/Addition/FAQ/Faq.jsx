import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  FAQList,
  ParahQ,
  ParahA,
  ArrowBox,
  Span,
} from './Faq.styled';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const faq = [
  {
    question: 'Return your order',
    answer:
      'If you plant or planter arrives damaged, please submit our contact form and we will be sure to make things right.  HomeForest does not accept returns...',
  },
  {
    question: 'Issues with your order',
    answer:
      'Please submit our contact form and our Customer Satisfaction team will get back to you as soon as possible.',
  },
  {
    question: 'Cancelling your Order',
    answer:
      'Please submit our contact form as soon as possible if you would like to change or cancel your order. We will do our best to process the request. Please note we usually are not able to cancel or edit an order after a tracking number or shipping label has been made.',
  },
  {
    question: 'Changing Shipping Address',
    answer:
      'Please submit our contact form if you would like to change the shipping address on your order. We will do our best to process the request as soon as possible. Please note we are not able to change an address after the shipping label or tracking number has been created.',
  },
  {
    question: 'Wholesale Orders',
    answer:
      'If you have a business and are looking for plants, visit our wholesale partners. They offer plants for pick-up in Southern California as well as wholesale freight shipments across the US. Apply to a wholesale account on their website to explore pricing and availability.',
  },
  {
    question: 'Corporate Gifting Options',
    answer:
      'We offer corporate gifting for companies of all sizes. Our gifting services are not limited so businesses but can also be used for weddings, collaborations, goody bags, and all other types of events.',
  },
  {
    question: 'How long will the delivery take?',
    answer:
      'Typically, it will take around 2-5 days to process your order until you receive tracking information, then depending on where you are in the country, it should take around 2-6 day to reach you after shipment. Please note that during holiday periods, orders may take up to a week to process.',
  },
];

export const Faq = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleVisibility = idx => {
    setIsOpen(prevState => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>FAQ</Title>
      <FAQList>
        {faq.map((item, idx) => (
          <li key={item.question}>
            <ParahQ onClick={() => toggleVisibility(idx)}>
              <Span>Question: </Span> {item.question}
              <ArrowBox>
                {isOpen[idx] ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </ArrowBox>
            </ParahQ>
            {isOpen[idx] && (
              <ParahA
                style={{ padding: '0 40px' }}
                onClick={() => toggleVisibility(idx)}
              >
                <Span>Answer: </Span>
                {item.answer}
              </ParahA>
            )}
          </li>
        ))}
      </FAQList>
    </Container>
  );
};
