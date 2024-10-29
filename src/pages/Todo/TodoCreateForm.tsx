import React, { useState } from 'react'

import axios from 'axios'
import { Input } from 'antd'

import { ICreateTodo, ICreateTodoFormErrors } from '../../interfaces/todo'
import "./todo.css"


export default function TodoCreateForm() {

    const [formData, setFormData] = useState<ICreateTodo>({title: "", description: ""})
    const [formErrors, setFormErrors] = useState<ICreateTodoFormErrors>({title: null, description: null})

    function handleChange(event){
        const { name, value } = event.target

        setFormData((prevFormData) => ({...prevFormData, [name]: value}))

            if (value.length >= 3) {
                setFormErrors({...formErrors, [name]: null})
            } else {
                setFormErrors({...formErrors, [name]: "Less than 5 characters"})
            }
    }

    function onSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:8000/todo/", formData)
    }

    return (
        <form action="" onSubmit={onSubmit} className="todo-create-form">
            <label htmlFor="title">Title: </label>
            <Input type="text" name="title" id="title" value={formData.title} onChange={handleChange} placeholder="Enter title..."/><br/>
            {formErrors.title && <div style = {{color: 'red'}}>{formErrors.title}</div>}

            <label htmlFor="description">Description: </label>
            <Input type="text" name="description" id="description" value={formData.description} onChange={handleChange} placeholder="Enter description..."/><br/>
            {formErrors.description && <div style = {{color: 'red'}}>{formErrors.description}</div>}

            <button type="submit">Submit</button>
        </form>
    )
}
