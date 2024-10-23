export interface ICreateTodo {
    title: string
    description: string
}

export interface ICreateTodoFormErrors {
    title: string | null
    description: string | null
}

export interface ITodo {
    id: number
    title: string
    description: string
    created_at: string
}

export interface ITodos extends Array<ITodo> {}
