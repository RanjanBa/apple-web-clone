import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import { home_link } from './Constants';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<Switch>
					<Route path={home_link}>
						<Home />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
