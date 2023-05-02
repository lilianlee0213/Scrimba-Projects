fetch('https://apis.scrimba.com/jsonplaceholder/posts')
	.then((response) => response.json())
	.then((data) => {
		const postArr = data.slice(0, 5);
		let html = '';
		for (let post of postArr) {
			html += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
          
            `;
		}
		document.getElementById('post-list').innerHTML = html;
	});

document.getElementById('new-post').addEventListener('submit', (e) => {
	e.preventDefault();
	const postTitle = document.getElementById('post-title').value;
	const postBody = document.getElementById('post-body').value;
	const data = {
		title: postTitle,
		body: postBody,
	};
	console.log(data);
});
