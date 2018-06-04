import React from "react";

class AddComment extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	// handleSubmit(event) {
	// 	event.preventDefault();
	// 	this.props.addComment(this.state.value);
	// 	this.setState({ value: "" });
	// }

	handleSubmit(event) {
		event.preventDefault();
		this.props.addComment(this.state.value);
		this.setState({ value: "" });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Add comment:{" "}
					<input
						className="text"
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input className="submit" type="submit" value="Submit" />
			</form>
		);
	}
}

export default AddComment;
