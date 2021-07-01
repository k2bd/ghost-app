import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type PlayerProps = {
    player: Player;
    turnPlayer: boolean;
    loser: boolean;
};

const PlayerRow: React.FC<PlayerProps> = ({ player, turnPlayer, loser }: PlayerProps) => {
    const playerName = turnPlayer ? <b>{player.name}</b> : loser ? <s>{player.name}</s> : player.name;
    return <p>{playerName}</p>;
};

const PlayersList: React.FC = () => {
    const { game } = useSelector((state: RootState) => state.game);

    const players = game
        ? game.players.map((player, index) => (
              <PlayerRow player={player} turnPlayer={player.name == game.turnPlayerName} loser={false} key={index} />
          ))
        : [];

    const losers = game
        ? game.losers.map((player, index) => <PlayerRow player={player} turnPlayer={false} loser={true} key={index} />)
        : [];

    return (
        <>
            <h4>Players</h4>
            {players}
            {losers}
        </>
    );
};

export default PlayersList;
