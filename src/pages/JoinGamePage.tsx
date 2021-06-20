import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import GameJoinInfo from '../components/GameJoinInfo';
import GhostNavbar from '../components/GhostNavbar';
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
            <GhostNavbar />
            <div className="vertical-centering">
                <GameJoinInfo joinGame={(roomCode, playerName) => joinGame(roomCode, playerName)} />
            </div>
        </div>
    );
};

export default JoinGamePage;
