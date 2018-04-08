import React from "react";
import Comment from "./CommentContainer";
import { addComment } from "./actions";

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
