import React from 'react';
import Form from './components/Form/Form';

import './app.css';

function App() {
  return (
    <div className="container">
      <div className="wrap-post">
        <h1>React Posts</h1>
        <p>Onde vai ficar o componente dos posts</p>
      </div>
      <div className="wrap-form">
        <Form />
      </div>
    </div>
  );
}

export default App;