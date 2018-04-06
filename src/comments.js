import { ADD_COMMENT, EDIT_COMMENT } from './actions.js';
import uuid from 'uuid'

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
      }, ...state];
    case EDIT_COMMENT:
      return state.map(
        comment => {
          comment.id === action.id ? { ...comment, text: action.text } : comment
        }
      );

    default:
      return state;
  }
}

export default comments;