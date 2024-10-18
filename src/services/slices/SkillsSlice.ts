import { createSlice } from "@reduxjs/toolkit";

import { ISkills } from "../../interfaces/skills";
import { fetchSkills } from "../thunks/SkillsThunk.ts";

const initialState: ISkills = new Array();

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSkills.fulfilled, (state, action) => {
            return [
                ...action.payload
            ]
        })
    }
})

export default skillsSlice.reducer;