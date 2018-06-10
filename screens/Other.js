import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import Caption from '../components/Caption';
import * as firebase from 'firebase';

// Init Firebase
var config = {
	apiKey: 'AIzaSyAyT5_4_5vfeNlOMM9koaCWM3wa629apZg',
	authDomain: 'gallery-example.firebaseapp.com',
	databaseURL: 'https://gallery-example.firebaseio.com',
	projectId: 'gallery-example',
	storageBucket: '',
	messagingSenderId: '967342578266'
};
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const firebaseDB = firebaseApp.database();

export default class Other extends Component {
	state = {
		list: []
	};

	listenForItems = (itemsRef) => {
		itemsRef.ref('Topics').on('value', (snap) => {
			let items = [];
			snap.forEach((child) => {
				items.push({
					title: child.key,
					caption: child.val()
				});
			});
			console.log('Items: ', items);
			this.setState({ list: items });
		});
	};

	componentDidMount() {
		this.listenForItems(firebaseDB);
	}

	// Render captions
	_renderCaptions = ({ item }) => <Caption id={item.id} title={item.title} text={item.caption} />;

	// Set an incremental id to items
	_keyExtractor = (item, index) => {
		item.id = index;
		return String(item.id);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList data={this.state.list} renderItem={this._renderCaptions} keyExtractor={this._keyExtractor} />
			</View>
		);
	}
}

Other.navigationOptions = ({ navigation }) => {
	return {
		title: 'Other',
		headerStyle: {
			backgroundColor: 'coral'
		},
		headerTintColor: 'white',
		headerLeft: (
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Ionicons style={{ paddingHorizontal: 15 }} name="ios-arrow-back" size={26} color="white" />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight - 25,
		backgroundColor: '#2f3542'
	}
});
