import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';

import Card from '../components/Card';

const initCardsList = [
	{
		title: 'B&W',
		img: { uri: 'https://source.unsplash.com/featured/?black' },
		liked: false
	},
	{
		title: 'Technology is amazing!',
		img: { uri: 'https://source.unsplash.com/featured/?computers' },
		liked: false
	},
	{
		title: 'Landscapes...',
		img: { uri: 'https://source.unsplash.com/featured/?landscape' },
		liked: false
	},
	{
		title: 'Art is lifestyle',
		img: { uri: 'https://source.unsplash.com/featured/?art' },
		liked: false
	},
	{
		title: 'Science never lies.',
		img: { uri: 'https://source.unsplash.com/featured/?science' },
		liked: false
	},
	{
		title: 'Music is my best friend',
		img: { uri: 'https://source.unsplash.com/featured/?music' },
		liked: false
	},
	{
		title: 'Movies!',
		img: { uri: 'https://source.unsplash.com/featured/?movie' },
		liked: false
	},
	{
		title: 'People...',
		img: { uri: 'https://source.unsplash.com/featured/?people' },
		liked: false
	},
	{
		title: 'Gamer life',
		img: { uri: 'https://source.unsplash.com/featured/?games' },
		liked: false
	},
	{
		title: 'Love!',
		img: { uri: 'https://source.unsplash.com/featured/?love' },
		liked: false
	},
	{
		title: 'Photography is an art',
		img: { uri: 'https://source.unsplash.com/featured/?photography' },
		liked: false
	}
];

export default class Home extends Component {
	state = {
		cardsList: initCardsList
	};

	_onLiked = () => {
		let lTopics = [];
		let updatedList = this.state.cardsList;
		updatedList.map((item) => {
			item.liked = !item.liked;
			if (item.liked) lTopics.push(item.topic);
		});
		this.setState({ cardsList: updatedList, likedTopics: lTopics });
	};

	// Render cards
	_renderCards = ({ item }) => (
		<Card id={item.id} title={item.title} img={item.img} liked={item.liked} onLiked={this._onLiked} />
	);

	// Set an incremental id to items
	_keyExtractor = (item, index) => {
		item.id = index;
		return String(item.id);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.cardsList}
					renderItem={this._renderCards}
					keyExtractor={this._keyExtractor}
				/>
				<View style={{ height: 16, backgroundColor: '#a4b0be' }} />
			</View>
		);
	}
}

Home.navigationOptions = ({ navigation }) => {
	return {
		title: 'Home',
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
			<TouchableOpacity onPress={() => navigation.navigate('Other')}>
				<Ionicons style={{ paddingHorizontal: 15 }} name="ios-arrow-forward" size={26} color="white" />
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
