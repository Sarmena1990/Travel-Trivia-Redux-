import { combineReducers } from 'redux';
import postReducer from './postReducer';
import answerReducer from './answerReducer';

export default combineReducers({
  posts: postReducer,
  answer: answerReducer,
});
