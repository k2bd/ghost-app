import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import useInterval from 'react-useinterval';
import ChallengeButton from '../components/ChallengeButton';
import GameBoard from '../components/GameBoard';
import GhostNavbar from '../components/GhostNavbar';
import PlayersList from '../components/PlayersList';
import { createGame, fetchGameByRoomCode, joinGame } from '../redux/games/actions';
import { RootState } from '../redux/store';

import './GamePage.css';

const POLLING_INTERVAL_MS = 1000;

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

    // Poll game state, for now
    useInterval(() => dispatch(fetchGameByRoomCode(roomCode)), POLLING_INTERVAL_MS);

    return (
        <div>
            <GhostNavbar roomCode={roomCode} />
            <div className="with-sidebar">
                <div className="sidebar">
                    <PlayersList />
                </div>
                <div className="not-sidebar">
                    <div className="game-page">
                        <div className="vertical-centering">
                            <GameBoard />
                        </div>
                        <ChallengeButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
