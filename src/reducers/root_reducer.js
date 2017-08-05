import { combineReducers } from 'redux';

//import reducers to combine
import ExampleReducer from './example_reducer';

const rootReducer = combineReducers({
  // reducers go here
  example: ExampleReducer
});

export default rootReducer;
