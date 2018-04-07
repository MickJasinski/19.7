import React from 'react';

const Comment = ({text, votes, id, thumbUpComment}) =>
  <li>
    {text} <span>votes: {votes}</span> <button onClick={() => thumbUpComment(id)}><i class="far fa-thumbs-up"></i></button>
  </li>;

export default Comment; 