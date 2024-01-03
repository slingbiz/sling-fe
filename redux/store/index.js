import {useMemo} from 'react';
import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
import {thunk} from 'redux-thunk';

import reducers from '../reducers';

let store;

function initStore(initialState) {
  return createStore(reducers, initialState, applyMiddleware(thunk));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  // let currentState = store.getState();
  // store.subscribe(() => {
  //   // keep track of the previous and current state to compare changesAppLayout/index.j
  //   // let previousState = currentState;
  //   // currentState = store.getState();
  //   // if the token changes set the value in localStorage and axios headers
  //   // if (previousState.auth.token !== currentState.auth.token) {
  //   //   const token = currentState.auth.token;
  //   //   setAuthToken(token);
  //   // }
  // });
  return _store;
};

// export const wrapper = createWrapper(initializeStore, {debug: true});

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
