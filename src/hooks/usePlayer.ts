import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const usePlayer = () => useSelector((state: RootState) => state.player.localPlayer);

export default usePlayer;
