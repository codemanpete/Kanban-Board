import { EXAMPLE_ACTION } from '../actions/example_actions';

const ExampleReducer = (state = { example: "default example" }, action) => {
  Object.freeze(state);
  switch(action.type){
    case EXAMPLE_ACTION:
      return { example: action.example };
    default:
      return state;
  }
};

export default ExampleReducer;
