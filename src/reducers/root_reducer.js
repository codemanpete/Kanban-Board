import { combineReducers } from 'redux';

//import reducers to combine
import TablesReducer from './tables_reducer';

const rootReducer = combineReducers({
  // reducers go here
  tables: TablesReducer
});

export default rootReducer;
