import React from 'react';

export default function Footer() {
	return (
		<footer className="page-footer" style={footerColor}>
			<div className="footer-copyright">
				<div className="container white-text">
					© 2019 Copyright
					<a className="white-text right" href="#!">
						More
					</a>
				</div>
			</div>
		</footer>
	);
}

const footerColor = {
	background: '#855184',
	position: 'absolute',
	right: '0',
	bottom: '0',
	left: '0',
	padding: '0',
	height: '8vh'
};
