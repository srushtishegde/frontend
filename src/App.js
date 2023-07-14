import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" Component={Home} />
        <Route path="/menu" Component={Menu} />
        <Route path="/about" Component={AboutUs} />
      </div>
    </Router>
  );
}

export default App;




