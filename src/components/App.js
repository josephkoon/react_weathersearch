import React from 'react'
import { connect } from 'react-redux'

import Weather from './Weather.js'
import LocationForm from './LocationForm.js'

import { fetchWeather } from '../actions/weatherActions'

//connect the store
@connect((store) => {
	return {
		weather: store.weather.weather
	}
})

export default class App extends React.Component {
	//fetch the data
	componentDidMount(){
		this.props.dispatch(fetchWeather({city:'Irvine', state:'CA'}))
	}

	render(){
		const { weather } = this.props

		return (
			<div className='container text-center col-sm-6'>
				<br/>
				<h1>Weather Check</h1>
				<br/>
				<Weather weather={weather} />
				<br/>
				<LocationForm onLocationChange={this.onLocationChange.bind(this)}/>
			</div>
		)
	}

	//dispatch weather for form
	onLocationChange(location){
		this.props.dispatch(fetchWeather({city:location.city, state:location.state}))
	}
}