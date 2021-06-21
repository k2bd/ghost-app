import { Button, InputGroup, Intent } from '@blueprintjs/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeMove } from '../redux/games/actions';
import { RootState } from '../redux/store';
import './GameTile.css';

type Props = {
    letter: string | null;
    position: Position;
    isPlayable: boolean;
    isMostRecentlyPlayed: boolean;
};

const GameTile: React.FC<Props> = ({ letter, position, isPlayable, isMostRecentlyPlayed }: Props) => {
    const background = isPlayable ? '#98f795' : isMostRecentlyPlayed ? '#fff759' : '#98f795';

    const player = useSelector((state: RootState) => state.player.localPlayer);
    const { game } = useSelector((state: RootState) => state.game);

    const [displayLetter, setDisplayLetter] = useState<string>(letter || '');
    const dispatch = useDispatch();

    const submitMove = (letter: string) => {
        const upperLetter = letter.toUpperCase();

        setDisplayLetter(upperLetter);
        if (game !== null && player !== null) {
            dispatch(
                makeMove({
                    roomCode: game.roomCode,
                    move: { playerName: player.name, position: position, letter: upperLetter },
                }),
            );
        }
    };

    const inputDisabled = player?.name !== game?.turnPlayerName || !isPlayable;

    const content = (
        <input
            type="text"
            disabled={inputDisabled}
            value={displayLetter}
            size={1}
            onChange={(event) => submitMove(event.target.value)}
        />
    );

    return (
        <div className="tile" style={{ background: background }}>
            <div className="tile-content">{content}</div>
        </div>
    );
};

export default GameTile;
