import React, { useState } from 'react';
import SelectionForm from './components/SelectionForm';
import DisplayArea from './components/DisplayArea';

function App() {
  const [petType, setPetType] = useState(null);

  return (
    <div className="App">
      <h1>Pet Facts and Image</h1>
      <SelectionForm setPetType={setPetType} />
      <DisplayArea petType={petType} />
    </div>
  );
}

export default App;
