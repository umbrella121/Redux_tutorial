import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import counterActions from '../actions/counterActions'
import AutorizationPage from '../components/AutorizationPage'
import Counter from '../components/Counter'
import UserName from '../components/UserName'

class App extends React.Component {


		render() {
			console.log('--- this.props',this.props)
			return (

					<div>
						<Counter />
						<AutorizationPage />
						<UserName />
					</div>
			);
		}
}


const mapStateToProps = store => {
	return {
		 counter: store.counter,
 }
}

// add some actions in props of component
const mapDispatchToProps = dispatch => ({
	incrementDispatch(newCounterValue){
		const action = counterActions.incrementCounter(newCounterValue);
		dispatch(action);
	},

	decrementDispatch(newCounterValue) {
		const action = counterActions.decrementCounter(newCounterValue);
		dispatch(action);
	},

})
// redux magic
export default connect(mapStateToProps, mapDispatchToProps)(App);