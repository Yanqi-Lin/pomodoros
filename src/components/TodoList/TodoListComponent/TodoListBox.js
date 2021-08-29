import React, { useState } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './TodoListBox.css'

function TodoListBox () {
	//状态在哪里，操作状态的方法就在哪里
	const [todos, setTodos] = useState([
		{id:'001',name:'React Hooks!',done:false},
		{id:'002',name:'React Redux!',done:true}
	])

	
	//addTodo用于添加一个todo，接收的参数是todo对象
	const addTodo = (todoObj)=>{

		//追加一个todo
		const newTodos = [todoObj,...todos]
		//更新状态
		setTodos(newTodos)
		console.log(todos)
	}

	//updateTodo用于更新一个todo对象
	const updateTodo = (id,done)=>{
			
		//匹配处理数据
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		setTodos(newTodos)
	}

	//deleteTodo用于删除一个todo对象
	const deleteTodo = (id)=>{
		//删除指定id的todo对象
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		//更新状态
		setTodos(newTodos)
		console.log(todos)
	}

	//checkAllTodo用于全选
	const checkAllTodo = (done)=>{
		//加工数据
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
		//更新状态
		setTodos(newTodos)
	}

	//clearAllDone用于清除所有已完成的
	const clearAllDone = ()=>{
		//过滤数据
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		//更新状态
		setTodos(newTodos)
	}

	return (
		<div className="TodoListBox">
				<Header addTodo={addTodo}/>
				<List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
				<Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone}/>
		</div>
	)
	
}

export default TodoListBox;
