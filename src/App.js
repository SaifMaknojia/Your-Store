import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Link } from 'react-router-dom';
import MenuItems from './components/menuItem/MenuItems';

const HatsPage = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	)
}


function App() {
	return (
		<div>
			<Route path="/hats" component={HatsPage} />
			<Route exact path="/" component={HomePage} />
			{/* <HomePage /> */}
		</div>
	);
}

export default App;
