import { Routes, Route } from 'react-router-dom'
import MainNavigation from './components/MainNavigation'
import ToDoList from './pages/ToDoList'
import AddTask from './pages/AddTask'

function App() {
  return (
    <>
		<MainNavigation/>
			<Routes>
				<Route path='/' element={<ToDoList />} />
				<Route path='add' element={<AddTask />} />
			</Routes>
      
    </>
		
	)
}

export default App
