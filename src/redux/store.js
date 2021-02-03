import { createStore, applyMiddleware } from 'redux';
import logger from 'react-logger';
import rootReducer from './root-reducer';

//can also be used directly inside function, but for scalable issue we created a const
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
