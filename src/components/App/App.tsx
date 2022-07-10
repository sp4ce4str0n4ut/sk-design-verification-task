import React from 'react';
import Form from '../Form/index';
import Info from '../Info/Info';

import { AppGlob, AppWrap } from './styles';

function App() {
  return (
    <AppGlob>
      <AppWrap>
        <Info />
        <Form />
      </AppWrap>
    </AppGlob>
  );
}

export default App;
