import React from 'react';
import './App.css';

import Alpha from 'alpha';
import 'bravo';
import 'charlie';

const App: React.FC = () => {
  return (
    <div className="App">
      <Alpha></Alpha>
      <bravo-element></bravo-element>
      // @ts-ignore
      <charlie-element></charlie-element>
    </div>
  );
}

export default App;
