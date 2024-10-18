interface ISkillDataType {
    id: number
    name: string
    level: number
    avatar_url: string
}

interface ISkills extends Array<ISkillDataType>{}

export { ISkillDataType, ISkills }