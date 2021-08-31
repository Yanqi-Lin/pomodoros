import React from 'react'
import Item from '../Item'
import './index.css'

function List (props) {

	const {todos,updateTodo,deleteTodo} = props
	return (
		<ul className="todoLists">
			{
				todos.map( todo =>{
					return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
				})
			}
		</ul>
		)

}

export default List;