import { Alignment, Navbar } from '@blueprintjs/core';
import React from 'react';
import Donate from '../components/Donate';

const JoinGamePage: React.FC = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>2d Ghost</Navbar.Heading>
                    <Navbar.Divider />
                    <Donate />
                </Navbar.Group>
            </Navbar>
            <p>Welcome</p>
        </div>
    );
};

export default JoinGamePage;
