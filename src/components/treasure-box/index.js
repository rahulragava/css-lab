import { React } from 'react';
import './style.css';
import InnerBoxes from './innerBoxes';
import selectBox from './selectBox';



const TreasureBox = () =>
	<div>
		<div>{ selectBox() }</div>
		<div className="container-box">
			{ InnerBoxes() }
		</div>
	</div>;


	export default TreasureBox;
