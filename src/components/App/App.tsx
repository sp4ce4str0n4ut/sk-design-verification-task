import React from 'react';
import Form from '../Form/index';
import Info from '../Info/Info';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app_wrap}>
        <Info />
        <Form />
      </div>
    </div>
  );
}

export default App;
