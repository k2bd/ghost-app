type Player = {
    name: string;
};

type Position = {
    x: number;
    y: number;
}

type Move = {
    playerName: string;
    position: Position;
    letter: string;
};

type Game = {
    roomCode: string;
    players: Player[];
    turnPlayerName: string;
    moves: Move[];
};
