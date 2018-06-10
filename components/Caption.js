import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Caption extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#dfe4eal',
		borderBottomWidth: 2,
		borderColor: '#a4b0be'
	},
	title: {
		flex: 1,
		fontSize: 20,
		lineHeight: 36,
		color: 'coral'
	},
	text: {
		flex: 1,
		fontSize: 16,
		lineHeight: 26,
		color: '#dfe4ea'
	}
});
