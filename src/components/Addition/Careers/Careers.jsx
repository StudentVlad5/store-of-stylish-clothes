import React, { useEffect } from 'react';
import { Container, Title, Parah } from './Careers.styled';

export const Careers = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>Careers</Title>
      <Parah>Currently, the company has no vacancies</Parah>
    </Container>
  );
};
