var React = require('react');

var Rect = React.createClass({

	render: function() {
		return (
			<div style={{width: 100, height: 100, background: 'red'}}>
				rect
			</div>
		);
	}

});

module.exports = Rect;