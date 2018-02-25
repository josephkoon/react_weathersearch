import React from 'react'

export default class LocationForm extends React.Component {
	render(){
		return (
			<div>
				<h3>Change Location</h3>
				<form onSubmit={this.changeLocation.bind(this)}>
					<div className='form-group'>
						<input className='form-control' type='text' ref='city' placeholder='Enter City' />
					</div>
					<br />
					<div className='form-group'>
						<input className='form-control'  type='text' ref='state' placeholder='Enter State' />
					</div>
					<br />
					<div className='form-group'>
						<input className='btn btn-primary btn-block'  type='submit' value='submit' />
					</div>
				</form>
			</div>
		)
	}

	//submit location 
	changeLocation(e){
		e.preventDefault()
		let location = {
			city: this.refs.city.value,
			state: this.refs.state.value
		}
		this.props.onLocationChange(location)
		return false
	}

}