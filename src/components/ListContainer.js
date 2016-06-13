var React = require('react');


require('../static/css/index.styl');

// dependencie components
var ListItem = require('./ListItem');

// js libs
var _ = require('../static/js/libs/underscore/underscore.js')

var ListContainer = React.createClass({
	getInitialState(){
		return {
			list: [
				{text: 'A default task, and you can create more tasks!', status: 0, id:1231}
			],
			ss: 11,
			name: 'alex'
		};
	},
	render() {
		var self = this;
		return (
			<div className="mod-todo-list">
				<input className="desc" onKeyUp={this.onAddChild} type="text" placeholder="请输入任务描述"/>	
				<ul>
					{
						this.state.list.map(function (item, index) {
							return <ListItem
								value={item} 
								key={item.id} 
								onRemoveChild={self.onRemoveChild}
								onChangeChildStatus={self.onChangeChildStatus}
							></ListItem>
						})
					}
				</ul>
			</div>
		);
	},
	onAddChild(event) {
		if(event.keyCode == 13) {
			var list = this.state.list;
			var id = + new Date;
			var item = {text: event.target.value, status: 0, id: id};
			list.push(item);
			this.setState({list: list});
			event.target.value = '';
		}
	},
	onRemoveChild(id) {
		var list = this.state.list;
		var index =  _.findIndex(list, {
			id: id
		});
		list.splice(index, 1);
		this.setState({list: list})
	},
	onChangeChildStatus(id){
		var list = this.state.list;
		var one =  _.find(list, {
			id: id
		});
		one.status = !one.status;
		this.setState({list: list});
	}
});

module.exports = ListContainer;