import React from 'react';

import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = props => {
  console.log('styles:', styles);

  return (
    <div className={styles.SideDrawer}>
      <Logo height="11%"/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
}

export default sideDrawer;