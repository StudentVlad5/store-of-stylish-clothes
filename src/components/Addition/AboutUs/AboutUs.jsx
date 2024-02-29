import React, { useEffect } from 'react';
import { Container, Title, Subtitle, Parah, Signature } from './AboutUs.styled';

export const AboutUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>About us</Title>
      <Subtitle>Welcome to HomeForest!</Subtitle>
      <Parah>
        Our founders started out as a group of childhood friends that all had a
        passion for nature and the outdoors. Post college, they ended up
        becoming roommates. Turns out, having a home filled with plants was
        something they continued to have in common. Unfortunately, they found it
        difficult to find a place online to purchase houseplants that was easy
        to navigate and wasn’t just geared to wholesale. So, in 2017, they
        decided to launch own online shop to be the ultimate destination for
        everything houseplants.
      </Parah>
      <Parah>
        Originally working out of the humble house they shared, HomeForest has
        now grown to occupy a much larger and well equipped greenhouse based in
        Ukraine.
      </Parah>
      <Parah>
        Today, we still treat every order with the same care as we did working
        out of the small backyard and garage we started in.
      </Parah>
      <Signature>
        From our home to yours,
        <br />
        The HomeForest Team
      </Signature>
    </Container>
  );
};
