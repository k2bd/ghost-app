import { Alignment, Navbar } from '@blueprintjs/core';
import React from 'react';
import Donate from '../components/Donate';
import GameJoinInfo from '../components/GameJoinInfo';
import './JoinGamePage.css';

const JoinGamePage: React.FC = () => {
    return (
        <div className="game-join-page">
            <Navbar>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>2d Ghost</Navbar.Heading>
                    <Navbar.Divider />
                    <Donate />
                </Navbar.Group>
            </Navbar>
            <div className="vertical-centering">
                <GameJoinInfo joinGame={(roomCode, playerName) => console.log(roomCode, playerName)} />
            </div>
        </div>
    );
};

export default JoinGamePage;
