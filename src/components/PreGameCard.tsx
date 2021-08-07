import React from 'react';
import { Button, Card, H5, Intent } from '@blueprintjs/core';
import useGame from '../hooks/useGame';
import useRoomCode from '../hooks/useRoomCode';
import { useDispatch } from 'react-redux';
import { startGame } from '../redux/games/actions';

const PreGameCard: React.FC = () => {
    const roomCode = useRoomCode();
    const { game } = useGame();
    const dispatch = useDispatch();

    const handleStartGame = () => {
        if (game && !game.started) {
            dispatch(startGame(roomCode));
        }
    };

    return (
        <Card elevation={2}>
            <H5>Welcome to the game!</H5>
            <p>The game has not started yet. Start the game when everyone has joined.</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button text="Everyone's in!" intent={Intent.PRIMARY} onClick={handleStartGame} />
            </div>
        </Card>
    );
};

export default PreGameCard;
