import { Alignment, Navbar } from '@blueprintjs/core';
import React from 'react';
import Donate from './Donate';
import HowToPlay from './HowToPlay';

type Props = {
    roomCode?: string;
};

const GhostNavbar: React.FC<Props> = ({ roomCode }: Props) => {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>2D Ghost</Navbar.Heading>
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
