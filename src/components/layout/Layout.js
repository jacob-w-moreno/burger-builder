import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

console.log('styles:', styles);

const layout = props => <Aux>
  <Toolbar/>
  <main className={styles.Content}>
    {props.children}
  </main>
</Aux>

export default layout;
