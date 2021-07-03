import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['player'],
};
const pReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
export const persistor = persistStore(store);
