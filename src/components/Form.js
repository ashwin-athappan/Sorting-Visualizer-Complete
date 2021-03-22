import React from 'react';
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	FormLabel,
} from '@material-ui/core';

export default function Form({
	formLabel,
	values,
	labels,
	currentValue,
	onChange,
}) {
	return (
		<div className='card container-small'>
			<FormControl>
				<FormLabel>{formLabel}</FormLabel>
				<RadioGroup value={currentValue} onChange={onChange}>
					{values.map((value, index) => {
						return (
							<FormControlLabel
								key={`${value}_${index}`}
								value={value}
								control={<Radio />}
                                label={labels[index]}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
		</div>
	);
}
