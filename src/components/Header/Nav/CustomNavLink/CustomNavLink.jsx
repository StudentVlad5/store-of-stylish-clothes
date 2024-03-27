import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IconFeather, NavItem } from '../Nav.styled';

export const CustomNavLink = ({ to, children }) => {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      setIsActive(location.pathname === to);
    }, [location, to]);
  
    return (
      <NavItem
        to={to}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        activeClassName="active"
      >
        {children}
        {(isActive || isHovered) && <IconFeather className='icon'/>}
      </NavItem>
    );
  };
