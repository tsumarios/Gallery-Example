import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Other from './screens/Other';

const App = StackNavigator(
	{
		Home: {
			screen: Home
		},
		Other: {
			screen: Other
		}
	},
	{
		initialRouteName: 'Home'
	}
);

export default App;
