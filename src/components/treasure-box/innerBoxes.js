import { React } from 'react';
import config from '../../core/config';

const { randomNumber } = config;

const boxes = (variable, fixed) =>
	<div
		key={ (fixed - variable) + 1 }
		// eslint-disable-next-line no-magic-numbers
		className={ `treasure-box ${ variable % 2 !== 0 ? 'one' : 'two' }` }
	>
		{ variable === 1 ? fixed : boxes(variable - 1, fixed) }
	</div>
;

const InnerBoxes = () =>
	boxes(randomNumber, randomNumber);

export default InnerBoxes;
