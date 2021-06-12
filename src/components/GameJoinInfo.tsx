import { Button, Card, InputGroup, Intent } from '@blueprintjs/core';
import React, { useState } from 'react';

type Props = {
    joinGame: (roomCode: string, playerName: string) => void;
};

const GameJoinInfo: React.FC<Props> = ({ joinGame }: Props) => {
    const [roomCode, setRoomCode] = useState<string>('');
    const [playerName, setPlayerName] = useState<string>('');

    return (
        <Card elevation={2}>
            <h5>Join Game</h5>
            <InputGroup onChange={(event) => setRoomCode(event.target.value)} placeholder="Room Code..." />
            <InputGroup onChange={(event) => setPlayerName(event.target.value)} placeholder="Player Name..." />
            <Button text="Join" intent={Intent.PRIMARY} onClick={() => joinGame(roomCode, playerName)} />
        </Card>
    );
};

export default GameJoinInfo;
