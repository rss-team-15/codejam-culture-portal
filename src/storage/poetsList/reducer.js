import poetsListInitState from './initState';
import poetsListActions from './actions';

export default function poetsListReducer(state = poetsListInitState, act) {
  switch (act.type) {
    case poetsListActions.updatePoetsList: {
      const activePoets = state.contents.filter(poet =>
        poet.includes(act.query)
      );
      return [...state, activePoets];
    }
    default: {
      return state;
    }
  }
}
