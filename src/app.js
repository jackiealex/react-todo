var React = require('react');

var ReactDOM = require('react-dom');

var ListContainer = require('./components/ListContainer')

var App = React.createClass({
	render() {
		return (
			<div>
				<ListContainer hello={{anne:12}}></ListContainer>
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('root'));
