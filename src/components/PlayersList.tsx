import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type PlayerProps = {
    player: Player;
};

const PlayerRow: React.FC<PlayerProps> = ({ player }: PlayerProps) => {
    return <p>{player.name}</p>;
};

const PlayersList: React.FC = () => {
    const { game } = useSelector((state: RootState) => state.game);

    if (game === null) {
        return <></>;
    }

    const players = game?.players.map((player, index) => <PlayerRow player={player} key={index} />);

    return (
        <>
            <h4>Players</h4>
            {players}
        </>
    );
};

export default PlayersList;
