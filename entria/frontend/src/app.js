import React, {Component} from 'react'
import Response from '../api.json'
import Loadable from 'react-loadable'

const ListComponent = Loadable({
	loader: () => import('./list'),
	loading: () => <div>loading...</div>
})

export default class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {items: []};
	}

	componentWillMount(){
		this.setState({
			items: Response.data
		})
	}

	render(){
		let {items} = this.state
		return <div>
		   <ListComponent items={items} />
		</div>
	}
}

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