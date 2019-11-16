import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Home from './pages/Home';
import Results from './pages/Results';
import Contributors from './pages/Contributors';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/contributors" component={Contributors} />
        <Route path="/search" component={Search} />


      </Switch>

    </div>
  );
}

export default App;
