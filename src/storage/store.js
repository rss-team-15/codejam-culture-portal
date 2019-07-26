import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import actions from './languages/actions';
import languagesState from './languages/initState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function rootReducer(state = languagesState, act) {
  switch (act.type) {
    case actions.getLanguage: {
      const works = state[act.language];
      return { ...state, works };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(rootReducer, enhancer);

export default store;
