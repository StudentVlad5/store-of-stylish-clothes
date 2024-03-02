import React, { useEffect } from 'react';
import { Container } from './Blog.styled';

export const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <Container></Container>;
};
