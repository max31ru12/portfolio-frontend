import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux"

import skillReducer from "./slices/SkillsSlice.ts";
import todosReducer from "./slices/TodosSlice.ts";

const store = configureStore({
    reducer: {
        skills: skillReducer,
        todos: todosReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;