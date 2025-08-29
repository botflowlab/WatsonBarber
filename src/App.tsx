import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinessPage from './components/BusinessPage';

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<BusinessPage />} />
          <Route path="/:slug" element={<BusinessPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;