import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import GameTile from './GameTile';
import deepEqual from 'deep-equal';

const neighborCount = (tiles: (string | null)[][], { x, y }: Position): number =>
    tiles
        .slice(x - 1, x + 2)
        .map((row) =>
            row
                .slice(y - 1, y + 2)
                .map((tile) => (tile ? 1 : 0) as number)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        )
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const isPlayable = (tiles: (string | null)[][], { x, y }: Position): boolean => {
    if (tiles[x][y] !== null) {
        return false;
    } else if (x === 0 && y === 0) {
        return true;
    } else if (x == 0 && tiles[x][y - 1] !== null) {
        return true;
    } else if (y == 0 && tiles[x - 1][y] !== null) {
        return true;
    } else if (neighborCount(tiles, { x, y }) >= 3) {
        return true;
    } else {
        return false;
    }
};

/**
 * Get the size of the board to display
 */
const boardSize = (moves: Move[]): number => {
    const moveWidth = moves
        .map((move) => Math.max(move.position.x, move.position.y))
        .reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), 0);

    return moveWidth + 2;
};

const GameBoard: React.FC = () => {
    const { game } = useSelector((state: RootState) => state.game);

    const size = boardSize(game ? game.moves : []);
    const tiles: (string | null)[][] = Array.from(Array(size).keys()).map(() =>
        Array.from(Array(size).keys()).map(() => null),
    );
    if (game !== null) {
        game.moves.forEach((move) => (tiles[move.position.x][move.position.y] = move.letter));
    }

    const renderedTiles = tiles.map((row, x) => (
        <div style={{ flexDirection: 'row' }} key={x}>
            {row.map((tile, y) => (
                <GameTile
                    letter={tile}
                    position={{ x, y }}
                    isPlayable={isPlayable(tiles, { x, y })}
                    isMostRecentlyPlayed={deepEqual(game?.moves[game.moves.length - 1]?.position, { x, y })}
                    key={y}
                />
            ))}
        </div>
    ));

    return <div style={{ display: 'flex' }}>{renderedTiles}</div>;
};

export default GameBoard;
