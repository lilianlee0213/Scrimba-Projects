const slides = document.getElementsByClassName('carousel-item');
const prevBtn = document.getElementById('carousel-button-prev');
const nextBtn = document.getElementById('carousel-button-next');
let slidePosition = 0;
const totalSlides = slides.length;

function hideSlides() {
	for (let slide of slides) {
		slide.classList.remove('carousel-item-visible'); //slide를 보이지 않게 한다
		slide.classList.add('carousel-item-hidden'); //slide를 보이게 한다
	}
}

nextBtn.addEventListener('click', function () {
	hideSlides();
	if (slidePosition === totalSlides - 1) {
		// console.log(slidePosition, totalSlides - 1);
		//---->(2,2) 마지막 슬라이드 일때 [0,1,2]
		slidePosition = 0; //다시 처음으로 돌아간다.
	} else {
		slidePosition++;
		//increment 반복
	}
	slides[slidePosition].classList.add('carousel-item-visible');
});

prevBtn.addEventListener('click', function () {
	hideSlides();
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
		// 처음 슬라이드 일때 마지막 슬라이드로 나타내기
	} else {
		slidePosition--;
		//첫 슬라이드가 아닐때 계속 decrement
	}
	slides[slidePosition].classList.add('carousel-item-visible');
});
