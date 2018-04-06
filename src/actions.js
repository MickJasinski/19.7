
import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT'

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}

export { addComment, editComment, ADD_COMMENT, EDIT_COMMENT };