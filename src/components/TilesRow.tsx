import React from 'react';
import GameTile from './GameTile';

export const rowEntries = (moves: Move[], rowIndex: number): (string | null)[] => {
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

    return rowWithNulls;
};

export const colEntries = (moves: Move[], colIndex: number): (string | null)[] => {
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

type Props = {
    entries: (string | null)[];
};

const TilesRow: React.FC<Props> = ({ entries }: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {entries.map((value, index) => (
                <GameTile
                    letter={value}
                    position={{ x: index, y: 0 }}
                    isPlayable={false}
                    isMostRecentlyPlayed={false}
                    key={index}
                />
            ))}
        </div>
    );
};

export default TilesRow;
