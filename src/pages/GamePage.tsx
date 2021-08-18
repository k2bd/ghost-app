import { Alert, Spinner, SpinnerSize } from '@blueprintjs/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useInterval from 'react-useinterval';
import ChallengeButton from '../components/ChallengeButton';
import ChallengeIssuedDialog from '../components/ChallengeIssuedDialog';
import ChallengeResponseDialog from '../components/ChallengeResponseDialog';
import ChallengeVoteDialog from '../components/ChallengeVoteDialog';
import GameBoard from '../components/GameBoard';
import GhostNavbar from '../components/GhostNavbar';
import PlayersList from '../components/PlayersList';
import PreGameCard from '../components/PreGameCard';
import useGame from '../hooks/useGame';
import usePlayer from '../hooks/usePlayer';
import useRoomCode from '../hooks/useRoomCode';
import { createGame, fetchGameByRoomCode, joinGame, reloadGame, resetPolling } from '../redux/games/actions';

import './GamePage.css';

const POLLING_INTERVAL_MS = 1000;
const POLLING_TIMEOUT_MS = 5 * 60 * 1000;

const GamePage: React.FC = () => {
    const roomCode = useRoomCode();
    const { game, gameLoadStatus, joined, joinedRoomCode, latestAction } = useGame();
    const player = usePlayer();
    const dispatch = useDispatch();

    // Poll game state - TODO extract into a polling alert hook
    const [polling, setPolling] = useState(true);
    useInterval(() => {
        if (polling) dispatch(fetchGameByRoomCode(roomCode));
    }, POLLING_INTERVAL_MS);
    useEffect(() => {
        setPolling(moment().diff(latestAction) < POLLING_TIMEOUT_MS);
    }, [game, latestAction]);
    const resetPollingAlert = (
        <Alert
            isOpen={!polling}
            canOutsideClickCancel
            onClose={() => {
                dispatch(resetPolling());
            }}
            confirmButtonText="I'm still here!"
        >
            <p>
                {"Are you still there? Polling has been paused because there hasn't been activity for "}
                {moment.duration(POLLING_TIMEOUT_MS, 'milliseconds').humanize()}.
            </p>
        </Alert>
    );

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
        if (player !== null && !joined && game && !game.started && gameLoadStatus !== 'joining') {
            dispatch(joinGame({ roomCode, player }));
        }
    }

    const spinner = (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                msTransform: 'translateX(-50%) translateY(-50%)',
            }}
        >
            <Spinner size={SpinnerSize.LARGE} />;
        </div>
    );
    const inGame =
        [...(game?.players || []), ...(game?.losers || [])].find((p) => p.name === player?.name) !== undefined;

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
                        <div className="vertical-centering">{inGame ? mainContent : spinner}</div>
                    </div>
                </div>
            </div>
            {resetPollingAlert}
            <ChallengeResponseDialog />
            <ChallengeIssuedDialog />
            <ChallengeVoteDialog />
        </div>
    );
};

export default GamePage;
