import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ISkills } from "../../interfaces/skills";

const fetchSkills = createAsyncThunk<ISkills>("skills/fecth", async () => {
    const response = await axios.get<ISkills>("http://localhost:8000/skills/");
    if (response.status !== 200){
        throw new Error("Smth went wrong");
    }
    return response.data
})

export { fetchSkills };