import React from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import Card from './components/Card';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Component Library Showcase</h1>
      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
      <Modal isOpen={true} onClose={() => alert('Modal closed!')}>
        <p>This is a modal window.</p>
      </Modal>
      <Card title="Sample Card" content="This is an example card component." />
    </div>
  );
}

export default App;