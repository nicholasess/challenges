import React, {Component} from 'react'
import Response from '../api.json'



export default ({items}) => (
	<div style={style.container}>
		   <h3>Lista Geral</h3>
			<ul>
				{items.map((item, index) => <li style={style.list_item} key={index}>{item.name}</li>)}
			</ul>
		</div>
	
)

var style = {
	container: {
		width: '200px', 
		margin: '0 auto', 
		textAlign: 'center'
	},
	list_item:{
		listStyle: 'none', 
		padding: '10px', 
		borderBottom: '1px solid #000'
	}
}