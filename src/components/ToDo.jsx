import React, { useState} from 'react';
import {Card, Divider, Button} from 'antd';
import { Todoitem } from './Todoitem';
import { TodoForm } from './TodoForm';
import { format } from 'date-fns';



export const ToDo = () => {
    
    const [todos, setTodos] = useState([
        {id: 1, name: 'Todo 1', title:'Chore',description:'Do the laundry',checked:false,time:((format(Date.now(),'dd.MM.yyyy -hh:mm')))},
        {id: 2, name: 'Todo 2', title:'Cook',description:'Make spaghetti', checked: false,time:((format(Date.now(),'dd.MM.yyyy -hh:mm')))}
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
        var newArray = todos.filter(function (todo){
            
            return todo.checked === false;

        })
        console.log(newArray)
        setTodos([...newArray])
    }

   const tasksundone = () =>{
       var countUnchecked = 0;
        for (let i = 0; i<todos.length; i++){
            if (todos[i].checked === false){
               // setCount(count + 1);
               countUnchecked++;
               
            }
        }
        console.log(countUnchecked)
        return countUnchecked;
    }
     
    const [ids, setids] = useState(10);

    const renderItems = (todos) => {
        return (

            <ul className ={'Todo-list'}>
                {todos.map(todo => {
                    console.log(todo)
                    return(
                        <Todoitem item ={todo} onCheck = {onCheck} onRemove = {onRemove} />
                    )
                })}
            </ul>
        )
    }

    const onSubmit = (name,title,description)=>{
        console.log(name,title,description)
        const todo = {
            id: ids,
            name,
            title,
            time:((format(Date.now(),'dd.MM.yyyy -hh:mm'))),
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

    return(
        <Card title = {'My To-Do List'}>
            <TodoForm onSubmit={onSubmit}/>
            <Divider/>
            { 
               renderItems(todos)
            }
            <Divider/>
            {utilsButtons()}
            <Divider/>
            amount of Undone tasks: {tasksundone()}
        </Card>
    );
    
}