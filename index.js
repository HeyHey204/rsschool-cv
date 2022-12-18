function setCurrentYear() {
	currentYear = new Date().getFullYear()
	const yearSpan = document.getElementById('year');
	yearSpan.innerText = currentYear;
}

setCurrentYear();