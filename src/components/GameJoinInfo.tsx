import { Button, Card, InputGroup, Intent } from '@blueprintjs/core';
import React, { useState } from 'react';

type Props = {
    joinGame: (roomCode: string) => void;
};

const GameJoinInfo: React.FC<Props> = ({ joinGame }: Props) => {
    const [roomCode, setRoomCode] = useState<string>('');

    return (
        <div>
            <Card elevation={2}>
                <h2>Create or Join a Game</h2>
                <InputGroup
                    maxLength={20}
                    onChange={(event) => setRoomCode(event.target.value)}
                    placeholder="Room Code..."
                />
                <Button
                    text="Join"
                    intent={Intent.PRIMARY}
                    onClick={() => joinGame(roomCode)}
                    disabled={roomCode.length < 4}
                />
            </Card>
        </div>
    );
};

export default GameJoinInfo;
