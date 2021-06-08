import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import JoinGamePage from './pages/JoinGamePage';
import GamePage from './pages/GamePage';

// import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter basename="/">
                <Switch>
                    <Route path="/" exact component={JoinGamePage} />
                    <Route path="/room/:roomCode" component={GamePage} />

                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        </div>
    );
};

export default App;
