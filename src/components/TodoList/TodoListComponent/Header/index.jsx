import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './index.css';
import { Input } from 'antd';

const Header = (props) => {

	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	//键盘事件的回调
	const handleKeyUp = (event) => {
		//准备好一个todo对象
		const todoObj = { id: nanoid(), name: event.target.value, done: false }
		//将todoObj传递给App
		props.addTodo(todoObj)
		//清空输入
		setInputValue('')
	}


	return (
		<div className="todo-header">
			<p className="todo-title">Todos List</p>
			<Input
			 className="todo-input"
			 placeholder="Press Enter to submit" 
			 value = {inputValue}
			 onChange = {handleChange}
			 onPressEnter={handleKeyUp} 
			 allowClear='true' />
		</div>
	)

}

export default Header;