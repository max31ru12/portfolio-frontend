import React, { useState } from 'react'

import axios from 'axios'

import { ICreateTodo } from '../../interfaces/todo'

export default function TodoCreateForm() {

    const [formData, setFormData] = useState<ICreateTodo>({title: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:8000/todo/", formData)
        setFormData({title: "", description: ""})
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={handleChange}/>

            <button type="submit">Create</button>
        </form>
    )
}
