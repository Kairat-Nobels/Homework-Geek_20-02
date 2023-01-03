let kart = {
    nomKairt: '000000000',
    data: '22/02/2023',
    name: 'Kaira',
    typeKart: 'visa',
    CVC: 132
}
console.log(kart)



// console.log('\t\t\tЗадание №4 Римские цифры')
// let num = Number(prompt('Введите число от 1 до 9'))
// switch (num) {
//     case 1:
//         console.log('Результат = I')
//         break;
//     case 2:
//         console.log('Результат = II')
//         break;
//     case 3:
//         console.log('Результат = III')
//         break;
//     case 4:
//         console.log('Результат = IV')
//         break;
//     case 5:
//         console.log('Результат = V')
//         break;
//     case 6:
//         console.log('Результат = VI')
//         break;
//     case 7:
//         console.log('Результат = VII')
//         break;
//     case 8:
//         console.log('Результат = VIII')
//         break;
//     case 9:
//         console.log('Результат = IX')
//         break;

//     default:
//         console.log('Вы должны ввести число от 1 до 9')
//         break;
// }

// console.log('\t\t\tЗадание №5 Физ/Юр лицо')
// let customerType = Number(prompt("Выберите тип персонажа: 1 = Физическое лицо, 2 = Юридическое лицо"))
// customerType === 1 ? console.log('Физическое лицо') : customerType === 2 ? console.log('Юридическое лицо') : console.log('Вы должны ввести или 1 или 2')

//


// pervoe 
let tringle = e =>
{
    let str = '*'
    for (let i = 1; i <= 7; i++) {
        console.log(str)
        str += '*'
    }
}
// vtoroe
tringle()
let FizzBuzz = function ()
{
    let arr = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz')
        else if (i % 3 === 0) arr.push('Fizz')
        else if (i % 5 === 0) arr.push('Buzz')
        else arr.push(i)
    }
    return console.log(arr)
}
FizzBuzz()
// tretie
let CountChar = function(slovo, s){
    count = 0;
    let ss = s.toLowerCase()
    let word = slovo.toLowerCase()
    for (let item of word) {
        if(item === ss) count++
    }
    console.log('Количестo символа ('+ s+') в слове '+ slovo + ' = ', count)
}
CountChar("AvraKedavrA", "A")


// четвертое
function CapitalizeString(str)
{
    str = str.toLowerCase()
    if (str === '' || str === ' ') console.log(str)
    else {
        str = str[0].toUpperCase() + str.substring(1)
        console.log(str)
    }
  
}
CapitalizeString("еВГЕНИЙ")
CapitalizeString(" ")

function capitalize(str)
{
    str = str.toLowerCase()
    let x = "";
    for (i = 0; i < str.length; i++) {
        if (str[i - 1] === " " || i === 0) {
        x += str[i].toUpperCase();
        } else {
            x += str[i];
        }
    }
    str = x;
    console.log(str)
}
let word = prompt('Ваше ФИО:')
if (word.length > 0) {
    capitalize(word) 
}
capitalize('еВГЕНИЙ киСеЛеВ')



// function perevorot(str)
// {
//     var newStr = "";
//     for (var i = str.length - 1; i >= 0; i--) newStr += str[i];
//     return newStr
// }
// console.log(perevorot("привет"))
// // const fn2 = (s) => s.split('').reverse().join('') === s
// // console.log(fn2('аргентинаманитнегра'));
// function palindrom(str) {
//   let check = '';
//   for (let i = str.length - 1; i >= 0; --i) {
//     check += str[i];
//   }
//   return str === check;
// }
// console.log(palindrom('madam'));n  

// var srednee = function ()
// {
//     var sum = 0
//     for (var i = 0; i < arguments.length; i++) sum += arguments[i]
//     return sum / arguments.length;
// }
// console.log(srednee(1,2,3,4))
// console.log(srednee(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// function transliter(word){
// 	var answer = '';
// 	var converter = {
// 		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
// 		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
// 		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
// 		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
// 		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
// 		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
// 		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
// 		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
// 		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
// 		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
// 		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
// 		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
// 		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
// 		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
// 	};
 
// 	for (var i = 0; i < word.length; ++i ) {
// 		if (converter[word[i]] === undefined){
//             answer += word[i];
// 		} else {
// 			answer += converter[word[i]];
// 		}
// 	}
 
// 	return answer;
// }
// console.log(transliter('Евгений Киселев'));

// function validateInn(inn)
// {
//     var check = true
//     for (var i = 0; i < inn.length; i++) if(inn[i]<'0'|| inn[i]>'9') check = false
//     var firstNumber = Number(inn && inn[0]);
//     return !!inn && inn.length === 14 && [0, 1, 2].includes(firstNumber) && check;
// }
// console.log(validateInn("01234567899111")? "INN VALID": "INN ERROR");
// console.log(validateInn("012345678991kk")? "INN VALID": "INN ERROR");

// a = Number(prompt('Введите первое число'));
// b = Number(prompt('Введите второе число'));

// max = function ()
// {
// 	if (isNaN(a) || isNaN(b)) console.log("Вы должны ввести числа!");
// 	else {
// 		if (a > b){
//         console.log(a)
// 		} else if (a === b){
// 			console.log('Числа равны')
// 		} else {
// 			console.log(b);
// 		}
// 	}
    
// }

// max();

 