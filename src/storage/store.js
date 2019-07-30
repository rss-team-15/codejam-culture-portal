import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import actions from './actions';
import languagesState from './initState';

import { poetsListReducer, poetsListActions } from './poetsList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function rootReducer(state = languagesState, act) {
  switch (act.type) {
    case actions.updateLanguage: {
      const activeLanguage = state.contents[act.language];
      return { ...state, activeLanguage };
    }
    case poetsListActions.updatePoetsList: {
      const activePoets = state.contents.english.poetsList.filter(poet =>
        poet.poetInfo.name.includes(act.query)
      );

      return {
        ...state,
        activeLanguage: {
          navbar: state.activeLanguage.navbar,
          home: state.activeLanguage.home,
          poetsList: activePoets,
        },
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(rootReducer, enhancer);

export default store;
