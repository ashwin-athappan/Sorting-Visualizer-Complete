export const riseText = (e) => {
	const risetext = document.querySelector('.risetext');
	console.log(risetext);
	const enclose = document.querySelector('.page-header_title-main');
	console.log(enclose);
	const encloseText = Array.from(enclose.innerText.split(''));
	console.log(encloseText);
	let string = encloseText
		.map((x) => {
			if (x === ' ') {
				return `<span class="letter">&nbsp;</span></span><span class="word">`;
			} else {
				return `<span class="letter">${x}</span>`;
			}
		})
		.join('');

	console.log(string);

	string = string.replace(
		'<span class="letter"> </span>',
		'<span class="letter">&nbsp;</span>'
	);
	enclose.innerHTML = `<span class="word">${string}</span>`;

	const letters = Array.from(document.querySelectorAll('.letter'));

	function timeout() {
		setTimeout(function () {
			risetext.classList.toggle('show');
			//timeout();
		}, 500);
	}

	timeout();

	letters.forEach(function (letter, i) {
		const style = `transition-delay: ${50 * i}ms;`;
		letter.setAttribute('style', `${style}`);
	});
};

