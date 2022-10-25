const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

// modalCloseBtn.addEventListener('click', function () {

// });

//modal pops up after 1.5s
setTimeout(function () {
	modal.style.display = 'inline';
}, 1500);

//close modal when closeBtn click
modalCloseBtn.addEventListener('click', function () {
	modal.style.display = 'none';
});

//row-reverse of decline and accept buttons when hovered
declineBtn.addEventListener('mouseenter', function () {
	modalChoiceBtns.classList.toggle('modal-btns-reverse');
});

//prevent default behavior of the form and change of innerHtML with delays
consentForm.addEventListener('submit', function (e) {
	e.preventDefault();

	//form data array
	const consentFormData = new FormData(consentForm);
	//get fullName data from the input name="fullName"
	const fullName = consentFormData.get('fullName');

	modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

	setTimeout(function () {
		document.getElementById('upload-text').innerText = `Making the sale`;
	}, 1500);

	setTimeout(function () {
		document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `;
		//reactivate closeBtn
		modalCloseBtn.disabled = false;
	}, 3000);
});
