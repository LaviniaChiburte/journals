import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class JournalItem extends Component {
	render() {
		return (
			<div>
				<CardActionArea>
					<CardContent
						style={{
							padding: 15,
							margin: 10,
							backgroundColor: '#f0decc',
							borderTopLeftRadius: '25px'
						}}
					>
						<Typography>
							<h4>{this.props.note.title}</h4>{' '}
						</Typography>

						<h6>
							{new Date(this.props.note.createdAt).toLocaleDateString('en-US')}
						</h6>
						<p>{this.props.note.content}</p>
					</CardContent>
				</CardActionArea>
			</div>
		);
	}
}

export default JournalItem;
