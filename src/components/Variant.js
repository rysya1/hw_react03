import { useState } from 'react'
import List from './List'
import './Variant.css'

function Variant1() {
	const [array, setArray] = useState([])

	const [data, setData] = useState({
		title: '',
		num: '',
		date: '',
	})

	const onChangeInput = (e) => {
		const key = e.target.name
		setData((prevState) => {
			return{
			...prevState,
			[key]: e.target.value,
			}
		})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		setArray([...array, data])
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
				<h1>🦄</h1>
				<input
					name='title'
					type='text'
					onChange={onChangeInput}
				></input>
				<input
					name='num'
					type='number'
					min='1'
					onChange={onChangeInput}
				></input>
				<input
					name='date'
					className='inp3'
					type='date'
					onChange={onChangeInput}
				></input>

				<button type='submit'>ADD</button>
			</form>
			<List data={array} />
		</div>
	)
}
export default Variant1
