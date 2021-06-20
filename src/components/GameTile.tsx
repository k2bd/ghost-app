import { Button, Intent } from '@blueprintjs/core';
import React from 'react';
import './GameTile.css';

type Props = {
    letter: string | null;
};

const GameTile: React.FC<Props> = ({ letter }: Props) => {
    return (
        <div className="tile" style={{ width: '30px', minWidth: '30px', maxWidth: '50px' }}>
            <div className="tile-content">
                <Button text={letter} intent={Intent.WARNING} />
            </div>
        </div>
    );
};

export default GameTile;
