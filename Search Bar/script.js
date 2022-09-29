const searchInput = document.getElementById('searchInput');
const nameList = document.getElementsByClassName('name');

searchInput.addEventListener('keyup', function (event) {
	let findName = event.target.value.toLowerCase();
	for (let i = 0; i < nameList.length; i++) {
		const currentName = nameList[i].textContent.toLowerCase();
		if (currentName.includes(findName)) {
			nameList[i].style.display = 'block';
		} else {
			nameList[i].style.display = 'none';
		}
	}
});

//(5) event가 발생한 value의 값을 findName으로 target하기*********
//(6)nameList 에 있는 모든 list를 구하기
//(7)each list의 textcontent에서 lowercase로 변환후 currentName 지정
//(8) if cuurentName 이 findName(userinput)을 포함(include)한다면,
//(9)<li></li> 를 display를 블락으로 설정
//(11)그렇지 않다면 display를 없음으로 설정 --> hidden 을 준다.
