import React, { useEffect } from 'react';
import {
  Container,
  SubTitleP,
  Title,
  WorksList,
  SubTitleLi,
} from './Rewards.styled';

export const Rewards = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>Rewards program</Title>
      <SubTitleP>
        <span style={{ fontWeight: '700' }}>Buy more—get more! </span> Our
        loyalty program rewards our garden-loving friends with in-store credit
        for every purchase! Additionally, receive member-only specials and other
        special benefits.
      </SubTitleP>
      <Title>How It Works:</Title>
      <WorksList>
        <SubTitleLi>Earn 1 point for every dollar you spend.</SubTitleLi>
        <SubTitleLi>
          For every 500 points earned you will receive a $10 Plant Perfect gift
          card.
        </SubTitleLi>
        <SubTitleLi>
          Gift cards will be mailed to you at the end of each month to be
          redeemed towards in-store purchases.
        </SubTitleLi>
        <SubTitleLi>
          Landscaping materials and services do not qualify for earning points.
          Members are automatically included in our newsletter list.
        </SubTitleLi>
      </WorksList>
    </Container>
  );
};
