import React from 'react';
import { Button, Classes, Dialog, FormGroup, Spinner, SpinnerSize, Tag } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeChallengeVote } from '../redux/games/actions';
import { RootState } from '../redux/store';
import TilesRow, { colEntries, rowEntries } from './TilesRow';

const ChallengeVoteDialog: React.FC = () => {
    const player = useSelector((state: RootState) => state.player.localPlayer);
    const { game } = useSelector((state: RootState) => state.game);

    const dispatch = useDispatch();

    if (!game || !player || game.moves.length == 0 || !game.challenge) {
        return <></>;
    }

    const challengedRow = rowEntries(game.moves, game.challenge.move.position.y);
    const challengedCol = colEntries(game.moves, game.challenge.move.position.x);

    const enabled = (game.challenge && game.challenge.state === 'VOTING') as boolean;

    const submitVote = (proChallenge: boolean) => {
        dispatch(makeChallengeVote({ roomCode: game.roomCode, vote: { voterName: player.name, proChallenge } }));
    };
    const submitted = () => game.challenge?.votes.map((vote) => vote.voterName).includes(player.name);

    let messageBody;
    switch (game.challenge.type) {
        case 'NO_VALID_WORDS': {
            const responseRow = game.challenge.response?.rowWord.toUpperCase() || '';
            const responseCol = game.challenge.response?.colWord.toUpperCase() || '';
            messageBody = (
                <div>
                    <p>
                        {game.challenge.challengerName}
                        {" believes valid words can't be made from the most recent move."}
                    </p>

                    <p>{game.challenge.move.playerName} has provided the following words in response.</p>

                    <FormGroup label="Row:" inline={true}>
                        <FormGroup label="Tiles:" inline={false}>
                            <TilesRow entries={challengedRow} />
                        </FormGroup>
                        <FormGroup label="Response:" inline={false}>
                            <TilesRow entries={responseRow.split('')} />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup label="Col:" inline={true}>
                        <FormGroup label="Tiles:" inline={false}>
                            <TilesRow entries={challengedCol} />
                        </FormGroup>
                        <FormGroup label="Response:" inline={false}>
                            <TilesRow entries={responseCol.split('')} />
                        </FormGroup>
                    </FormGroup>
                </div>
            );
            break;
        }
        case 'COMPLETE_WORD': {
            messageBody = (
                <div>
                    <p>{game.challenge.challengerName} believes the most recent move completed a word.</p>

                    <FormGroup label="Row:" inline={true}>
                        <p>Tiles:</p>
                        <TilesRow entries={challengedRow} />
                    </FormGroup>
                    <FormGroup label="Col:" inline={true}>
                        <p>Tiles:</p>
                        <TilesRow entries={challengedCol} />
                    </FormGroup>
                </div>
            );
            break;
        }
    }

    const stillVoting = (
        <div style={{ paddingTop: '3px' }}>
            <Tag intent="primary" minimal icon={<Spinner size={SpinnerSize.SMALL} />}>
                Players are still voting...
            </Tag>
        </div>
    );

    return (
        <Dialog isOpen={enabled} title="Challenge!" isCloseButtonShown={false} icon="flag">
            <div className={Classes.DIALOG_BODY}>
                <h3>
                    {game.challenge.challengerName} has challenged {game.challenge.move.playerName}!
                </h3>
                {messageBody}
                <p>Is the challenge successful?</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button
                        text={`Yes, kick ${game.challenge.move.playerName}`}
                        onClick={() => submitVote(true)}
                        disabled={submitted()}
                    />
                    <Button
                        text={`No, kick ${game.challenge.challengerName}`}
                        onClick={() => submitVote(false)}
                        disabled={submitted()}
                    />
                </div>
                {submitted() ? stillVoting : null}
            </div>
        </Dialog>
    );
};

export default ChallengeVoteDialog;
