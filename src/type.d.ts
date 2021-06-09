type Player = {
    name: string;
};

type Move = {
    playerName: string;
    positionX: number;
    positionY: number;
    letter: string;
};

type Game = {
    roomCode: string;
    players: Player[];
    turnPlayerName: string;
    moves: Move[];
};
