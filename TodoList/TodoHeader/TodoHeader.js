import { nanoid } from 'nanoid';
import './TodoHeader.css';
import { Input } from 'antd';

function TodoHeader (props) {
    
	const enterKeyUp = (event)=>{
		// const todoObj = {id:nanoid(),name:event.value,done:false}
		// props.addTodo(todoObj)
        // //清空输入框
		event.value = ''
	}

    return (
    <div className="todo-header">
        <p className="todo-title">Todos List</p>
        <div className="todo-input">
        <Input 
        placeholder="press Enter key to submit" 
        onPressEnter={(e) => enterKeyUp(e)}
        />
        </div>
    </div>
    )
}

export default TodoHeader;