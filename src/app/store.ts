import { configureStore } from "@reduxjs/toolkit"
import { coursesSlice } from "./coursesSlice"
import { modulesSlice } from "./modulesSlice"

export const store = configureStore({
	reducer: {
		course: coursesSlice.reducer,
		module: modulesSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
