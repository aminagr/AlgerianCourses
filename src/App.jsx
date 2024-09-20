import React from 'react';
import { AppProvider } from './context/AppContext.jsx';
import AppContent from './AppContent'; // Import the new AppContent component

const App = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
