import { Alignment, Navbar } from '@blueprintjs/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Donate from '../components/Donate';
import GameJoinInfo from '../components/GameJoinInfo';
import HowToPlay from '../components/HowToPlay';
import { setPlayerName } from '../redux/player/actions';
import './JoinGamePage.css';

const JoinGamePage: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const joinGame = (roomCode: string, playerName: string) => {
        dispatch(setPlayerName(playerName));
        history.push(`/room/${roomCode}`);
    };

    return (
        <div className="game-join-page">
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>2D Ghost</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <HowToPlay />
                    <Navbar.Divider />
                    <Donate />
                </Navbar.Group>
            </Navbar>
            <div className="vertical-centering">
                <GameJoinInfo joinGame={(roomCode, playerName) => joinGame(roomCode, playerName)} />
            </div>
        </div>
    );
};

export default JoinGamePage;
