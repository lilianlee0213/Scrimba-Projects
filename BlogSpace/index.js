fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
	method: 'GET',
})
	.then((response) => response.json())
	.then((data) => console.log(data.slice(0, 5)));
