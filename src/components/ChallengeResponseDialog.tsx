import { Button, Classes, Dialog, FormGroup, InputGroup } from '@blueprintjs/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeChallengeResponse } from '../redux/games/actions';
import { RootState } from '../redux/store';
import TilesRow, { colEntries, rowEntries } from './TilesRow';

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
            <div className={Classes.DIALOG_BODY}>
                <h3>You have been challenged!</h3>

                <p>
                    {game?.challenge?.challengerName} has challenged that your most recent move cannot make valid words.
                </p>

                <p>
                    Please provide words that can be made from the row and column of your last move, containing the
                    placed letters and adding as many letters to the end as you want.
                </p>
                <p>Remember the words should be at least 4 letters long.</p>

                <FormGroup label="Row:" inline={true}>
                    <TilesRow entries={row} />
                    <InputGroup
                        placeholder={row.map((value) => value || '_').join('') + '...'}
                        onChange={(event) => setRowWord(event.target.value)}
                        value={rowWord}
                    />
                </FormGroup>

                <FormGroup label="Col:" inline={true}>
                    <TilesRow entries={col} />
                    <InputGroup
                        placeholder={col.map((value) => value || '_').join('') + '...'}
                        onChange={(event) => setColWord(event.target.value)}
                        value={colWord}
                    />
                </FormGroup>
            </div>
            <Button
                text="Submit"
                onClick={() => submitResponse()}
                disabled={rowWord.length === 0 || colWord.length === 0}
            />
        </Dialog>
    );
};

export default ChallengeResponseDialog;
