import React, { useState} from 'react';
import {Button, Checkbox } from 'antd';
import {DeleteFilled} from '@ant-design/icons';


export const TodoItem = (props) => {
    const { item, onCheck, onRemove } = props;

    const check = () =>{
        onCheck(item.id);
    }

    const Remove = () =>{
        onRemove(item.id);
    }
    
    return(
        
        <li className = "Todo-item" key = {item.id}>
            <Checkbox classname = "checkbox" checked = {item.checked} onChange= {check} > {item.name}, {item.title}, {item.description}
            </Checkbox>
            <Button style = {{background:"#f5222d"}} onClick={Remove} icon = {<DeleteFilled />} ></Button> 
        </li>
        
            
    )
    
}