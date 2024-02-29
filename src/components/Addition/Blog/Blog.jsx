import React, { useEffect } from 'react';
import { Container } from './Blog.styled';
import { Health } from 'components/HomeComp/Health/Health';
import { Care } from 'components/HomeComp/Care/Care';

export const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Health />
      <Care />
    </Container>
  );
};
