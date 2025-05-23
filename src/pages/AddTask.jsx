import { useState, useEffect } from 'react'

export default function AddTask() {
	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [description, setDescription] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [error, setError] = useState({
		title: '',
		date: '',
		description: '',
	})


	function handleChangeTitle(e) {
		setTitle(e.target.value)
	}

	function handleChangeData(e) {
		setDate(e.target.value)
	}
	function handleChangeDescription(e) {
		setDescription(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()

		const newErrors = {
			title: '',
			date: '',
			description: '',
		}

		if (!title.trim()) {
			newErrors.title = 'Wpisz tytuł!'
		} else if (title.length < 3) {
			newErrors.title = 'tytuł musi mieć więcej niż 3 litery!'
		}

		if (!date.trim()) {
			newErrors.date = 'Wpisz datę!'
		}

		if (!description.trim()) {
			newErrors.description = 'Wpisz szczegóły zadania!'
		} else if (description.length < 5) {
			newErrors.description = 'Opis powinien mieć conajmniej 8 liter!'
		}

        setError(newErrors)
        
        	const hasErrors = Object.values(newErrors).some(val => val !== '')

	if (hasErrors) {
		return
	}

		const newTask = {
			id: Date.now(),
			title,
			date,
			description,
        }
        
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || []
        	const updatedTasks = [...existingTasks, newTask]
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))

		if (newErrors.title || newErrors.date || newErrors.description) {
			return
		}

		setIsModalOpen(true)
		setTitle('')
		setDate('')
		setDescription('')

		setTimeout(() => setIsModalOpen(false), 2000)
	}

	const classes =
		'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600'
    const labelClasses = 'className=" text-sm lg:text-lg font-bold uppercase text-stone-500 lg:py-1'
    
    const textareaClasses = 'w-full md:h-[150px] xl:h-[200px] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600'
	return (
		<>
			<div
				className=' mt-15 px-2  sm:flex sm:justify-center

'>
				<form onSubmit={handleSubmit} className='flex flex-col sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] md:gap-[5px]    '>
					<div className='flex flex-col md:gap-[5px] '>
						<label htmlFor='title' className={labelClasses}>
							Tytuł:
						</label>
						<input
							id='title'
							type='text'
							value={title}
							onChange={handleChangeTitle}
							placeholder='wpisz tytył'
							className={classes}
                        />
                        <div className=' p-1 min-h-[15px]'>

						{error.title && <p className=' text-xs text-red-600'>{error.title}</p>}
                        </div>
					</div>

					<div className='flex flex-col'>
						<label htmlFor='date' className={labelClasses}>
							Data wykonania:
						</label>
                        <input id='date' type='date' value={date} onChange={handleChangeData} className={classes} />
                        <div className=' p-1 min-h-[15px]'>

						{error.date && <p className='text-xs text-red-600'>{error.date}</p>}
                        </div>
					</div>

					<div className='flex flex-col'>
						<label htmlFor='description' className={labelClasses}>
							Opis:
						</label>
						<textarea
							value={description}
							id='description'
							onChange={handleChangeDescription}
                            placeholder='Napisz szczegóły'
                            rows='5'
                            cols='4'
                           maxLength='80'
                            className={textareaClasses}></textarea>
                        <div className=' p-1 min-h-[15px]'>
                            {error.description && <p className=' text-xs text-red-600'>{error.description}</p>}

                        </div>
					</div>
					<div className='mt-2 lg:flex lg:justify-end'>
						<button className='px-4 py-2  w-full lg:w-[30%] text-sm md:text-base rounded-md bg-black  text-white hover:bg-stone-900 hover:text-yellow-300 '>
							Zapisz
						</button>
					</div>
				</form>

				{isModalOpen && (
					<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50  z-50'>
						<div className='bg-white p-6 rounded shadow-lg text-center'>
							<h2 className='text-lg font-semibold text-green-700'>Zadanie zostało dodane!</h2>
						</div>
					</div>
				)}
			</div>
		</>
	)
}
