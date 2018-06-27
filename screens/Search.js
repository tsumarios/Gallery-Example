import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';

import Card from '../components/Card';

export default class Search extends Component {
	state = {
		toSearch: ''
	};

	handleSearch = async () => {
		let url = `https://source.unsplash.com/${this.state.toSearch}/1280x720`;
		this.props.navigation.navigate('Home', { url });
	};

	render() {
		return (
			<View style={styles.container} behavior="padding">
				<TextInput
					autoCorrect={false}
					value={this.state.toSearch}
					placeholder={'Search...'}
					underlineColorAndroid="transparent"
					placeholderTextColor="white"
					clearButtonMode="always"
					style={styles.textInput}
					onChangeText={(text) => this.setState({ toSearch: text })}
					onSubmitEditing={this.handleSearch}
				/>
			</View>
		);
	}
}

Search.navigationOptions = ({ navigation }) => {
	return {
		title: 'Search',
		headerStyle: {
			backgroundColor: 'coral'
		},
		headerTintColor: 'white',
		headerLeft: (
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Ionicons style={{ paddingHorizontal: 15 }} name="ios-arrow-back" size={26} color="white" />
			</TouchableOpacity>
		),
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Ionicons style={{ paddingHorizontal: 15 }} name="ios-arrow-forward" size={26} color="white" />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 30,
		backgroundColor: '#2f3542'
	},
	textInput: {
		color: 'coral',
		fontSize: 20
	}
});
