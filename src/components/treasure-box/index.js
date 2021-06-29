import { React } from 'react';
import './style.css';
import InnerBoxes from './innerBoxes';



const TreasureBox = () =>
	<div className="container-box">
		{ InnerBoxes() }
	</div>;


export default TreasureBox;

