// first half
const numbers = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7]
console.log('\t\tNumbers:\n', numbers);
let maps = numbers.map(num=>num*5)
console.log('\t\tMaps: *5\n', maps);
console.log('filter: \n', numbers.filter(num => num > 0));
let maxNum = numbers.reduce((a, b) => a < b ? b : a)
console.log('Maximum = ', maxNum);
let minNum = numbers.reduce((a, b) => a > b ? b : a)
console.log('Minimum = ', minNum);
// second half
const people = ["алиса", "ЖЕНЯ","жОЛОй уулу каЙрат", "артем", "ПАВЕЛ", "ЖАКШЫЛЫК", "антон", "айсулуу", "канаим"]
const newPeople = people.map((str) =>
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
    return str;
})
console.log(newPeople);
const latinPeople = newPeople.map(word =>
{
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
})
console.log(latinPeople);
console.log(newPeople.filter(name => name[0] === 'А'));
const maxLenName = newPeople.reduce((a, b) => a.length < b.length ? b : a)
console.log('Name with maximum length = ', maxLenName);
// third half
console.log('\n\t\t\tCars\n');
function Car(brand, model, country, year, volume) {
    this.Brand = brand
    this.Model = model
    this.Country = country
    this.Year = year
    this.EngineVolume = volume
}
const cars = [
    new Car('Volkswagen', 'Golf IV', 'Germany', 2002, 2.0),
    new Car('Toyota', 'Camry 55 SE', 'Japan', 2017, 2.4),
    new Car('Toyota', 'LAND CRUISER 300', 'Japan', 2019, 3.3),
    new Car('Toyota', 'Matrix Xr', 'Japan', 2004, 1.8),
    new Car('Toyota', 'Prius', 'Japan', 2010, 2.0),
    new Car('BMW', 'X5 f15', 'Germany', 2016, 3.0),
    new Car('AUDI', 'Q5', 'Germany', 2002, 3.0),
    new Car('Mersedes-Benz', '211', 'Germany', 2005, 2.0),
    new Car('Hyndai', 'Sonata', 'Japan', 2014, 2.2),
    new Car('LEXUS', 'RX350', 'USA', 2019, 3.5),
    new Car('SUBARU', 'Forester', 'Japan', 2016, 2.5)
]
const printCar = cars.map(car =>
{
    let str = ''
    str += car.Brand + " " + car.Model + " " + car.EngineVolume + "L (" + car.Year + ")";
    return str
})
printCar.forEach(element => {
    console.log(element);
});
let carsVol3 = cars.filter(a => a.EngineVolume >= 3.0);
console.log("\n\t\t\tCars which EngineVolume >= 3.0");
carsVol3.forEach(e => console.log(e))
const oldCar = cars.reduce((a, b) => a.Year > b.Year ? b : a)
console.log('\nThe old car is = ', oldCar);
const oldCarVol = cars.reduce((car, index) =>
{
    if (car.Year < index.Year) {
        if (car.EngineVolume > index.EngineVolume) return car
        else if (car.Year < index.Year) return car
    } 
    else if (car.EngineVolume > index.EngineVolume) return car
    else return index
})
console.log('\The old wiht max volume car  = ', oldCarVol);
