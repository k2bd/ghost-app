import { Button, Dialog, InputGroup } from '@blueprintjs/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeChallengeResponse } from '../redux/games/actions';
import { RootState } from '../redux/store';
import GameTile from './GameTile';

const rowEntries = (moves: Move[], rowIndex: number): (string | null)[] => {
    const rowValues = moves.filter((move) => move.position.y === rowIndex).sort((a, b) => a.position.x - b.position.x);

    const rowIndexes = rowValues.map((move) => move.position.x);

    const rowWidth = rowValues[rowValues.length - 1].position.x + 1;

    const rowWithNulls = Array.from(Array(rowWidth).keys()).map((_, index) => {
        if (rowIndexes.includes(index)) {
            return rowValues[rowIndexes.indexOf(index)].letter;
        } else {
            return null;
        }
    });

    console.log(rowWithNulls);

    return rowWithNulls;
};

const colEntries = (moves: Move[], colIndex: number): (string | null)[] => {
    const colValues = moves.filter((move) => move.position.x === colIndex).sort((a, b) => a.position.y - b.position.y);

    const colIndexes = colValues.map((move) => move.position.y);

    const colWidth = colValues[colValues.length - 1].position.y + 1;

    const colWithNulls = Array.from(Array(colWidth).keys()).map((_, index) => {
        if (colIndexes.includes(index)) {
            return colValues[colIndexes.indexOf(index)].letter;
        } else {
            return null;
        }
    });

    return colWithNulls;
};

const ChallengeResponseDialog: React.FC = () => {
    const player = useSelector((state: RootState) => state.player.localPlayer);
    const { game } = useSelector((state: RootState) => state.game);

    const [rowWord, setRowWord] = useState<string>('');
    const [colWord, setColWord] = useState<string>('');

    const dispatch = useDispatch();

    if (!game || !player || game.moves.length == 0) {
        return <></>;
    }

    const enabled = (game.challenge &&
        game.challenge.move.playerName === player.name &&
        game.challenge.state === 'AWAITING_RESPONSE') as boolean;

    const mostRecentMove = game.moves[game.moves.length - 1];
    const row = rowEntries(game.moves, mostRecentMove.position.y);
    const col = colEntries(game.moves, mostRecentMove.position.x);

    const submitResponse = () => {
        dispatch(makeChallengeResponse({ roomCode: game.roomCode, challengeResponse: { rowWord, colWord } }));
    };

    return (
        <Dialog isOpen={enabled} title="Challenge Response" isCloseButtonShown={false} icon="flag">
            <h3>You have been challenged!</h3>

            <p>{game?.challenge?.challengerName} has challenged that your most recent move cannot make valid words.</p>

            <p>
                Please provide words that can be made from the row and column of your last move, containing the placed
                letters and adding as many letters to the end as you want.
            </p>
            <p>Remember the words should be at least 4 letters long.</p>

            <b>Row:</b>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {row.map((value, index) => (
                    <GameTile
                        letter={value}
                        position={{ x: index, y: 0 }}
                        isPlayable={false}
                        isMostRecentlyPlayed={false}
                        key={index}
                    />
                ))}
            </div>
            <InputGroup
                placeholder={row.map((value) => value || ' ') + '...'}
                onChange={(event) => setRowWord(event.target.value)}
                value={rowWord}
            />

            <b>Column:</b>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {col.map((value, index) => (
                    <GameTile
                        letter={value}
                        position={{ x: index, y: 0 }}
                        isPlayable={false}
                        isMostRecentlyPlayed={false}
                        key={index}
                    />
                ))}
            </div>
            <InputGroup
                placeholder={col.map((value) => value || ' ') + '...'}
                onChange={(event) => setColWord(event.target.value)}
                value={colWord}
            />

            <Button text="Submit" onClick={() => submitResponse()} />
        </Dialog>
    );
};

export default ChallengeResponseDialog;
