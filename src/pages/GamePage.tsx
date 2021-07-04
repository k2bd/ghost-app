import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useInterval from 'react-useinterval';
import ChallengeButton from '../components/ChallengeButton';
import ChallengeResponseDialog from '../components/ChallengeResponseDialog';
import ChallengeVoteDialog from '../components/ChallengeVoteDialog';
import GameBoard from '../components/GameBoard';
import GhostNavbar from '../components/GhostNavbar';
import PlayersList from '../components/PlayersList';
import { createGame, fetchGameByRoomCode, joinGame, reloadGame } from '../redux/games/actions';
import { RootState } from '../redux/store';

import './GamePage.css';

const POLLING_INTERVAL_MS = 1000;

const GamePage: React.FC = () => {
    const { roomCode } = useParams<{ roomCode: string }>();
    const player = useSelector((state: RootState) => state.player.localPlayer);
    const { game, gameLoadStatus, joined, joinedRoomCode } = useSelector((state: RootState) => state.game);
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
    } else {
        if (player !== null && !joined) {
            dispatch(joinGame({ roomCode, player }));
        }
    }

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
                        <div className="vertical-centering">
                            <GameBoard />
                        </div>
                    </div>
                </div>
            </div>
            <ChallengeResponseDialog />
            <ChallengeVoteDialog />
        </div>
    );
};

export default GamePage;
