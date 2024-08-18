import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <Theme appearance="dark">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
