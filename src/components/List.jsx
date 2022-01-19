import React from 'react'

const List = (props) => {
    // console.log(props.data);
	return (
		<div>
         <ul>
             {props.data.map(el => <p key={el}>{el.title}{el.num}{el.date}</p>)}
         </ul>
			
		</div>
	)
}

export default List;
