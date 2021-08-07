import { useParams } from 'react-router-dom';

const useRoomCode = (): string => useParams<{ roomCode: string }>().roomCode;

export default useRoomCode;
