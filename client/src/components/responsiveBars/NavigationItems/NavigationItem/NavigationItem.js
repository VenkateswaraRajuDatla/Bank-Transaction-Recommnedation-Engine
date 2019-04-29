import React from 'react';

import './NavigationItem.scss';
const navigationItem = (props) =>(
  <li className='NavigationItem col-2'>
  <a
  href={props.link}>{props.children}</a>
  </li>
);

export default navigationItem;
