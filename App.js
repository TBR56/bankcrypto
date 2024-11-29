import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Inicio</div>} />
      </Routes>
    </Router>
  );
}
export default App;