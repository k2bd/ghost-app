type GuestLogin = {
    name: string;
};

type Player = {
    name: string;
    imageUrl: string;
};

type Position = {
    x: number;
    y: number;
};

type Move = {
    playerName: string;
    position: Position;
    letter: string;
};

type ChallengeType = 'COMPLETE_WORD' | 'NO_VALID_WORDS';

type ChallengeState = 'AWAITING_RESPONSE' | 'VOTING' | 'SUCCESS' | 'FAILED';

type ChallengeResponse = {
    rowWord: string;
    colWord: string;
};

type ChallengeVote = {
    voterName: string;
    proChallenge: boolean;
};

type NewChallenge = {
    challengerName: string;
    move: Move;
    type: ChallengeType;
};

type Challenge = NewChallenge & {
    state: ChallengeState;
    response: ChallengeResponse | null;
    votes: ChallengeVote[];
};

type Game = {
    roomCode: string;
    started: boolean;
    winner: Player | null;
    players: Player[];
    losers: Player[];
    turnPlayerName: string;
    moves: Move[];
    challenge: Challenge | null;
};

type GameLoadStatus = 'idle' | 'loading' | 'gameDoesNotExist' | 'creatingGame' | 'error' | 'joining';
type LoginStatus = 'notLoggedIn' | 'loggingIn' | 'loggedIn';
