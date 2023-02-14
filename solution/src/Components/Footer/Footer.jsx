import React from 'react';
import { StyledFooter } from './StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      Challenge by &nbsp;
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a href='https://omar-diaz.vercel.app' target='_blank'>
        Omar Díaz
      </a>
      .
    </StyledFooter>
  );
};

export { Footer };
