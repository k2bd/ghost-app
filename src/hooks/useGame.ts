import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useGame = () => useSelector((state: RootState) => state.game);

export default useGame;
