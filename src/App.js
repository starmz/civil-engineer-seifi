import React, { createRef, useRef } from 'react';
import './App.css';
import Home from './Container/Home/Home';
import Works from './Container/Works/Works';
import Profile from './Container/Profile/Profile';

function App() {
  const worksSection = useRef(null);
  const profileSection = createRef();

  const scrollToRef = (ref) => {
    switch (ref) {
      case 'worksSection':
        window.scrollTo(0, worksSection.current.offsetTop)
      break;
      case 'profileSection':
        window.scrollTo(0, profileSection.current.offsetTop)
      break;
    }
  }
  return (
    <div className="App">
      <main>
        <Home goToWorks={(ref)=>scrollToRef(ref)} /> 
        <Works ref={worksSection} /> 
        <Profile ref={profileSection} /> 
      </main>
    </div>
  );
}

export default App;
