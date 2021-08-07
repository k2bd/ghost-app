import React from 'react';
import { useDispatch } from 'react-redux';
import useInterval from 'react-useinterval';
import ChallengeButton from '../components/ChallengeButton';
import ChallengeResponseDialog from '../components/ChallengeResponseDialog';
import ChallengeVoteDialog from '../components/ChallengeVoteDialog';
import GameBoard from '../components/GameBoard';
import GhostNavbar from '../components/GhostNavbar';
import PlayersList from '../components/PlayersList';
import PreGameCard from '../components/PreGameCard';
import useGame from '../hooks/useGame';
import usePlayer from '../hooks/usePlayer';
import useRoomCode from '../hooks/useRoomCode';
import { createGame, fetchGameByRoomCode, joinGame, reloadGame } from '../redux/games/actions';

import './GamePage.css';

const POLLING_INTERVAL_MS = 1000;

const GamePage: React.FC = () => {
    const roomCode = useRoomCode();
    const { game, gameLoadStatus, joined, joinedRoomCode } = useGame();
    const player = usePlayer();
    const dispatch = useDispatch();

    // Poll game state
    useInterval(() => dispatch(fetchGameByRoomCode(roomCode)), POLLING_INTERVAL_MS);

    if (joinedRoomCode && joinedRoomCode !== roomCode) {
        dispatch(reloadGame());
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
    } else if (!joined && !game.started) {
        if (player !== null && !joined && game && !game.started) {
            dispatch(joinGame({ roomCode, player }));
        }
    }

    const mainContent = game?.started ? <GameBoard /> : <PreGameCard />;

    return (
        <div>
            <GhostNavbar roomCode={roomCode} />
            <div className="with-sidebar">
                <div className="sidebar">
                    <PlayersList />
                    <ChallengeButton />
                </div>
                <div className="not-sidebar">
                    <div className="game-page">
                        <div className="vertical-centering">{mainContent}</div>
                    </div>
                </div>
            </div>
            <ChallengeResponseDialog />
            <ChallengeVoteDialog />
        </div>
    );
};

export default GamePage;
