import { useState } from 'react'
import List from './List'
import './Variant.css'
function Variant1(props) {
	const [title, setTitle] = useState('')
	const [num, setNum] = useState('')
	const [date, setDate] = useState('')
	const [show, setShow] = useState([])
	// const userHandler = (event) => {
	//     setUser(event.target.value)
	// }

	const titleHandler = (event) => {
		setTitle(event.target.value)
	}

	const numHandler = (event) => {
		setNum(event.target.value)
	}

	const dateHandler = (event) => {
		setDate(event.target.value)
	}

	const submit = (event) => {
		event.preventDefault()
		const expenseData = {
			title: title,
			num: num,
			date: new Date(date).toString(),
		}
		setShow([...show, expenseData])
	}
	return (
		<div>
			<form onSubmit={submit}>
				<h1>🦄</h1>
				<input
					type='text'
					value={title}
					onChange={titleHandler}
				></input>
				<input
					type='number'
					min='1'
					value={num}
					onChange={numHandler}
				></input>
				<input
					className='inp3'
					value={date}
					type='date'
					onChange={dateHandler}
				></input>
				<button type='submit'>ADD</button>
			</form>
            <List data = {show}/>
		</div>
	)
}
export default Variant1
// const addSubmit = () => {
//     const epenseData = {
//         user:user,

//       }
//       // console.log(epenseDate);
//       props.onSaveExpenseData(epenseData)
//       addTask(user),
//         setUser("")
// }
