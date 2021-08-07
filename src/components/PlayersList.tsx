import { Button, Collapse, Icon, Intent, Tag } from '@blueprintjs/core';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type PlayerProps = {
    player: Player;
    turnPlayer: boolean;
    loser: boolean;
    winner: boolean;
};

const PlayerRow: React.FC<PlayerProps> = ({ player, turnPlayer, loser, winner }: PlayerProps) => {
    const playerName = turnPlayer ? <b>{player.name}</b> : loser ? <s>{player.name}</s> : player.name;
    const intent = turnPlayer ? Intent.PRIMARY : Intent.NONE;
    const icon = winner ? <Icon icon="crown" /> : null;
    return (
        <Tag
            fill={true}
            minimal={loser}
            intent={intent}
            large={true}
            icon={<Avatar size="20" round={true} src={player.imageUrl} />}
        >
            {icon}
            {playerName}
            {icon}
        </Tag>
    );
};

const PlayersList: React.FC = () => {
    const { game } = useSelector((state: RootState) => state.game);
    const [expanded, setExpanded] = useState<boolean>(!isMobile);

    const players = game
        ? game.players.map((player, index) => {
              const winner = game.winner !== null && game.winner.name === player.name;
              return (
                  <PlayerRow
                      player={player}
                      turnPlayer={player.name == game.turnPlayerName}
                      loser={false}
                      key={index}
                      winner={winner}
                  />
              );
          })
        : [];

    const losers = game
        ? game.losers.map((player, index) => (
              <PlayerRow player={player} turnPlayer={false} loser={true} key={index} winner={false} />
          ))
        : [];

    return (
        <div>
            <Button
                fill={true}
                outlined={true}
                text={<b>Players</b>}
                rightIcon={expanded ? 'chevron-down' : 'chevron-left'}
                onClick={() => setExpanded(!expanded)}
            />
            <Collapse isOpen={expanded}>
                {players}
                {losers}
            </Collapse>
        </div>
    );
};

export default PlayersList;
