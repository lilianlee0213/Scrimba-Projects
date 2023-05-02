document.getElementById('get-activity').addEventListener('click', () => {
	fetch('https://apis.scrimba.com/bored/api/activity')
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('activity').textContent = data.activity;
		});
});
