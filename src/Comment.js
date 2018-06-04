import React from "react";



const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment }) => (
	<li>
		{text} <span>votes: {votes} </span> 
		<div className="btns">
			<button onClick={() => thumbUpComment(id)}>
				<i className="far fa-thumbs-up" />
			</button>
			<button onClick={() => thumbDownComment(id)}>
				<i className="far fa-thumbs-down" />
			</button>
			<button onClick={() => removeComment(id)}>
				<i className="far fa-trash-alt" />
			</button>
		</div>
	</li>
);

export default Comment;