let Name = prompt('Введите ваше имя')
let fam = prompt('Введите вашу фамилию')
alert('Здраствуйте, '+ fam + Name)
a = Number(prompt('Введите первое число'));
b = Number(prompt('Введите второе число'));
max = function ()
{
	if (isNaN(a) || isNaN(b)) console.log("Вы должны ввести числа!");
	else {
		if (a > b) console.log(a)
        else if (a === b) console.log('Числа равны')
        else console.log(b);
	} 
}
max();

let color = prompt('Введите цвет светофора: (Красный, Жёлтый, Зеленный').toLowerCase()
switch (color) {
    case "красный":
    case "red":
        console.log('Стой!');
        break;
    case "желтый":
    case "жёлтый":
    case "yellow":
        console.log('Жди!');
        break;
    case "зеленный":
    case "зеленый":
    case "зелённый":
    case "зелёный":
    case "green":
        console.log('Иди!');
        break;
    default:
        console.log('Вы должны были ввести цвет светофора: (Красный, Жёлтый, Зеленный');
        break;
}