import React from 'react'

const List = (props) => {
	return (
		<div>
			{props.data.map((el, id) => {
				return (
					<div key={id}>
						<h1>{el.title}</h1>
						<h2>{el.num}</h2>
                        <h2>{el.date}</h2>
					</div>
				)
			})}
		</div>
	)
}

export default List
