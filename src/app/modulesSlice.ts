import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Module } from "../types/types"

const initialState: Module = {
	id: 0,
	name: '',
	description: '',
	courseId: 0
}

export const modulesSlice = createSlice({
	name: 'module',
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setDescription: (state, action: PayloadAction<string>) => {
			state.description = action.payload
		},
		setCourse: (state, action: PayloadAction<number>) => {
			state.courseId = action.payload
		}
	}
})

export const { setName, setDescription, setCourse } = modulesSlice.actions
export default modulesSlice.reducer