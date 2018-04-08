import React from 'react';
import AddCommentContainer from './AddCommentContainer';
import CommentsListContainer from './CommentsListContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
    	<AddCommentContainer />
      <CommentsListContainer />
    </div>
  );
};

export default App;