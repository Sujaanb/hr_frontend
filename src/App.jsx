import React from 'react';
import LandingPage from './components/LandingPage.jsx';

/**
 * App serves as the root component of the application. It currently renders
 * the LandingPage which contains the hero, feature highlights and job form.
 * If your application grows you can add routing here to switch between
 * different pages or features.
 */
function App() {
  return <LandingPage />;
}

export default App;
