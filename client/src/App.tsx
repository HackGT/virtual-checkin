import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VideoWindow from './components/VideoWindow';
import logo from './assets/logo.png';

// a little bee ascii art 
const art = ".' '.                             buzz buzz\n.        .   .           (__\\ \n .         .         . -{{_(|8)\n   ' .  . ' ' .  . '     (__/"

const App: React.FC = () => {
  console.log(art);
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://live.healthtech.hack.gt/schedule">
          <img src={logo} className="HackGT-logo" alt="hackGT"/>
        </a>
        <Router>
          <Switch>
            <Route path="/:id" children={<VideoWindow/>} />          
            <Route path="/" children={<h1>Something went wrong, please try again or contact HackGT staff!</h1>} />
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
