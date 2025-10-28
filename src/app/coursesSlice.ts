import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Course } from "../types/types"

const initialState: Course = {
	id: 0,
	name: '',
	description: '',
	imageUrl: '',
	category: ''
}

export const coursesSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setDescription: (state, action: PayloadAction<string>) => {
			state.description = action.payload
		}
	}
})

export const { setName, setDescription } = coursesSlice.actions
export default coursesSlice.reducer