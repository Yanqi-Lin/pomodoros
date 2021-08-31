import React, { useState } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './TodoListBox.css'

function TodoListBox() {
	const [todos, setTodos] = useState([
		{ id: '001', name: 'React Hooks!', done: false },
		{ id: '002', name: 'React Redux!', done: true }
	])

	const addTodo = (todoObj) => {

		const newTodos = [todoObj, ...todos]
		setTodos(newTodos)
		console.log(todos)
	}

	const updateTodo = (id, done) => {
		const newTodos = todos.map((todoObj) => {
			if (todoObj.id === id) return { ...todoObj, done }
			else return todoObj
		})
		setTodos(newTodos)
	}

	const deleteTodo = (id) => {
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id !== id
		})
		setTodos(newTodos)
		console.log(todos)
	}

	const checkAllTodo = (done) => {
		const newTodos = todos.map((todoObj) => {
			return { ...todoObj, done }
		})
		setTodos(newTodos)
	}

	const clearAllDone = () => {
		const newTodos = todos.filter((todoObj) => {
			return !todoObj.done
		})
		setTodos(newTodos)
	}

	return (
		<div className="TodoListBox">
			<Header addTodo={addTodo} />
			<List
				todos={todos}
				updateTodo={updateTodo}
				deleteTodo={deleteTodo}
			/>
			<Footer
				todos={todos}
				checkAllTodo={checkAllTodo}
				clearAllDone={clearAllDone}
			/>
		</div>
	)

}

export default TodoListBox;
