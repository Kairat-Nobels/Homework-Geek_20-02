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