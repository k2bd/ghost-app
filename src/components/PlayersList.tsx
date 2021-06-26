import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type PlayerProps = {
    player: Player;
    turnPlayer: boolean;
};

const PlayerRow: React.FC<PlayerProps> = ({ player, turnPlayer }: PlayerProps) => {
    const playerName = turnPlayer ? <b>{player.name}</b> : player.name;
    return <p>{playerName}</p>;
};

const PlayersList: React.FC = () => {
    const { game } = useSelector((state: RootState) => state.game);

    const players = game
        ? game.players.map((player, index) => (
              <PlayerRow player={player} turnPlayer={player.name == game.turnPlayerName} key={index} />
          ))
        : [];

    return (
        <>
            <h4>Players</h4>
            {players}
        </>
    );
};

export default PlayersList;
