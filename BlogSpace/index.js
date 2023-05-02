let html = '';
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
	.then((response) => response.json())
	.then((data) => {
		const postArr = data.slice(0, 5);
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
	let postTitle = document.getElementById('post-title').value;
	let postBody = document.getElementById('post-body').value;
	const data = {
		title: postTitle,
		body: postBody,
	};

	fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {'Content-Type': 'application/json'},
	})
		.then((res) => res.json())
		.then((post) => {
			document.getElementById('post-list').innerHTML = `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            ${document.getElementById('post-list').innerHTML}
            `;
		});
});
