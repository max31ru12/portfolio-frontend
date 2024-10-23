import React, { useRef } from 'react'

import axios from 'axios'

import { ICreateSkill } from '../../interfaces/skills'

export default function SkillCreateForm() {

    const nameRef = useRef<HTMLInputElement>(null)
    const levelRef = useRef<HTMLSelectElement>(null)
    const avatarRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event) {
        event.preventDefault()
        const formData: ICreateSkill = {
            name: nameRef.current?.value ?? "",
            level: Number(levelRef.current?.value) ?? 1,
            avatar_url: avatarRef.current?.value ?? "",
        }

        console.log(formData)
        axios.post("http://127.0.0.1:8000/skills/", formData)
    }

    return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="skill-name">Skill name: </label>
        <input type="text" id="skill-name" ref={nameRef} placeholder="Type skill name..."/><br />

        <label htmlFor="skill-level">Skill level: </label> 
        <select ref={levelRef} id="skill-level">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <br />

        <label htmlFor="skill-avatar">Skill avatar</label>
        <input type="text" id="skill-avatar" ref={avatarRef} placeholder="Type avatar URL..."/><br />

        <button type="submit">Submit</button>
    </form>
    )
}
