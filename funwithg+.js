let allDivs = document.querySelectorAll('.gLa');
for (let item = 0; item < allDivs.length; item++) {
	if (!allDivs[item].querySelector('.Cta')) {
		let name = allDivs[item].querySelector('.ZUb').text,
			link = allDivs[item].querySelector('.ZUb').href;
		console.log(name + ' ||| ' + link)
	}
}