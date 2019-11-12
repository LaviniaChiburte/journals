import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

export class AddItem extends Component {
	state = {
		title: '',
		createdAt: '',
		content: ''
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.addItem(
			this.state.title,
			this.state.createdAt,
			this.state.content
		);

		this.setState({ title: '', createdAt: '', content: '' });
	};
	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} style={formStyle}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="title"
						type="text"
						name="title"
						autoFocus
						placeholder="Title..."
						value={this.state.title}
						onChange={this.onChange}
					/>
					{/* <input
						type="text"
						name="title"
						placeholder="Title..."
						value={this.state.title}
						onChange={this.onChange}
					/> */}

					<TextField
						variant="standard"
						margin="normal"
						required
						fullWidth
						id="content"
						type="date"
						name="createdAt"
						autoFocus
						value={this.state.createdAt}
						onChange={this.onChange}
					/>
					{/* <input
						type="date"
						name="createdAt"
						value={this.state.createdAt}
						onChange={this.onChange}
					/> */}

					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="content"
						type="textarea"
						name="content"
						autoFocus
						value={this.state.content}
						onChange={this.onChange}
					/>

					<Input
						type="file"
						name="image"
						id="image"
						alt="doc uploaded"
						value=""
						onChange={this.onChange}
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						value="Submit"
						style={{ backgroundColor: '#b8929f', marginTop: 15 }}
					>
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

const formStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	// justifyContent: 'space-around',
	marginLeft: '20px',
	width: '40vw'
};

export default AddItem;
