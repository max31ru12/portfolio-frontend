import React, { useEffect } from 'react'

import { Link } from "react-router-dom"
import { List, Button } from 'antd'

import { useAppDispatch, useAppSelector } from '../../services/store.ts'
import { fetchTodos } from '../../services/thunks/TodoThunk.ts'
import { ITodo } from '../../interfaces/todo.ts'


function TodoList({ todosData }) {
  return (
    <div>
      <Button color="default" variant="filled">
        <Link to="create">Create Todo</Link>
      </Button>
      <List
      className='todo-list'
      itemLayout='horizontal'
      dataSource={ todosData }
      renderItem={(item: ITodo) => (
        <List.Item>
          <List.Item.Meta 
            title={item.title}
            description={
              <div>{item.description}<br/> Created at: {item.created_at}</div>
            }
          />
        </List.Item>
      )}
      >

      </List>
    </div>
  )
}


export default function Todos() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const todosData = useAppSelector((state) => state.todos)

  return (
    <div>
      <TodoList todosData={todosData}/>
    </div>
  )
}
