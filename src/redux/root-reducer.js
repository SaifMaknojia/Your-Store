import { combineReducers } from 'redux';
import {} from 'module';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
});
