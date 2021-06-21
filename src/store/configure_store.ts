import { Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import root_reducer from './reducers/root_reducer';

export const store = configure_store();

function configure_store(): Store {
    const compose_enhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    // Build middleware
    const middleware = compose_enhancers(applyMiddleware(thunk));

    //Create store
    const store = createStore(root_reducer, {}, middleware);

    return store;
}