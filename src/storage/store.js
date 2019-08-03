import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import actions from './actions';
import languagesState from './initState';

const composeEnhancers = compose;

const middlewares = [thunkMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function rootReducer(state = languagesState, act) {
  switch (act.type) {
    case actions.updateLanguage: {
      const activeLanguage = state.contents[act.language];
      const contentsActive = state.contents[act.language];
      const lang = act.language;
      return { ...state, activeLanguage, contentsActive, lang };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(rootReducer, enhancer);

export default store;
