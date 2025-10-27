import { AppBar, Button, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import type { Course } from "../types/types"
import { useNavigate } from "react-router"

const MainPage = () => {
	const [courses, setCourses] = useState<Course[]>()
	const navigate = useNavigate()

	useEffect(() => {
		const fetchCourses = async () => {
			const response = await fetch('http://localhost:3000/courses')
			const data = await response.json()
			setCourses(data)
		}

		fetchCourses()
	}, [])

	return (
		<>
			<AppBar position="static">
				<Toolbar sx={{alignItems: 'center'}}>
					<Typography variant="h4" sx={{flexGrow: 1}}>КУРСЫ</Typography>

					<Button variant="contained" color="info" sx={{marginRight: '20px'}}>Создать курс</Button>
					<Button variant="contained" color="info">Создать модуль</Button>
				</Toolbar>
			</AppBar>

			<List component='div' sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '10px',
				marginTop: '20px'
			}}>
				{courses && 
					courses.map((course) => (
						<ListItemButton key={course.id}
							sx={{
								height: '50px',
								width: '80%',
								backgroundColor: '#dededeff'
							}}
							onClick={() => navigate(`/${course.id}`)}
						>
							<ListItemText primary={course.title} sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}} slotProps={{primary: {fontSize: '20px'}}}></ListItemText>
						</ListItemButton>
					))
				}
			</List>
		</>
	)
}

export default MainPage
