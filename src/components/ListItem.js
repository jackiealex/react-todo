var React = require('react');

var ListItem = React.createClass({
	render() {
		var {value, onRemoveChild, onChangeChildStatus} = this.props;
		return (
			<li data-id={value.id} className={value.status? "done": ''}>
				{value.text}
				<p className={value.status? "status done": 'status'} onClick={this.onChangeStatus}></p>
				<p className="btn-remove" onClick={this.onRemove}>×</p>
			</li>
		);
	},

	onRemove() {
		this.props.onRemoveChild(this.props.value.id);
	},
	onChangeStatus() {
		this.props.onChangeChildStatus(this.props.value.id);
	}
});

module.exports = ListItem;