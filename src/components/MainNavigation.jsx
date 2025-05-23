import { NavLink } from 'react-router-dom'

export default function MainNavigation() {
	return (
		<nav className='flex justify-evenly lg:justify-start lg:gap-[8px] items-center fixed top-0 w-full px-1 lg:px-3 py-2 bg-black font-bold text-white lg:text-lg xl:text-2xl'>
			<NavLink
				className={({ isActive }) => (isActive ? 'text-yellow-300' : 'text-white  hover:text-yellow-300 transition duration-300 ')}
				to='/'>
				Lista Zadań
			</NavLink>
			<NavLink
				to='/add'
				className={({ isActive }) => (isActive ? 'text-yellow-300' : 'text-white  hover:text-yellow-300 transition duration-300 ')}>
				Dodaj zadanie
			</NavLink>
		</nav>
	)
}
