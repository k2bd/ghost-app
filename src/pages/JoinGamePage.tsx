import { Button } from '@blueprintjs/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import GameJoinInfo from '../components/GameJoinInfo';
import GhostNavbar from '../components/GhostNavbar';
import { logOut } from '../redux/player/actions';
import './JoinGamePage.css';

const JoinGamePage: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const joinGame = (roomCode: string) => {
        history.push(`/room/${roomCode}`);
    };

    const doLogout = () => {
        dispatch(logOut());
    };

    return (
        <div className="game-join-page">
            <GhostNavbar />
            <div className="vertical-centering">
                <GameJoinInfo joinGame={(roomCode) => joinGame(roomCode)} />
                <Button text="Logout" onClick={() => doLogout()} icon="log-out" />
            </div>
        </div>
    );
};

export default JoinGamePage;
