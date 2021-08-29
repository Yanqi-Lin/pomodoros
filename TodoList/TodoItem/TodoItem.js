import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './TodoItem.css'


function TodoItem() {

    // const [mouse, setMouse] = useState(false);

    // const handleMouse = (flag) => {
    //     return () => {
    //         setMouse(flag)
    //     }
    // }


    return (
        <div
            className="TodoItem"
            // onMouseOver={handleMouse(true)}
            // onMouseLeave={handleMouse(false)}
        >
            <Checkbox>Checkbox</Checkbox>
            <Button
                type="primary"
                shape="circle"
                className="deleteButton"
                // style={{ display: mouse ? 'block' : 'none' }}
            >
                {<CloseOutlined />}
            </Button>
        </div>
    )
}

export default TodoItem;