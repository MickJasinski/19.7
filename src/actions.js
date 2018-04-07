import uuid from "uuid";

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

function editComment(text, commentId) {
  return {
    type: EDIT_COMMENT,
    text,
    id: commentId
  }
}

function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    id: commentId
  }
}

// thumbUpComment action object creator.
function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

// thumbDownComment action object creator.
function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}

export { addComment, editComment, removeComment, thumbUpComment, thumbDownComment, ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT };
