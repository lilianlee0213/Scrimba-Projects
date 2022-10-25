const generateBtn = document.getElementById('generate-btn');
const passwordOne = document.getElementById('password-one');
const passwordTwo = document.getElementById('password-two');

const charactersEl = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];
const lettersAndNumbersEl = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
];
const numbersAndSymbolsEl = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

const characters8 = document.getElementById('8-characters');
const characters12 = document.getElementById('12-characters');
const characters15 = document.getElementById('15-characters');
characters12.checked = false;
characters15.checked = false;

const lettersandNumbers = document.getElementById('letters-numbers');
const numbersandSymbols = document.getElementById('numbers-symbols');
const includeAll = document.getElementById('include-all');
lettersandNumbers.checked = false;
numbersandSymbols.checked = false;

//Generate button Events---------------
generateBtn.addEventListener('click', function () {
	passwordOne.textContent = '';
	passwordTwo.textContent = '';
	handleGeneratBtn();
	passwordOne.style.color = '#2ecc71';
	passwordTwo.style.color = '#2ecc71';
});

//Generate Button Options------------
function handleGeneratBtn() {
	//8 Characters (default)
	if (characters8.checked === true) {
		for (let i = 0; i < 8; i++) {
			if (includeAll.checked === true) {
				handleIncludeAll();
			} else if (lettersandNumbers.checked === true) {
				handleChkBox1();
			} else if (numbersandSymbols.checked === true) {
				handleChkBox2();
			}
		}
	} //12 Characters
	else if (characters12.checked === true) {
		for (let i = 0; i < 12; i++) {
			if (includeAll.checked === true) {
				handleIncludeAll();
			} else if (lettersandNumbers.checked === true) {
				handleChkBox1();
			} else if (numbersandSymbols.checked === true) {
				handleChkBox2();
			}
		}
	} //15 Characters
	else if (characters15.checked === true) {
		for (let i = 0; i < 15; i++) {
			if (includeAll.checked === true) {
				handleIncludeAll();
			} else if (lettersandNumbers.checked === true) {
				handleChkBox1();
			} else if (numbersandSymbols.checked === true) {
				handleChkBox2();
			}
		}
	}
}

//User Preferences on Character Selections-----------
//Include All Characters (default)
function handleIncludeAll() {
	let randomCharacterSet1 = Math.floor(Math.random() * charactersEl.length);
	let randomCharacterSet2 = Math.floor(Math.random() * charactersEl.length);
	passwordOne.textContent += charactersEl[randomCharacterSet1];
	passwordTwo.textContent += charactersEl[randomCharacterSet2];
}
//Include only Letters and Numbers
function handleChkBox1() {
	let randomCharacterSet1 = Math.floor(
		Math.random() * lettersAndNumbersEl.length
	);
	let randomCharacterSet2 = Math.floor(
		Math.random() * lettersAndNumbersEl.length
	);
	passwordOne.textContent += lettersAndNumbersEl[randomCharacterSet1];
	passwordTwo.textContent += lettersAndNumbersEl[randomCharacterSet2];
}
//Include only Numbers and Symbols
function handleChkBox2() {
	let randomCharacterSet1 = Math.floor(
		Math.random() * numbersAndSymbolsEl.length
	);
	let randomCharacterSet2 = Math.floor(
		Math.random() * numbersAndSymbolsEl.length
	);
	passwordOne.textContent += numbersAndSymbolsEl[randomCharacterSet1];
	passwordTwo.textContent += numbersAndSymbolsEl[randomCharacterSet2];
}

//Copied

const copiedBtn1 = document.getElementById('clipboard-icon1');
const copiedBtn2 = document.getElementById('clipboard-icon2');
