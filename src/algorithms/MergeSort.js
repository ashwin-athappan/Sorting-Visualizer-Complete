import { insertStep } from './helpers';

const mergeSort = (array, position, arraySteps, colorSteps) => {
	if (array.length === 1) return array;
	let mid = Math.floor(array.length / 2);

	let L = mergeSort(array.slice(0, mid), position, arraySteps, colorSteps);
	let R = mergeSort(array.slice(mid), position + mid, arraySteps, colorSteps);

	let arrayNew = merge(L, R, position, arraySteps, colorSteps);
	arraySteps.push(arraySteps[arraySteps.length - 1].slice());
	colorSteps.push(
		colorSteps[colorSteps.length - 1]
			.slice()
			.fill(arrayNew.length === arraySteps[0].length ? 2 : 0)
	);
	return arrayNew;
};

const merge = (L, R, position, arraySteps, colorSteps) => {
	let arrayNew = [];
	let A = 0;
	let B = 0;

	while (L.length > 0 && R.length > 0) {
		if (L[A] < R[B]) {
			arrayNew.push(L.shift());
			insertStep(arrayNew, position, arraySteps);
		} else {
			arrayNew.push(R.shift());
			insertStep(arrayNew, position, arraySteps);
		}
		updateColor(position, colorSteps, arrayNew.length - 1, [], []);
	}


	if (L.length !== 0 || R.length !== 0) {
		updateColor(position, colorSteps, arrayNew.length, L, R);
		arrayNew = arrayNew.concat(L);
		arrayNew = arrayNew.concat(R);
		insertStep(arrayNew, position, arraySteps);
	}

	return arrayNew;
};

const updateColor = (position, colorSteps, start, L, R) => {
	let colorKey = colorSteps[colorSteps.length - 1].slice();
	let end = position + start + L.length + R.length;
	start = start + position;

	if (end === start) {
		colorKey.fill(1, start, end + 1);
	} else {
		colorKey.fill(0, start, end);
	}
	colorSteps.push(colorKey);
};

export default mergeSort;
