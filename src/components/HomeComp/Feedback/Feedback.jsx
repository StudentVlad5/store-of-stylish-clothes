import React, { useState } from 'react';
import {
  ArrowIcon,
  FeedbackBox,
  FeedbackBox1,
  FeedbackBox1Text,
  FeedbackDiscr,
  FeedbackTitle,
  FeedbackUser,
  QuotationMarkIcon,
  QuotationMarkIconDesk,
} from './Feedback.styled';
import { ProductsSection } from '../Products/Products.styled';

export const FeedbackComp = () => {
  const feedbackArr = [
    {
      text: 'Yukka has taken pride of place in his new home and looks beautiful in the sun on a white wall.',
      user: 'Matthew H.',
    },
    {
      text: 'Strelitzia is beautiful! 😍 I got it as a gift from my husband and I think it was from the heart because she has been with us for less than a month and two new leaves are already growing 🙂',
      user: 'Jenny P.',
    },
  ];
  const [currentSlide, setcurrentSlide] = useState(0);
  const nextSlide = () => {
    setcurrentSlide(prevSlide => (prevSlide + 1) % feedbackArr.length);
  };

  const prevSlide = () => {
    setcurrentSlide(prevSlide =>
      prevSlide === 0 ? feedbackArr.length - 1 : prevSlide - 1,
    );
  };

  return (
    <ProductsSection>
      {/* <Feedback> */}
      <FeedbackTitle>What our clients say</FeedbackTitle>
      <FeedbackBox>
        <ArrowIcon onClick={prevSlide} />
        <FeedbackDiscr>
          <QuotationMarkIcon />
          {feedbackArr[currentSlide].text}
          <FeedbackUser>{feedbackArr[currentSlide].user}</FeedbackUser>
        </FeedbackDiscr>
        <ArrowIcon onClick={nextSlide} />
      </FeedbackBox>

      <FeedbackBox1>
        <FeedbackBox1Text>
          <QuotationMarkIconDesk />
          <FeedbackDiscr>
            Yukka has taken pride of place in his new home and looks beautiful
            in the sun on a white wall, I am delighted because it is really
            beautiful and impressive. The best plant shop I recommend. Matthew
            H.
          </FeedbackDiscr>
        </FeedbackBox1Text>

        <FeedbackBox1Text>
          <QuotationMarkIconDesk />
          <FeedbackDiscr>
            Strelitzia is beautiful! 😍 I got it as a gift from my husband and I
            think it was from the heart because she has been with us for less
            than a month and two new leaves are already growing 🙂 Jenny P.
          </FeedbackDiscr>
        </FeedbackBox1Text>
      </FeedbackBox1>
      {/* </Feedback> */}
    </ProductsSection>
  );
};
