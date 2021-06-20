import React from 'react';
import GameTile from './GameTile';

//type Props = {};

const GameBoard: React.FC = () => {
    const tiles = [
        <div style={{ flexDirection: 'row' }} key={0}>
            <GameTile letter="L" />
            <GameTile letter="A" />
        </div>,
        <div style={{ flexDirection: 'row' }} key={1}>
            <GameTile letter="O" />
            <GameTile letter={null} />
        </div>,
    ];

    return (
        <div className="vertical-centering" style={{ display: 'flex', width: '80%', height: '80%' }}>
            {tiles}
        </div>
    );
};

export default GameBoard;
