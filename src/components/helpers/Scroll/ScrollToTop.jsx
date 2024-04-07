import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as MdKeyboardDoubleArrowUp } from 'images/svg/double-arrow-up-14217.svg';

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      top="400"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: `${theme.colors.brown4}`,
        color: `${theme.colors.white}`,
      }}
      // rgba(255, 255, 255, 0.60)
      component={<MdKeyboardDoubleArrowUp size={30} />}
    />
  );
};

export { ScrollTop };
