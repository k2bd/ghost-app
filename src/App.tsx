import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import JoinGamePage from './pages/JoinGamePage';
import GamePage from './pages/GamePage';

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/ghost" exact component={JoinGamePage} />
                    <Route path="/ghost/:roomCode" component={GamePage} />

                    <Redirect to="/ghost" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
