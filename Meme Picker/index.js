const catsData = [
	{
		emotionTags: ['moody'],
		isGif: false,
		image: 'angry.jpeg',
		alt: 'A cat looking moody',
	},
	{
		emotionTags: ['moody', 'insomniac'],
		isGif: false,
		image: 'angry2.jpeg',
		alt: 'A cat looking moody',
	},
	{
		emotionTags: ['moody'],
		isGif: false,
		image: 'angry3.jpeg',
		alt: 'A cat looking moody',
	},
	{
		emotionTags: ['confused', 'sad'],
		isGif: false,
		image: 'confused.jpeg',
		alt: 'A cat looking confused',
	},
	{
		emotionTags: ['dominant', 'moody'],
		isGif: false,
		image: 'dominant.jpeg',
		alt: 'A cat looking dominant',
	},
	{
		emotionTags: ['happy', 'relaxed'],
		isGif: false,
		image: 'happy.jpeg',
		alt: 'A cat looking happy',
	},
	{
		emotionTags: ['hungry'],
		isGif: false,
		image: 'hungry.jpeg',
		alt: 'A cat looking hungry',
	},
	{
		emotionTags: ['hungry'],
		isGif: false,
		image: 'hungry1.jpeg',
		alt: 'A cat looking hungry',
	},
	{
		emotionTags: ['insomniac'],
		isGif: false,
		image: 'insomnia.jpeg',
		alt: 'A cat looking insomniac',
	},
	{
		emotionTags: ['insomniac'],
		isGif: false,
		image: 'insomnia1.jpeg',
		alt: 'A cat looking insomniac',
	},
	{
		emotionTags: ['relaxed'],
		isGif: false,
		image: 'lazy.jpeg',
		alt: 'A cat looking lazy',
	},
	{
		emotionTags: ['scared'],
		isGif: false,
		image: 'nervous.jpeg',
		alt: 'A cat looking nervous',
	},
	{
		emotionTags: ['sad'],
		isGif: false,
		image: 'sad.jpeg',
		alt: 'A cat looking sad',
	},
	{
		emotionTags: ['sad', 'moody'],
		isGif: false,
		image: 'sad1.jpeg',
		alt: 'A cat looking sad',
	},
	{
		emotionTags: ['moody'],
		isGif: true,
		image: 'angry.gif',
		alt: 'A cat looking moody',
	},
	{
		emotionTags: ['moody'],
		isGif: true,
		image: 'angry2.gif',
		alt: 'A cat looking angry',
	},
	{
		emotionTags: ['confused'],
		isGif: true,
		image: 'confused2.gif',
		alt: 'A cat looking confused',
	},
	{
		emotionTags: ['dominant'],
		isGif: true,
		image: 'dominant.gif',
		alt: 'A cat looking dominant',
	},
	{
		emotionTags: ['happy'],
		isGif: true,
		image: 'happy.gif',
		alt: 'A cat looking happy',
	},
	{
		emotionTags: ['hungry', 'sad', 'confused'],
		isGif: true,
		image: 'confused.gif',
		alt: 'A cat looking hungry',
	},
	{
		emotionTags: ['hungry'],
		isGif: true,
		image: 'hungry.gif',
		alt: 'A cat looking hungry',
	},
	{
		emotionTags: ['hungry'],
		isGif: true,
		image: 'hungry2.gif',
		alt: 'A cat looking hungry',
	},
	{
		emotionTags: ['insomniac', 'scared'],
		isGif: true,
		image: 'insomnia2.gif',
		alt: 'A cat looking insomniac',
	},
	{
		emotionTags: ['relaxed'],
		isGif: true,
		image: 'lazy.gif',
		alt: 'A cat looking relaxed',
	},
	{
		emotionTags: ['relaxed'],
		isGif: true,
		image: 'relaxed2.gif',
		alt: 'A cat looking relaxed',
	},
	{
		emotionTags: ['scared', 'sad'],
		isGif: true,
		image: 'nervous.gif',
		alt: 'A cat looking nervous',
	},
	{
		emotionTags: ['scared'],
		isGif: true,
		image: 'nervous2.gif',
		alt: 'A cat looking scared',
	},
	{
		emotionTags: ['sad'],
		isGif: true,
		image: 'sad.gif',
		alt: 'A cat looking sad',
	},
];
const emotionRadio = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-image-btn');
const gifsOnlyOption = document.getElementById('gifs-only-option');
const memeModalInner = document.getElementById('meme-modal-inner');
const memeModal = document.getElementById('meme-modal');
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn');

emotionRadio.addEventListener('change', highlightCheckedOption);
getImageBtn.addEventListener('click', renderCat);
memeModalCloseBtn.addEventListener('click', closeModal);

function highlightCheckedOption(e) {
	// remove all instances of the highlight class
	const radiosArray = document.getElementsByClassName('radio');
	for (let radio of radiosArray) {
		radio.classList.remove('highlight');
	}
	// only selected
	document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

// use the cat object provided by getSingleCatObject to create Html string
function renderCat() {
	const catObject = getSingleCatObject();
	memeModalInner.innerHTML = `
	<img class="cat-img" src="./images/${catObject.image}" alt="${catObject.alt}">
	`;
	memeModal.style.display = 'flex';
}

// return a single cat object selected from the array provided by getMatchingCatsArray
function getSingleCatObject() {
	const catsArray = getMatchingCatsArray();
	if (catsArray.length === 1) {
		return catsArray[0];
	} else {
		const randomNumber = Math.floor(Math.random() * catsArray.length);
		return catsArray[randomNumber];
	}
}

// returns an array of cat objects that matches the user's criteria
function getMatchingCatsArray() {
	// allows to get image (button) only when input selected
	if (document.querySelector('input[type="radio"]:checked')) {
		const selectedEmotion = document.querySelector(
			'input[type="radio"]:checked'
		).value;
		// Gifs Checkbox
		const isGif = gifsOnlyOption.checked;

		const matchingCatsArray = catsData.filter(function (cats) {
			if (isGif) {
				return cats.emotionTags.includes(selectedEmotion) && cats.isGif;
			} else {
				return cats.emotionTags.includes(selectedEmotion);
			}
		});
		return matchingCatsArray;
	}
}

function getEmotionsArray(cats) {
	const emotionsArray = [];
	for (let cat of cats) {
		for (let emotion of cat.emotionTags) {
			// remove duplicates
			if (!emotionsArray.includes(emotion)) {
				emotionsArray.push(emotion);
			}
		}
	}
	return emotionsArray;
}

function renderEmotionsRadios(cats) {
	let radioItems = '';
	const emotions = getEmotionsArray(cats);
	for (let emotion of emotions) {
		radioItems += `
        <div class="radio">
            <label for "${emotion}">${emotion}</label>
            <input 
            type="radio" 
            id="${emotion}" 
            value="${emotion}" 
            name="emotions"
            >
        </div>`;
	}
	emotionRadio.innerHTML = radioItems;
}
renderEmotionsRadios(catsData);

function closeModal() {
	memeModal.style.display = 'none';
	resetChoices();
}

function resetChoices() {
	const checkedRadio = document.querySelector('input[type="radio"]:checked');
	if (checkedRadio) {
		checkedRadio.checked = false;
		checkedRadio.parentElement.classList.remove('highlight');
	}
	if (gifsOnlyOption.checked) {
		gifsOnlyOption.checked = false;
	}
}
