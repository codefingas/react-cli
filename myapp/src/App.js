import React from 'react';
import Ninjas from './ninjas';

function App() {
  return (
    <div className="App">
      <h1>
        My first react app
      </h1>
      <p>Welcome</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
    </div>
  );
}

export default App;
