import { Intent, Tag } from '@blueprintjs/core';
import React from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type PlayerProps = {
    player: Player;
    turnPlayer: boolean;
    loser: boolean;
};

const PlayerRow: React.FC<PlayerProps> = ({ player, turnPlayer, loser }: PlayerProps) => {
    const playerName = turnPlayer ? <b>{player.name}</b> : loser ? <s>{player.name}</s> : player.name;
    const intent = turnPlayer ? Intent.PRIMARY : Intent.NONE;
    return (
        <Tag
            fill={true}
            minimal={loser}
            intent={intent}
            large={true}
            icon={<Avatar size="20" round={true} src={player.imageUrl} />}
        >
            {playerName}
        </Tag>
    );
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
        <div>
            <h4>Players</h4>
            {players}
            {losers}
        </div>
    );
};

export default PlayersList;
