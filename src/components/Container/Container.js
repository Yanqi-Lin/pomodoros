import Pomodoros from '../Pomodoros/Pomodoros';
import TodoList from '../TodoList/TodoList';
import './Container.css'

function Container () {

    return (
        <div className='Container'>
            <TodoList className='TodoList'/>
            <Pomodoros className='Pomodoros'/>
        </div>
    )
}
export default Container;