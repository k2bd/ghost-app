import { Classes, Dialog } from '@blueprintjs/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ChallengeIssuedDialog: React.FC = () => {
    const player = useSelector((state: RootState) => state.player.localPlayer);
    const { game } = useSelector((state: RootState) => state.game);

    if (!game || !player || game.moves.length == 0) {
        return <></>;
    }

    const enabled = (game.challenge &&
        game.challenge.move.playerName !== player.name &&
        game.challenge.state === 'AWAITING_RESPONSE') as boolean;

    return (
        <Dialog isOpen={enabled} title="Challenge in Progress!" isCloseButtonShown={false} icon="flag">
            <div className={Classes.DIALOG_BODY}>
                <h3>{game.challenge?.move.playerName} has been challenged!</h3>

                <p>
                    {game?.challenge?.challengerName} has challenged that the most recent move cannot make valid words.
                </p>

                <p>
                    {game.challenge?.move.playerName} is currently entering what they believe to be valid words in the
                    row and column of their most recent move. Once {"they've"} done this, it will be put to a vote.
                </p>
                <p>
                    Remember the words should be at least 4 letters long and must start at the beginning of the row or
                    column.
                </p>
            </div>
        </Dialog>
    );
};

export default ChallengeIssuedDialog;
