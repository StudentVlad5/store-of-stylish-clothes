import React, { useEffect } from 'react';
import { Container, SubTitleP, Title } from './Guarantee.styled';
import { ReactComponent as Done } from 'images/svg/done.svg';

export const Guarantee = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>Guarantee</Title>
      <Done />
      <SubTitleP>
        If your plant dies withing 30 days, we’ll replace it for free.
      </SubTitleP>
    </Container>
  );
};
