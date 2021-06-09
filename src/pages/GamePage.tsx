import React from 'react';
import { useParams } from 'react-router-dom';
import Donate from '../components/Donate';

const GamePage: React.FC = () => {
    const { roomCode } = useParams<{ roomCode: string }>();
    return (
        <div>
            <p>Room code: {roomCode}</p>
            <Donate />
        </div>
    );
};

export default GamePage;
