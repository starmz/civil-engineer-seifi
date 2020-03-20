import React from 'react';
import './App.css';
import Home from './Home/Home';
import AdminProfile from './Admin/AdminProfile'

function App() {
  return (
    <div className="App">
      <AdminProfile />
      <main>
        <Home /> 
      </main>
    </div>
  );
}

export default App;
