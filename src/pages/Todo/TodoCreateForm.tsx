import React, { useState } from 'react'

import axios from 'axios'

import { ICreateTodo, ICreateTodoFormErrors } from '../../interfaces/todo'


export default function TodoCreateForm() {

    const [formData, setFormData] = useState<ICreateTodo>({title: "", description: ""})
    const [formErrors, setFormErrors] = useState<ICreateTodoFormErrors>({title: null, description: null})

    function handleChange(event){
        const { name, value } = event.target

        setFormData((prevFormData) => ({...prevFormData, [name]: value}))

            if (value.length >= 5) {
                setFormErrors({...formErrors, [name]: null})
            } else {
                setFormErrors({...formErrors, [name]: "Less than 5 characters"})
            }
    }

    function onSubmit(event){
        event.preventDefault()
        
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" value={formData.title} onChange={handleChange}/><br/>
            {formErrors.title && <div style = {{color: 'red'}}>{formErrors.title}</div>}

            <label htmlFor="description">Description: </label>
            <input type="text" name="description" id="description" value={formData.description} onChange={handleChange}/><br/>
            {formErrors.description && <div style = {{color: 'red'}}>{formErrors.description}</div>}

            <button type="submit">Submit</button>
        </form>
    )
}
