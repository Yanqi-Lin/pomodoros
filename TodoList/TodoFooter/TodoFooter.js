import './TodoFooter.css'
import { Button, Checkbox } from 'antd';


const TodoFooter = () => {
    return (
        <div className="todoFooter">
            
            <Checkbox>1/3</Checkbox>
            <Button type="primary" className="deleteAllButton">Delete All</Button>
        </div>
    )
}

export default TodoFooter;