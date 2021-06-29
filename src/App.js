import { React } from 'react';
import './App.css';
// import LogoPane from './components/logo';
import TreasureBox from './components/treasure-box';

const App = () =>
	<div className="App">
		{ TreasureBox() }
	</div>
;

export default App;

// { LogoPane() }
