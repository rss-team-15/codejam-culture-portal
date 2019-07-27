import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import actions from './actions';
import languagesState from './initState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function rootReducer(state = languagesState, act) {
  switch (act.type) {
    case actions.updateLanguage: {
      const activeLanguage = state.contents[act.language];
      return { ...state, activeLanguage };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(rootReducer, enhancer);

export default store;
