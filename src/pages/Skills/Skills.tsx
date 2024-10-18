import React, { useEffect } from 'react'

import { List, Avatar } from 'antd'

import { useAppDispatch, useAppSelector } from '../../services/store.ts'
import { fetchSkills } from '../../services/thunks/SkillsThunk.ts'
import { ISkillDataType } from '../../interfaces/skills.tsx'



function SkillList({ skillsData }){
    return (
        <div>
            <List
            className="skill-list" 
            itemLayout='horizontal' 
            dataSource={ skillsData }
            renderItem={(item: ISkillDataType) => (
                <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar_url} />}
                    title={<a href="https://ant.design">{item.name}</a>}
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
