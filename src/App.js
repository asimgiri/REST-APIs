import React from 'react';
import './App.css';
// import RandomCats from './components/RandomCats';
import SideNav from './components/SideNav';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      {/* <RandomCats /> */}
      <SideNav />
    </div>
  );
}

export default App;
