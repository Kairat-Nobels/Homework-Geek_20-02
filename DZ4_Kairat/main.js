function perevorot(str)
{
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) newStr += str[i];
    return newStr
}
console.log(perevorot("привет"))
// const fn2 = (s) => s.split('').reverse().join('') === s
// console.log(fn2('аргентинаманитнегра'));
function palindrom(str) {
  let check = '';
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str === check;
}
console.log(palindrom('madam'));

var srednee = function ()
{
    var sum = 0
    for (var i = 0; i < arguments.length; i++) sum += arguments[i]
    return sum / arguments.length;
}
console.log(srednee(1,2,3,4))
console.log(srednee(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function transliter(word){
	var answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] === undefined){
            answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
 
	return answer;
}
console.log(transliter('Евгений Киселев'));
function validateInn(inn)
{
    var check = true
    for (var i = 0; i < inn.length; i++) if(inn[i]<'0'|| inn[i]>'9') check = false
    var firstNumber = Number(inn && inn[0]);
    return !!inn && inn.length === 14 && [0, 1, 2].includes(firstNumber) && check;
}
console.log(validateInn("01234567899111")? "INN VALID": "INN ERROR");
console.log(validateInn("012345678991kk")? "INN VALID": "INN ERROR");