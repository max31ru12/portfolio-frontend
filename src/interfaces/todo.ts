export interface ICreateTodo {
    title: string
    description: string
}

export interface ICreateTodoFormErrors {
    title: string | null
    description: string | null
}
