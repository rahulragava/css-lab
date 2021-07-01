import { React } from 'react';
import './style.css';
import context from '../../core/context';

const selectBox = () =>
	<select
		className="select-style"
		name="selectBox"
		value={ context.state.theme }
		onChange={ (evt) => context.actions.themeSelector(evt.target.value) }
	>
		{ context.seed.boxTheme.map((theme) =>
			<option
				key={ theme }
				value={ theme }
			>
				{ theme }
			</option>) }
	</select>;

export default selectBox;
