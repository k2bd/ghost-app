import React from 'react';
import { useParams } from 'react-router-dom';

const GamePage: React.FC = () => {
    const { roomCode } = useParams<{ roomCode: string }>();
    return <p>Room code: {roomCode}</p>;
};

export default GamePage;
