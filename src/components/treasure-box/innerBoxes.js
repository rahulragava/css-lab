import { React } from 'react';
import config from '../../core/config';
import context from '../../core/context';

const { randomNumber } = config;

const colorNumbers = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
];

// eslint-disable-next-line complexity
const boxes = (variable) =>
	<div
		// key={ (fixed - variable) + 1 }
		// eslint-disable-next-line no-magic-numbers
		className={ `treasure-box ${ context.state.theme }-${ context.state.theme === 'zebra' ? variable % 2 !== 0 ? 'one' : 'two' : colorNumbers[variable - 1] } ` }
	>
		{ variable === 1
			? randomNumber
			: boxes(variable - 1) }
	</div>
;

const InnerBoxes = () =>
	boxes(randomNumber);

export default InnerBoxes;
