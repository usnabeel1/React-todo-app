import React from 'react';
import { Form, Input, Button} from 'antd';
import { render } from '@testing-library/react';



const  {Item}  = Form;

export const ToDoForm = (props) => {
    const {onSubmit} = props;
    
    const finish = (values) => {
        console.log('these are the values')
        console.log(values)
        onSubmit(values.name, values.title, values.description)
    }

    const fieldsValidationMessage = "the name should not be lesss than 3 characters!";
    const titlecapValidationmessage = "the title must begin with a capital letter!";
    


    return(
        <Form className={'todo-form'} layout={'inline'} onFinish={finish}>
            <Item name = {'name'} label="Name">
                <Input
                minLength = {3}
                validationMessage = {fieldsValidationMessage} 
                />
            </Item>
            <Item name = {'title'} label = "Title">
                <Input 
                minLength = {3}
                pattern = {"^[A-Z][A-Za-z]+"}
                validationMessage = {titlecapValidationmessage}
                />
            </Item>
                <Item name = {'description'} label = "Description">
                    <Input 
                    minLength = {3}
                    validationMessage = {fieldsValidationMessage}
                    />
                </Item>

            <Item>
                <Button htmlType = {'submit'}>Add</Button>
            </Item>


            
        </Form>
    )

    

    
    
}