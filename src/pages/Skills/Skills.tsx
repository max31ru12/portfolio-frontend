import React, { useEffect } from 'react'

import { List, Avatar, Button } from 'antd'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../services/store.ts'
import { fetchSkills } from '../../services/thunks/SkillsThunk.ts'
import { ISkillDataType } from '../../interfaces/skills.tsx'



function SkillList({ skillsData }){
    return (
        <div>
            <Button color="default" variant="outlined">
                <Link to="create">Add skill</Link>
            </Button>
            
            <List
            className="skill-list" 
            itemLayout='horizontal' 
            dataSource={ skillsData }
            renderItem={(item: ISkillDataType) => (
                <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar_url} />}
                    title={<Link to={String(item.id)}>{item.name}</Link>}
                    description={<div>Level {item.level}</div>}
                />
                </List.Item>
            )}>

            </List>
        </div>
    )
}

export default function Skills() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchSkills())
    }, [dispatch])
    
    const skills = useAppSelector((state) => state.skills);
    return (
        <div>
            <SkillList skillsData={skills}/>
        </div>
  )
}
