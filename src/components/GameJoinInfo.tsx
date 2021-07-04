import { Button, Card, InputGroup, Intent } from '@blueprintjs/core';
import React, { useState } from 'react';
import friendlyWords from 'friendly-words';

type Props = {
    joinGame: (roomCode: string) => void;
};

const GameJoinInfo: React.FC<Props> = ({ joinGame }: Props) => {
    const randomRoomPrefix: string =
        friendlyWords.predicates[Math.floor(Math.random() * friendlyWords.predicates.length)];
    const randomRoomSuffix: string = friendlyWords.objects[Math.floor(Math.random() * friendlyWords.objects.length)];
    const [roomCode, setRoomCode] = useState<string>(`${randomRoomPrefix}-${randomRoomSuffix}`);

    return (
        <div>
            <Card elevation={2}>
                <h2>Create or Join a Game</h2>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <InputGroup
                        maxLength={30}
                        onChange={(event) => setRoomCode(event.target.value)}
                        placeholder="Room Code..."
                        value={roomCode}
                    />
                    <Button
                        text="Join"
                        intent={Intent.PRIMARY}
                        onClick={() => joinGame(roomCode)}
                        disabled={roomCode.length < 4}
                    />
                </div>
            </Card>
        </div>
    );
};

export default GameJoinInfo;
