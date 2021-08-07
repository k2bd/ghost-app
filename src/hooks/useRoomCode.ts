import { useParams } from 'react-router-dom';

const useRoomCode = () => useParams<{ roomCode: string }>().roomCode;

export default useRoomCode;
