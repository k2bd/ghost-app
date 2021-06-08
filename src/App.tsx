import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import JoinGamePage from './pages/JoinGamePage';
import GamePage from './pages/GamePage';

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <HashRouter basename="/">
                <Switch>
                    <Route path="/ghost-app" exact component={JoinGamePage} />
                    <Route path="/ghost-app/:roomCode" component={GamePage} />

                    <Redirect to="/ghost" />
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
