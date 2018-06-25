import { StackNavigator } from 'react-navigation';
import Login from './screens/Login';
import Search from './screens/Search';
import Home from './screens/Home';
import Other from './screens/Other';

const App = StackNavigator(
	{
		Login: {
			screen: Login
		},
		Search: {
			screen: Search
		},
		Home: {
			screen: Home
		},
		Other: {
			screen: Other
		}
	},
	{
		initialRouteName: 'Login'
	}
);

export default App;
