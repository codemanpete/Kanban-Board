import { CREATE_CARD } from '../actions/table_actions';

const _defaultState = {
  "1": {
    cards: []
  },
  "2": {
    cards: []
  },
  "3": {
    cards: []
  },
  "4": {
    cards: []
  }
};

const TablesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case CREATE_CARD:
      const copy = Object.assign(state);
      copy[action.tableId].cards.push(action.text);
      return copy;
    default:
      return state;
  }
};

export default TablesReducer;
