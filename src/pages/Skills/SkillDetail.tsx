import React, {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Avatar, Flex } from 'antd'

export default function SkillDetail() {

    const [skillState, setSkillState] = useState({
        id: 0,
        name: "",
        level: 0,
        avatar_url: "string",
    })
    const params = useParams()

    // console.log(params.skillId)

    useEffect(() => {
        axios.get(`http://localhost:8000/skills/${params.skillId}`).then((response) => {
            const skillData = response.data
            setSkillState(skillData)
        })
    }, [params.skillId])

    return (
        <>
            <div>
                <Flex gap="middle" vertical>
                    <Avatar src={skillState.avatar_url}></Avatar>
                    <span>{ skillState.name }</span>
                    <span>Skill level: { skillState.level }</span>
                </Flex>
            </div>
        </>
    )
}
