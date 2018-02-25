import axios from 'axios'

export function fetchWeather(location){
	return function(dispatch){
		axios.get('http://api.wunderground.com/api/5c330d1c59707589/conditions/q/'+location.state+'/'+location.city+'.json')
			.then((response) => {
				dispatch({type: 'FETCH_WEATHER_FULFILLED', payload:response.data})
			})
			.catch((err) => {
				dispatch({type:'FETCH_WEATHER_REJECTED', payload:err})
			})
	}
}