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
      const contentsActive = state.contents[act.language];
      return { ...state, activeLanguage, contentsActive };
    }
    case poetsListActions.updatePoetsList: {
      const query = act.query.trim();
      const activePoets = state.contentsActive.poetsListBlock.poetsList.filter(
        poet =>
          `${poet.poetInfo.name}${poet.poetInfo.surname}`
            .toLowerCase()
            .includes(query.toLowerCase())
      );

      return {
        ...state,
        activeLanguage: {
          navbar: state.activeLanguage.navbar,
          home: state.activeLanguage.home,
          poetsListBlock: {
            poetsList: activePoets,
            poetsListSearchLabel:
              state.activeLanguage.poetsListBlock.poetsListSearchLabel,
            poetCardLearnMore:
              state.activeLanguage.poetsListBlock.poetCardLearnMore,
          },
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
