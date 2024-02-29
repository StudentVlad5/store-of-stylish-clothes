import React, { useEffect } from 'react';
import {
  Container,
  Title,
  List,
  Subtitle,
  SubtitleP,
  Img,
} from './Shipping.styled';
import rules_img from 'images/shipping/shipping.webp';

export const Shipping = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>Our rules of Shipping & Handling</Title>
      <List>
        <Subtitle>
          <h4>Make sure the soil is contained.</h4>
          <SubtitleP>
            Place the pot inside a plastic bag.
            <br />
            Secure the top opening of the bag around the stem of the plant so
            that soil can’t escape from the pot or bag.
          </SubtitleP>
        </Subtitle>
        <Subtitle>
          <h4>Secure the pot inside the corrugated box.</h4>
          <SubtitleP>
            Use a corrugated divider to keep the pot from shifting in the box
            and damaging stems and leaves.
            <br />
            If the plant doesn’t have a single main stem, place paper between
            the leaves and over the soil and secure it to the pot.
          </SubtitleP>
        </Subtitle>
        <Subtitle>
          <h4>Properly seal and label the box.</h4>
          <SubtitleP>
            Use the H taping method to apply at least three strips of adhesive
            tape. Do this to the top and bottom of the box. Then tape all seams
            and flaps.
            <br />
            Place our shipping label on top of the box.
          </SubtitleP>
        </Subtitle>
      </List>
      <Img
        alt="Our rules of Shipping & Handling"
        src={rules_img}
        loading="lazy"
      />
    </Container>
  );
};
