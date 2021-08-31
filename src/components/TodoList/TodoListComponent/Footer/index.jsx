import React, { Component } from 'react'
import './index.css'
import { Checkbox, Button } from 'antd';
import PubSub from 'pubsub-js';

const Footer = (props) => {

	const handleCheckAll = (event) => {
		props.checkAllTodo(event.target.checked)
	}

	const handleClearAllDone = () => {
		props.clearAllDone()
	}

	const { todos } = props
	const doneCount = todos.reduce((sum, todo) => sum + (todo.done ? 1 : 0), 0);
	const total = todos.length;
	const left = total - doneCount;

	PubSub.publish('doneCount', left);

	return (
		<div className="todo-footer">
			<Checkbox
				onChange={handleCheckAll}
				checked={doneCount === total && total !== 0 ? true : false}>
				已完成 {doneCount} / 全部 {total}
			</Checkbox>

			<Button
				className="clearAllButton"
				onClick={handleClearAllDone}
				type="primary"
			>
				Clear Done
			</Button>
		</div>
	)

}

export default Footer;