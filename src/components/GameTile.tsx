import React from 'react';
import { useDispatch } from 'react-redux';
import useGame from '../hooks/useGame';
import usePlayer from '../hooks/usePlayer';
import { makeMove } from '../redux/games/actions';
import './GameTile.css';

type Props = {
    letter: string | null;
    position: Position;
    isPlayable: boolean;
    isMostRecentlyPlayed: boolean;
};

const GameTile: React.FC<Props> = ({ letter, position, isPlayable, isMostRecentlyPlayed }: Props) => {
    const background = isPlayable ? '#fff715' : isMostRecentlyPlayed ? '#40acde' : '#98f795';

    const player = usePlayer();
    const { game } = useGame();

    const dispatch = useDispatch();

    const submitMove = (letter: string) => {
        const upperLetter = letter.toUpperCase();
        if (!/[A-Z]/.test(upperLetter)) {
            return;
        }

        if (game !== null && player !== null) {
            dispatch(
                makeMove({
                    roomCode: game.roomCode,
                    move: { playerName: player.name, position: position, letter: upperLetter },
                }),
            );
        }
    };

    const inputDisabled = player?.name !== game?.turnPlayerName || !isPlayable || game?.winner !== null;

    const content = inputDisabled ? (
        <div className="tile-text">{letter}</div>
    ) : (
        <input
            type="text"
            className="tile-input"
            value={letter || ''}
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
