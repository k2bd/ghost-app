import React from 'react';
import { Button, Card, H5, Intent } from '@blueprintjs/core';
import useGame from '../hooks/useGame';
import usePlayer from '../hooks/usePlayer';
import useRoomCode from '../hooks/useRoomCode';
import { useDispatch } from 'react-redux';
import { joinGame, startGame } from '../redux/games/actions';

const PreGameCard: React.FC = () => {
    const roomCode = useRoomCode();
    const player = usePlayer();
    const { game, joined } = useGame();
    const dispatch = useDispatch();

    const handleJoinGame = () => {
        if (player !== null && !joined && game && !game.started) {
            dispatch(joinGame({ roomCode, player }));
        }
    };

    const handleStartGame = () => {
        if (game && !game.started) {
            dispatch(startGame(roomCode));
        }
    };

    return (
        <Card elevation={2}>
            <H5>Welcome to the game!</H5>
            <p>The game has not started yet. </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button text="Join" disabled={joined} onClick={handleJoinGame} />
                <Button text="Start game" intent={Intent.PRIMARY} onClick={handleStartGame} />
            </div>
        </Card>
    );
};

export default PreGameCard;
