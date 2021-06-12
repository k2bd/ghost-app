import { Alignment, Navbar } from '@blueprintjs/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Donate from '../components/Donate';
import HowToPlay from '../components/HowToPlay';
import { RootState } from '../redux/store';

import './GamePage.css';

const GamePage: React.FC = () => {
    const { roomCode } = useParams<{ roomCode: string }>();
    const player = useSelector((state: RootState) => state.player.localPlayer);

    const history = useHistory();

    if (player === null) {
        // TODO: temporary solution until we store player state locally to
        // defend against refreshes
        history.push('/');
    }

    return (
        <div className="game-page">
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>2D Ghost</Navbar.Heading>
                    <Navbar.Divider />
                    <Navbar.Heading>{roomCode}</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <HowToPlay />
                    <Navbar.Divider />
                    <Donate />
                </Navbar.Group>
            </Navbar>
            <p>Room code: {roomCode}</p>
            <p>Player Name: {player?.name}</p>
        </div>
    );
};

export default GamePage;
