import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import GameBoard from '../components/GameBoard';
import GhostNavbar from '../components/GhostNavbar';
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
            <GhostNavbar roomCode={roomCode} />
            <GameBoard />
        </div>
    );
};

export default GamePage;
