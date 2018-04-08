import React from "react";
import Comment from "./CommentContainer";

const CommentsList = ({ comments }) => {
	return (
		<div>
			<ul>
				{comments.map(comment => <Comment key={comment.id} {...comment} />)}
			</ul>
		</div>
	);
};

export default CommentsList;
