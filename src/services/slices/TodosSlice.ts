import { createSlice } from "@reduxjs/toolkit";

import { ITodos } from "../../interfaces/todo.ts";

import { fetchTodos } from "../thunks/TodoThunk.ts";

const initialState: ITodos = []

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            return [
                ...action.payload
            ]
        })
    }
})

export default todosSlice.reducer
