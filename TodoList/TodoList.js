import React, { useState } from 'react';
import  './TodoList.css'
import TodoFooter from './TodoFooter/TodoFooter';
import TodoHeader from './TodoHeader/TodoHeader';
import ShowList from './ShowList/ShowList';

function TodoList () {

    const [todos,setTodo] = useState([]);

    const addTodo = (todoObj) => {
        const newTodos = [todoObj,...todos];
        setTodo(newTodos)
    }

    return (
        <div className='TodoList'>
            <TodoHeader addTodo={addTodo}/>
            <ShowList />
            <TodoFooter />
        </div>
    )
}
export default TodoList;