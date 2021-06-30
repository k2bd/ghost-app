import { AnchorButton, Button, Intent } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeChallenge } from '../redux/games/actions';
import { RootState } from '../redux/store';

const ChallengeButton: React.FC = () => {
    const player = useSelector((state: RootState) => state.player.localPlayer);
    const { game } = useSelector((state: RootState) => state.game);

    const dispatch = useDispatch();

    const enabled = game && player?.name === game.turnPlayerName && game.moves.length > 0;

    const createChallenge = (type: ChallengeType) => {
        if (game === null || player === null) {
            return;
        }
        dispatch(
            makeChallenge({
                roomCode: game.roomCode,
                challenge: {
                    challengerName: player.name,
                    move: game.moves[game.moves.length - 1],
                    type: type,
                },
            }),
        );
    };

    const challengeButton = <AnchorButton icon="flag" text="Challenge" disabled={!enabled} intent={Intent.DANGER} />;
    const popoverContent = (
        <div>
            <Button
                text="No valid words"
                disabled={!enabled}
                intent={Intent.PRIMARY}
                onClick={() => createChallenge('NO_VALID_WORDS')}
            />
            <Button
                text="Word already complete"
                disabled={!enabled}
                intent={Intent.PRIMARY}
                onClick={() => createChallenge('COMPLETE_WORD')}
            />
        </div>
    );
    return (
        <Popover2 content={popoverContent} disabled={!enabled} placement="bottom">
            {challengeButton}
        </Popover2>
    );
};

export default ChallengeButton;
