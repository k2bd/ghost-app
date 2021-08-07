import { useSelector } from 'react-redux';
import { GamesSliceState } from '../redux/games/reducers';
import { RootState } from '../redux/store';

const useGame = (): GamesSliceState => useSelector((state: RootState) => state.game);

export default useGame;
