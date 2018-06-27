import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Card extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={this.props.img} style={styles.image} />
				<View style={styles.containerText}>
					<Text style={styles.text}> {this.props.title} </Text>
					<TouchableOpacity onPress={this.props.onLiked} style={styles.containerIcons}>
						{this.props.liked ? (
							<Feather name="heart" size={24} color="coral" />
						) : (
							<Feather name="heart" size={24} color="#a4b0be" />
						)}
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 350,
		lineHeight: 350,
		backgroundColor: '#dfe4eal',
		borderTopWidth: 16,
		borderColor: '#a4b0be'
	},
	image: {
		flex: 5,
		width: '100%',
		height: 300,
		resizeMode: 'cover'
	},
	containerText: {
		flex: 1,
		flexDirection: 'row',
		padding: 10
	},
	text: {
		flex: 2,
		alignSelf: 'center',
		fontSize: 16,
		color: '#dfe4ea'
	},
	containerIcons: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		padding: 10
	}
});
