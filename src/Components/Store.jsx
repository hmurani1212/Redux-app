import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import redducer from './reducer';

export const Store = createStore(redducer, {}, applyMiddleware(thunk));
