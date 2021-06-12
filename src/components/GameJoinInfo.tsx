import { Alert, Button, Card, InputGroup, Intent } from '@blueprintjs/core';
import React, { useState } from 'react';

type Props = {
    joinGame: (roomCode: string, playerName: string) => void;
};

const GameJoinInfo: React.FC<Props> = ({ joinGame }: Props) => {
    const [roomCode, setRoomCode] = useState<string>('');
    const [playerName, setPlayerName] = useState<string>('');

    const [nonemptyAlertIsOpen, setNonemptyAlertIsOpen] = useState<boolean>(false);

    const ensureNonemptyStrings = (
        roomCode: string,
        playerName: string,
        joinGame: (roomCode: string, playerName: string) => void,
    ) => {
        if (roomCode.length == 0 || playerName.length == 0) {
            setNonemptyAlertIsOpen(true);
        } else {
            joinGame(roomCode, playerName);
        }
    };

    return (
        <div>
            <Card elevation={2}>
                <h2>Join a Game</h2>
                <InputGroup onChange={(event) => setRoomCode(event.target.value)} placeholder="Room Code..." />
                <InputGroup onChange={(event) => setPlayerName(event.target.value)} placeholder="Player Name..." />
                <Button
                    text="Join"
                    intent={Intent.PRIMARY}
                    onClick={() => ensureNonemptyStrings(roomCode, playerName, joinGame)}
                />
            </Card>
            <Alert
                isOpen={nonemptyAlertIsOpen}
                onClose={() => setNonemptyAlertIsOpen(false)}
                canEscapeKeyCancel={true}
                canOutsideClickCancel={true}
                confirmButtonText="Okay"
                intent={Intent.WARNING}
            >
                <p>You must enter a room code and player name.</p>
            </Alert>
        </div>
    );
};

export default GameJoinInfo;
