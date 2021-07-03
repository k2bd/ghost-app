import { Alignment, Button, Navbar } from '@blueprintjs/core';
import React from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../redux/store';
import Donate from './Donate';
import HowToPlay from './HowToPlay';
import LoginDialog from './LoginDialog';

type Props = {
    roomCode?: string;
};

const GhostNavbar: React.FC<Props> = ({ roomCode }: Props) => {
    const history = useHistory();
    const player = useSelector((state: RootState) => state.player.localPlayer);

    const playerComponent = player ? (
        // TODO create player card component
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar name={player.name} src={player.imageUrl} size="30" round={true} />
            <p>{player.name}</p>
        </div>
    ) : (
        <></>
    );

    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>
                    <Button
                        text="2D Ghost"
                        onClick={() => {
                            history.push('/');
                        }}
                        minimal={true}
                    />
                </Navbar.Heading>
                {playerComponent}
                <LoginDialog enabled={player === null} />
                <Navbar.Divider />
                <Navbar.Heading>{roomCode}</Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <HowToPlay />
                <Navbar.Divider />
                <Donate />
            </Navbar.Group>
        </Navbar>
    );
};

export default GhostNavbar;
