import React, { useEffect, useState } from 'react';
import darkMobileBg from '../../images/bg-mobile-dark.jpg';
import defaultMobileBg from '../../images/bg-mobile-light.jpg';
import darkDeskBg from '../../images/bg-desktop-dark.jpg';
import defaultDeskBg from '../../images/bg-desktop-light.jpg';
import { StyledTop } from './StyledTop';

const backgroundImages = {
  dark: {
    Mobile: darkMobileBg,
    Desk: darkDeskBg,
  },
  default: {
    Mobile: defaultMobileBg,
    Desk: defaultDeskBg,
  },
};

const Top = ({ theme, children }) => {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth < 760 ? 'Mobile' : 'Desk'
  );
  const [backgroundImage, setBackgroundImage] = useState(
    backgroundImages[theme][screenWidth]
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth < 760 ? 'Mobile' : 'Desk');
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setBackgroundImage(backgroundImages[theme][screenWidth]);
  }, [theme, screenWidth]);

  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return <StyledTop style={style}>{children}</StyledTop>;
};

export { Top };
