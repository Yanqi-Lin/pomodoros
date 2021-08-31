import React, { useState } from 'react'
import './index.css'
import { Button, Checkbox } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

function Item(props) {

	const [mouse, setMouse] = useState(false);

	const handleMouse = (flag) => {
		return () => {
			setMouse(flag)
		}
	}

	const handleCheck = (id) => {
		return (event) => {
			props.updateTodo(id, event.target.checked)
		}
	}

	const handleDelete = (id) => {
		if (window.confirm('确定删除吗？')) {
			props.deleteTodo(id)
		}
	}

	const { id, name, done } = props;

	return (
		<li
			style={{ backgroundColor: mouse ? '#ddeeff' : 'white' }}
			onMouseEnter={handleMouse(true)}
			onMouseLeave={handleMouse(false)}
		>
			<Checkbox onChange={handleCheck(id)} checked={done}>
				{name}
			</Checkbox>
			<Button
				className="deleteButton"
				onClick={() => handleDelete(id)}
				style={{ display: mouse ? 'block' : 'none' }}
				type="primary"
				shape="circle"
				size="small"
				icon={<CloseOutlined />}
			/>
		</li>
	)

}

export default Item;