import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import {ITodo, IUser} from './types/types';
import EventsExample from './components/EventsExample';
function App() {
	const [users, setUsers] = useState<IUser[]>([]);
	const [todos, setrTodos] = useState<ITodo[]>([]);

	async function fetchUsers() {
		try{
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
			setUsers(response.data);
		}catch(e){
			console.log(e);
		}
	}
	async function fetchTodos() {
		try{
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
			setrTodos(response.data);
		}catch(e){
			console.log(e);
		}
	}

	useEffect( () => {
		fetchUsers();
		fetchTodos();
	}, []);

	

	return (
		<div>
			<EventsExample/>
			<Card width='300px' height='150px' 
			variant={CardVariant.outlined}
			onClick={(num)=>console.log('it works!' + num)}>
				<button> BTN </button>	 
			</Card>
			<List items={users} renderItem={ (user:IUser) => <UserItem user={user} key={user.id}/>}/>
			<List items={todos} renderItem={ (todo:ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
			{/* <UserList users={users}/> */}
		</div>
	);
}

export default App;
