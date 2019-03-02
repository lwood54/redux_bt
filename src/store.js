import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
        rootReducer,
        initialState,
        compose(
                applyMiddleware(...middleware),
                // using compose to combine multiple middlewares.
                // the window.__REDUX, etc. allows the use of Redux DevTools in chrome extension
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
);

export default store;
