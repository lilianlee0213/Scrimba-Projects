const postEl = [
	{
		name: 'Vincent van Gogh',
		username: 'vincey1853',
		location: 'Zundert, Netherlands',
		avatar: 'images/avatar-vangogh.jpg',
		post: 'images/post-vangogh.jpg',
		comment: 'just took a few mushrooms lol',
		likes: 21,
	},
	{
		name: 'Gustave Courbet',
		username: 'gus1819',
		location: 'Ornans, France',
		avatar: 'images/avatar-courbet.jpg',
		post: 'images/post-courbet.jpg',
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: 'Joseph Ducreux',
		username: 'jd1735',
		location: 'Paris, France',
		avatar: 'images/avatar-ducreux.jpg',
		post: 'images/post-ducreux.jpg',
		comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
		likes: 152,
	},
];

const postSection = document.querySelector('.post');
let postdata = '';

for (let i = 0; i < postEl.length; i++) {
	postdata += `
  <div class="header">
      <img class="avatar" src="${postEl[i].avatar}">
      <div class="user-info">
        <h1 class="name bold">${postEl[i].name}</h1>
        <span class="location regular">${postEl[i].location}</span>
      </div>
    </div>
    <div>
      <img class="img" src="${postEl[i].post}">
    </div>
    <div class="content">
      <div class="button-wrapper">
          <img class="heart-icon icon" src="./images/icon-heart.png" alt="heart">
          <img class="comment-icon icon" src="./images/icon-comment.png" alt="comment">
          <img class="dm-icon icon" src="./images/icon-dm.png" alt="direct message">
      </div>
      <div class="likes-wrapper">
					<span class="total-likes bold">${postEl[i].likes}</span>
					<h6 class="bold">likes</h6>
			</div>
			
      <div class="post-desc">
        <h1 class="username bold">${postEl[i].username}</h1>
        <span class="comment regular">${postEl[i].comment}</span>
      </div>
    </div>
    `;
}
postSection.innerHTML = postdata;

const contents = document.querySelectorAll('.content');

contents.forEach(function (content) {
	const heartBtn = content.querySelector('.heart-icon');
	heartBtn.addEventListener('click', function () {
		const totalLikes = content.querySelector('.total-likes');
		let likeEl = Number(totalLikes.textContent);
		likeEl++;
		totalLikes.textContent = likeEl;
	});
});
