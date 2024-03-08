import React from 'react';
import { RecoilRoot } from 'recoil';
import AuthApp from './components/AuthApp';

function App() {
  return (
    <RecoilRoot>
      <AuthApp />
    </RecoilRoot>
  );
}

export default App;
