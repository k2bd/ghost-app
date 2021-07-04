import { Alignment, Button, Navbar, Tag } from '@blueprintjs/core';
import React from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../redux/store';
import Donate from './Donate';
import HowToPlay from './HowToPlay';
import LoginDialog from './LoginDialog';
import useClipboard from 'react-use-clipboard';
import { isMobile } from 'react-device-detect';

type Props = {
    roomCode?: string;
};

const GhostNavbar: React.FC<Props> = ({ roomCode }: Props) => {
    const history = useHistory();
    const player = useSelector((state: RootState) => state.player.localPlayer);
    const [isCopied, setCopied] = useClipboard(window.location.href);

    const playerComponent =
        player && !isMobile ? (
            // TODO create player card component
            <Tag
                fill={true}
                minimal={true}
                large={true}
                icon={<Avatar size="20" round={true} src={player?.imageUrl} />}
            >
                {player?.name}
            </Tag>
        ) : (
            <></>
        );

    const roomCodeComponent =
        roomCode && !isMobile ? (
            <Button text={roomCode} rightIcon={isCopied ? 'tick' : 'clipboard'} onClick={() => setCopied()} />
        ) : (
            <></>
        );

    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>
                    <Button
                        text={isMobile ? '' : '2D Ghost'}
                        icon="home"
                        onClick={() => {
                            history.push('/');
                        }}
                        minimal={true}
                    />
                </Navbar.Heading>
                {playerComponent}
                <LoginDialog enabled={player === null} />
                <Navbar.Divider />
                <Navbar.Heading>{roomCodeComponent}</Navbar.Heading>
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
