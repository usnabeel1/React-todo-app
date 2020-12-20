import React from 'react';
import { Form, Input, Button} from 'antd';
import { render } from '@testing-library/react';



const  {Item}  = Form;

export const TodoForm = (props) => {
    const {onSubmit} = props;
    
    const finish = (values) => {
        console.log('these are the values')
        console.log(values)
        onSubmit(values.name, values.title, values.description)
    }

    const fieldsValidationMessage = " name should be at least 3 characters!";
    const titlecapValidationmessage = " title must begin with CAPS!";
    


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