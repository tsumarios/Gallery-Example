import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import * as firebase from 'firebase';

export default class Login extends Component {
	state = {
		isLoading: false,
		email: 'foo@bar.com',
		password: 'foobar',
		error: ''
	};

	_onLogin = () => {
		this.setState({ isLoading: true });
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then((user) => {
				this.setState({ isLoading: false });
				console.log('User', user, 'logged!');
				this.props.navigation.navigate('Search');
			})
			.catch((error) => {
				this.setState({ isLoading: false, error: error.message });
			});
	};

	_onSignUp = () => {
		this.setState({ isLoading: true });
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then((user) => {
				this.setState({ isLoading: false });
				console.log('User', user, 'registered!');
				this.props.navigation.navigate('Search');
			})
			.catch((error) => {
				this.setState({ isLoading: false, error: error.message });
			});
	};

	renderButtons() {
		return (
			<View style={{ justifyContent: 'space-around', height: 110, marginTop: 25 }}>
				<Button
					loading={this.state.isLoading}
					raised
					backgroundColor={'#2f3542'}
					color={'coral'}
					title="Login"
					onPress={this._onLogin}
				/>
				<Button
					raised
					loading={this.state.isLoading}
					backgroundColor={'#2f3542'}
					color={'coral'}
					title="Register"
					onPress={this._onSignUp}
				/>
			</View>
		);
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<Card>
					<FormLabel>E-mail</FormLabel>
					<FormInput
						label="E-mail"
						placeholder="Enter your e-mail"
						onChangeText={(text) => this.setState({ email: text })}
					/>

					<FormLabel>Password</FormLabel>
					<FormInput
						secureTextEntry
						label="Password"
						placeholder="Enter your password"
						onChangeText={(pwd) => this.setState({ password: pwd })}
					/>

					{this.renderButtons()}
					<Text style={{ color: 'red', alignSelf: 'center', fontSize: 20, padding: 20 }}>
						{this.state.error}
					</Text>
				</Card>
			</KeyboardAvoidingView>
		);
	}
}

Login.navigationOptions = ({ navigation }) => {
	return {
		title: 'Login',
		headerStyle: {
			backgroundColor: 'coral'
		},
		headerTintColor: 'white'
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#2f3542'
	}
});
