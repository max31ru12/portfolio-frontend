interface ICreateSkill {
    name: string
    level: number
    avatar_url: string
}


interface ISkillDataType extends ICreateSkill {
    id: number
}

interface ISkills extends Array<ISkillDataType>{}

export { ISkillDataType, ISkills, ICreateSkill }