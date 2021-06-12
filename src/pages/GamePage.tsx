import { Alignment, Navbar } from '@blueprintjs/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Donate from '../components/Donate';
import HowToPlay from '../components/HowToPlay';
import { createGame, fetchGameByRoomCode, joinGame } from '../redux/games/actions';
import { RootState } from '../redux/store';

import './GamePage.css';

const GamePage: React.FC = () => {
    const { roomCode } = useParams<{ roomCode: string }>();
    const player = useSelector((state: RootState) => state.player.localPlayer);
    const { game, gameLoadStatus, joined } = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    const history = useHistory();

    if (player === null) {
        // TODO: temporary solution until we store player state locally to
        // defend against refreshes
        history.push('/');
        return <div></div>;
    }

    if (game === null) {
        switch (gameLoadStatus) {
            case 'idle':
                dispatch(fetchGameByRoomCode(roomCode));
                break;
            case 'gameDoesNotExist':
                dispatch(createGame(roomCode));
                break;
        }
    } else {
        if (!joined) {
            dispatch(joinGame({ roomCode, player }));
        }
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
