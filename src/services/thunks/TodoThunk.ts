import { createAsyncThunk } from "@reduxjs/toolkit";

import { ITodos } from "../../interfaces/todo";
import axios from "axios";

const fetchTodos = createAsyncThunk<ITodos>("todos/fetch", async () => {
    const response = await axios.get<ITodos>("http://localhost:8000/todo")
    if (response.status !== 200){
        throw new Error("Smth went wrong")
    }
    return response.data
})

export { fetchTodos }
