import { Button, Card, Elevation, Tag } from '@blueprintjs/core';
import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import GameJoinInfo from '../components/GameJoinInfo';
import GhostNavbar from '../components/GhostNavbar';
import { logOut } from '../redux/player/actions';
import { RootState } from '../redux/store';
import './JoinGamePage.css';

const JoinGamePage: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const player = useSelector((state: RootState) => state.player.localPlayer);

    const joinGame = (roomCode: string) => {
        history.push(`/room/${roomCode}`);
    };

    const doLogout = () => {
        dispatch(logOut());
    };

    return (
        <div className="game-join-page">
            <GhostNavbar />
            <div className="vertical-centering">
                <GameJoinInfo joinGame={(roomCode) => joinGame(roomCode)} />
                <Card elevation={Elevation.TWO} style={{ marginTop: '2em' }}>
                    <Tag
                        fill={true}
                        minimal={true}
                        large={true}
                        icon={<Avatar size="20" round={true} src={player?.imageUrl} />}
                        style={{ marginBottom: '1em' }}
                    >
                        {player?.name}
                    </Tag>
                    <Button text="Logout" onClick={() => doLogout()} icon="log-out" />
                </Card>
            </div>
        </div>
    );
};

export default JoinGamePage;
