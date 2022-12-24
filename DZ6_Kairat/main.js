// авторизация
const names = document.querySelector('.name')
const password = document.querySelector('.password')
const btn = document.querySelector('button')
const rez = document.querySelector('.rezult')
function Account(login, userName, pass)
{
    this.login = login;
    this.userName = userName;
    this.password = pass
}
btn.disabled = true
let accounts = [
    new Account('Kaira', 'Joloi yyly Kairat', 'data17'),
    new Account('Alesha', 'Akbaraliev Alisher', 'leha0909'),
    new Account('Nuradin', 'Djumabekov Nurdin', 'parol')
];
const chekAccount = () =>
{
    let mayde = false
    for (let el of accounts) {
        if ((names.value.trim() === el.login)) {
            rez.innerHTML = 'Добро пожаловать'+'<br>' +'Mr. ' + el.userName;
            rez.style.color = 'green'
            names.value = ''
            password.value = ''
            mayde = true
        }   
    }
    if (mayde === false) {
        rez.innerText = 'Ошибка авторизации!!!'
        rez.style.color = 'red'
    }
}
password.oninput = () =>
{
    if (names.value !== '' || password.value !== '') btn.disabled = false
}
btn.onclick = () => chekAccount()
password.onkeydown = e =>{
    if (e.keyCode === 13) chekAccount()
}

// задания
const mean = function ()
{
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) sum += arguments[i]
    return sum/arguments.length
}
console.log(mean(5, 4, 8, 1))
let inn = prompt('Введите ваш ИНН')
const chek = function (inn)
{
    let cheks = true
    if ((inn[0] === '1' || inn[0] === '2') && inn.length === 14) {
        for (let i = 0; i < inn.length; i++) {
            if (inn[i] < '0' || inn[i] > '9') {
                cheks = false;
                break;
            }
        }
    }
    else cheks = false;
    return cheks;
}
console.log(chek(inn) === true ? 'inn falid' : 'inn not falid');