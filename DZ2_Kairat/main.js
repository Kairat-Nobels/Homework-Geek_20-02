console.log('\t\t\tЗадание №1 Объект банковской карты')
let kart = {
    nomKairt: '000000000',
    data: '22/02/2023',
    name: 'Kaira',
    typeKart: 'visa',
    CVC: 132
}
console.log(kart)

console.log('\t\t\tЗадание №2 Объект банковского филиала')
let bank = {
    kod: '9964132132132',
    name: 'BaiTyshym',
    time: '09:00 - 19:00',
    evening: false,
    adress: {
        city: "Bishkek",
        street: "Chuy",
        dom: "87"
    }
}
console.log(bank)

console.log('\t\t\tЗадание №3 Система перевода денег')
const system = 'MoneyGram';
switch (system) {
  case "MoneyGram":
    console.log("Get balance from MoneyGram");
    break;
  case "RIA":
    console.log("Get balance from RIA");
    break;
  case "Contact":
    console.log("Get balance from Contact");
    break;
  case "Unistream":
    console.log("Get balance from Unistream");
    break;
  default:
    console.log("Invalid card processing");
}

console.log('\t\t\tЗадание №4 Римские цифры')
let num = Number(prompt('Введите число от 1 до 9'))
switch (num) {
    case 1:
        console.log('Результат = I')
        break;
    case 2:
        console.log('Результат = II')
        break;
    case 3:
        console.log('Результат = III')
        break;
    case 4:
        console.log('Результат = IV')
        break;
    case 5:
        console.log('Результат = V')
        break;
    case 6:
        console.log('Результат = VI')
        break;
    case 7:
        console.log('Результат = VII')
        break;
    case 8:
        console.log('Результат = VIII')
        break;
    case 9:
        console.log('Результат = IX')
        break;

    default:
        console.log('Вы должны ввести число от 1 до 9')
        break;
}

console.log('\t\t\tЗадание №5 Физ/Юр лицо')
let customerType = Number(prompt("Выберите тип персонажа: 1 = Физическое лицо, 2 = Юридическое лицо"))
customerType === 1 ? console.log('Физическое лицо') : customerType === 2 ? console.log('Юридическое лицо') : console.log('Вы должны ввести или 1 или 2')