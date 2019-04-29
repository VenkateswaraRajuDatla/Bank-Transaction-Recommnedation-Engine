import React from 'react';
import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>(
  <ul className='NavigationItems col-12'>
  <NavigationItem link="/" >Home</NavigationItem>
  <NavigationItem>Profile</NavigationItem>
  <NavigationItem>Help</NavigationItem>
  <NavigationItem>Loan Prediction</NavigationItem>
  <NavigationItem>Bank Account</NavigationItem>
  </ul>
);

export default navigationItems;
