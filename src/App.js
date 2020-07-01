import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import PlayField from '../src/components/PlayField'
import TopNav from '../src/components/TopNav'

function App() {
  return (
     
     <Router>
       <div className="container-fluid">
       <TopNav/>
      <Switch>
      <Route path="/playfield">
        <PlayField/>
       </Route>
       <Route path="/youtube/audio">
        <div>D</div>
       </Route>
     </Switch>
     </div>
     </Router>
       
    
  );
}

export default App;
