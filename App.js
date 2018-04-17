import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	PanResponder,
	Animated
} from 'react-native';

export default class App extends Component{
	
	componentWillMount() {
		this._panResponder = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			
			onPanResponderGrant: (e, gestureState) => {
				console.log(gestureState)
			},
			
			onPanResponderMove: (e, gestureState) => {
				console.log(gestureState)
			},
			
			onPanResponderRelease: (e, {vx, vy}) => {
			}
		});
	}
	
	
	render() {
		return (
			<View style={styles.container} {...this._panResponder.panHandlers}>
				<Text>OK</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	},
});
