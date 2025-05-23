import { useState, useEffect } from 'react'
import notebookCover from '../assets/notebook.png'

export default function ToDoList() {
	const [userTasks, setUserTasks] = useState([])

	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks')
		if (storedTasks) {
			setUserTasks(JSON.parse(storedTasks))
		}
	}, [])

	function handleDelete(id) {
		const updatedTasks = userTasks.filter(task => task.id !== id)
		setUserTasks(updatedTasks)
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
	}

	return (
		<>
			<div className=' mt-10 p-2' >
				<header>
					<h1 className='mb-3 text-center text-2xl  lg:text-3xl xl:text-3xl'>Wszystkie Twoje zadania w jednym miejscu.</h1>
				</header>

				<div>
                    <div className='flex justify-center'>

					<img className=' mb-2 w-[25%] sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[10%]' loading="lazy" src={notebookCover} alt='czysty niezapisany notes' />
                    </div>
					{userTasks.length === 0 ? (
						<p>Jeszcze nie dodałeś żadnych zadań do dzieła!</p>
					) : (
						<ul className='flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-3 '>
							{userTasks.map(userTask => (
								<li key={userTask.id} className='flex flex-col justify-center sm:justify-between items-center gap-[5px] border p-3 rounded bg-stone-100 h-[200px] md:h-[300px] sm:w-[40%] xl:w-[30%]'>
									<h3 className='text-lg font-semibold'>{userTask.title}</h3>
									<p>
										<strong>Data:</strong> {userTask.date}
									</p>
									<p className="break-all overflow-auto max-h-24" >
										<strong>Opis:</strong> {userTask.description}
									</p>
									<button onClick={() => handleDelete(userTask.id)} className='px-4 py-1  w-full text-sm md:text-base rounded-md bg-black  text-white hover:bg-stone-900 hover:text-red-600 '>Usuń</button>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	)
}
