import React, { useState} from 'react';
import {Card, Divider, Button} from 'antd';
import { TodoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';



export const ToDo = () => {

    const [todos, setTodos] = useState([
        {id: 1, name: 'todo 1', title:'Dr',description:'Doctor',checked: false},
        {id: 2, name: 'todo 2', title:'Col',description:'Colonel',checked: false}
    ]);
    
    const onCheck = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const todo = todos[index];
        
        todo.checked = !todo.checked;
        setTodos([...todos]);
    }
    const onRemove = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        setTodos([...todos]);
    }
    const removeAllChecked = () => {
        for( let i = 0; i < todos.length; i++ ){
            if(todos[i].checked === true) {
                todos.splice(i, 1);
            }
        }
        
        setTodos([...todos])
    }

   const [count, setCount] = useState(0);

   const tasksundone = () =>{
        for (let i = 0; i<todos.length; i++){
            if (todos[i].checked === false){
                setCount(count + 1);
            }
        }
        console.log(tasksundone)
        this.useState({tasksundone})
        setTodos([...todos])
    }
    
    /*count(checked==false){
        if (checked==false){
            setCount(count+1)
        }
        else{
            count --
        }
    }
    */
    
    const [ids, setids] = useState(10);

    const renderItems = (todos) => {
        return (

            <ul className ={'Todo-list'}>
                {todos.map(todo => {
                    console.log(todo)
                    return(
                        <TodoItem item ={todo} onCheck = {onCheck} onRemove = {onRemove} />
                    )
                })}
            </ul>
        )
    }
    const onSubmit = (name,title,description)=>{
        console.log(name, title,description)
        const todo = {
            id: ids,
            name,
            title,
            description,
            checked: false
        };

        setTodos([...todos, todo]);
        setids (ids +1);
    }
    
    const utilsButtons = () => {
        return(
            <Button onClick = {removeAllChecked}>
            Remove checked items
            </Button>
        )
    }
    const undonetask = () =>{
        return(
            <h4 count = {tasksundone}>Tasks undone</h4>
        )
    }
    

    return(
        <Card title = {'My To-Do List'}>
            <ToDoForm onSubmit={onSubmit}/>
            <Divider/>
            { 
               renderItems(todos)
            }
            <Divider/>
            {utilsButtons()}
            <Divider/>
            {undonetask()}
        </Card>
    );
    
}