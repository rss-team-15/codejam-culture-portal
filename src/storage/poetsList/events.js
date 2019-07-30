import poetsListActions from './actions';

export default {
  updatePoetsList: query => ({
    type: poetsListActions.updatePoetsList,
    query,
  }),
};
