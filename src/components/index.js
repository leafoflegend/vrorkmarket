import React, { Component } from 'react';
import { 
	TextField,
	DatePicker,
	RaisedButton
} from 'material-ui';
import axios from 'axios';

class Container extends Component {
	render () {
		return (
			<div
				style={{
					margin: '0 auto',
				}}
			>
				<TextField hintText={ 'Question 1' } />
				<br />
				<TextField hintText={ 'Question 2' } />
				<br />
				<TextField hintText={ 'Question 3' } />
				<br />
				<DatePicker hintText={ 'Select a Date' } />
				<br />
				<RaisedButton
					label={ 'Submit' }
					onClick={ () => { axios.post(`http://localhost:1185/postRoute`, { stuff: 'stuff' }) } } 
				/>
			</div>
		)
	}
}

export default Container;
